#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { WebsiteStack } from "./lib/website-stack";

const DOMAIN = "juholehtimaki.com";

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new cdk.App();

new WebsiteStack(app, "PortfolioWebsiteStack", DOMAIN, { env });
