"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BETA_URL = exports.PROD_URL = exports.page = exports.browser = void 0;
exports.getEnvInfo = getEnvInfo;
const cucumber_1 = require("@cucumber/cucumber");
const playwright_1 = require("playwright");
(0, cucumber_1.BeforeAll)({ timeout: 30 * 1000 }, async function () {
  exports.browser = await playwright_1.chromium.launch({
    headless: true,
  });
  exports.page = await exports.browser.newPage();
  return exports.page;
});
(0, cucumber_1.AfterAll)(async function () {
  return exports.browser.close();
});
(0, cucumber_1.After)(async function (scenario) {
  if (scenario.result?.status === cucumber_1.Status.FAILED) {
    const attach = this.attach;
    const screenshot = await exports.page.screenshot();
    return attach(screenshot, "image/png");
  }
});
exports.PROD_URL = "sinhalaforkids.com";
exports.BETA_URL = "beta.sinhalaforkids.com";
function getEnvInfo(deploymentStage) {
  let returnValue;
  if (deploymentStage == "prod") {
    returnValue = exports.PROD_URL;
  } else if (deploymentStage == "beta") {
    returnValue = exports.BETA_URL;
  } else {
    console.log("Stage not found : " + deploymentStage);
  }
  return returnValue;
}
