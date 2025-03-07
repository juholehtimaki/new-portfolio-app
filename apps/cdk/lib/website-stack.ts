import * as cdk from "aws-cdk-lib";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as targets from "aws-cdk-lib/aws-route53-targets";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import type { Construct } from "constructs";

export class WebsiteStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    domain: string,
    props?: cdk.StackProps,
  ) {
    super(scope, id, props);

    const zone = route53.HostedZone.fromLookup(this, "Zone", {
      domainName: domain,
    });

    const certificate = new acm.DnsValidatedCertificate(this, "Certificate", {
      domainName: domain,
      validation: acm.CertificateValidation.fromDns(zone),
      hostedZone: zone,
      region: "us-east-1",
    });

    const websiteBucket = new s3.Bucket(this, "WebsiteBucket", {
      bucketName: domain,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
      autoDeleteObjects: true,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    const cfnDistribution = new cloudfront.Distribution(
      this,
      "CfnDistribution",
      {
        defaultRootObject: "index.html",
        minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
        defaultBehavior: {
          origin: origins.S3BucketOrigin.withOriginAccessControl(websiteBucket),
          compress: true,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        errorResponses: [
          {
            httpStatus: 403,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
          },
        ],
        certificate: certificate,
        domainNames: [domain],
      },
    );

    new route53.ARecord(this, "Record", {
      recordName: domain,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(cfnDistribution),
      ),
      zone,
    });

    new s3deploy.BucketDeployment(this, "WebsiteBucketDeployment", {
      sources: [s3deploy.Source.asset("../client/dist")],
      destinationBucket: websiteBucket,
      distribution: cfnDistribution,
      distributionPaths: ["/*"],
      retainOnDelete: false,
    });
  }
}
