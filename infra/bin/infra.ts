#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { InfraStack } from "../lib/infra-stack";
import "dotenv/config";

const app = new cdk.App();

const vars = {
  domain: "juholehtimaki.com"
};

const env = {
  region: process.env.AWS_REGION,
  account: process.env.AWS_ACCOUNT_ID,
}

new InfraStack(
  app,
  "InfraStack",
  { domain: vars.domain },
  { env }
);
