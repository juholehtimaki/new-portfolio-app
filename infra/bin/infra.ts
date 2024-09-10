#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { InfraStack } from "../lib/infra-stack";
import "dotenv/config";

const app = new cdk.App();

const env = {
  region: process.env.AWS_REGION,
  account: process.env.ACCOUNT_ID,
  domain: process.env.DOMAIN,
};

new InfraStack(
  app,
  "InfraStack",
  { domain: process.env.DOMAIN ?? "" },
  { env }
);
