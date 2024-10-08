import {
  Stack,
  StackProps,
  aws_s3 as s3,
  aws_s3_deployment as s3deploy,
  aws_route53 as route53,
  RemovalPolicy,
  aws_certificatemanager as acm,
  aws_cloudfront as cloudfront,
  aws_route53_targets as targets,
} from "aws-cdk-lib";
import { Construct } from "constructs";

type Variables = {
  domain: string;
};

export class InfraStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    variables: Variables,
    props?: StackProps
  ) {
    super(scope, id, props);

    const { domain } = variables;

    const zone = route53.HostedZone.fromLookup(this, "Zone", {
      domainName: domain,
    });

    const siteCertificate = new acm.DnsValidatedCertificate(
      this,
      "SiteCertificate",
      {
        domainName: domain,
        hostedZone: zone,
        region: "us-east-1", //cloudfront cert has to be located in us-east-1
      }
    );

    const siteBucket = new s3.Bucket(this, "SiteBucket", {
      bucketName: variables.domain,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
      autoDeleteObjects: true,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    const cloudFrontOAI = new cloudfront.OriginAccessIdentity(
      this,
      "CloudFrontOAI"
    );

    siteBucket.grantRead(cloudFrontOAI);

    const siteDistribution = new cloudfront.CloudFrontWebDistribution(
      this,
      `CloudFrontDistribution`,
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: siteBucket,
              originAccessIdentity: cloudFrontOAI,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        viewerCertificate: {
          aliases: [variables.domain],
          props: {
            acmCertificateArn: siteCertificate.certificateArn,
            sslSupportMethod: "sni-only",
            minimumProtocolVersion: "TLSv1.2_2021",
          },
        },
      }
    );

    new route53.ARecord(this, "SiteRecord", {
      recordName: variables.domain,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(siteDistribution)
      ),
      zone,
    });

    new s3deploy.BucketDeployment(this, "DeploymentToSiteBucket", {
      sources: [s3deploy.Source.asset("../client/dist")],
      destinationBucket: siteBucket,
      distribution: siteDistribution,
      distributionPaths: ["/*"],
      retainOnDelete: false,
    });
  }
}
