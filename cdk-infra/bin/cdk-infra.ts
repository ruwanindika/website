#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkInfraStack } from "../lib/cdk-infra-stack";
import * as defaults from "../lib/defaults";

const app = new cdk.App();

// PROD
new CdkInfraStack(app, "ProdSinhalaForKidsWebsite", {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  env: defaults.PROD_ENV,
  deploymentStage: "prod",

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});

// BETA
new CdkInfraStack(app, "BetaSinhalaForKidsWebsite", {
  env: defaults.BETA_ENV,
  deploymentStage: "beta",
});
