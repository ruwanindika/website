import { arrayBuffer } from "node:stream/consumers";

export const PROD_URL = "sinhalaforkids.com";
export const BETA_URL = "beta.sinhalaforkids.com";

export const PROD_ENV = {
  account: "161580273020",
  region: "us-east-1",
};
export const BETA_ENV = {
  account: "161580273020",
  region: "ap-southeast-2",
};

export function getEnvInfo(deploymentStage: any) {
  let returnValue: string[] = [];

  if (deploymentStage == "prod") {
    returnValue = [PROD_URL];
  } else if (deploymentStage == "beta") {
    returnValue = [BETA_URL];
  } else {
    console.log("Stage not found : " + deploymentStage);
  }

  return returnValue;
}
