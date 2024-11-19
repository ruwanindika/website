"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
const { webkit } = require("playwright");
const defaults = __importStar(require("../support/hook"));
// let page = defaults.page;
(0, cucumber_1.Given)("test one exec", async function () {
  // Write code here that turns the phrase above into concrete actions
  //   const browser = await webkit.launch();
  //   const context = await browser.newContext();
  //   const page = await context.newPage();
  const stage = process.env.npm_config_stage || "beta";
  let page = defaults.page;
  const url = defaults.getEnvInfo(stage);
  await page.goto("https:/" + url);
  //   await page.screenshot({ path: 'screenshot.png' });
  const title = await page.title();
  (0, test_1.expect)(title).toBe("Sinhala for kids");
  //   await expect(page).toHaveTitle(/Sinhala for kids/);
});
(0, cucumber_1.Given)("user navigate to the homepage", async function () {
  const stage = process.env.npm_config_stage || "beta";
  const url = defaults.getEnvInfo(stage);
  await defaults.page.goto("https://" + url);
});
(0, cucumber_1.Then)(
  "home page has the {string} {string}",
  async function (locationString, textString) {
    if (locationString == "header") {
      const title = await defaults.page.title();
      (0, test_1.expect)(title).toBe(textString);
    } else if (locationString == "footer") {
      const locator = defaults.page.locator(".footer-main");
      await (0, test_1.expect)(locator).toContainText(textString);
    } else if (locationString == "button") {
      const locator = defaults.page.locator(".next-button");
      await (0, test_1.expect)(locator).toContainText(textString);
    } else if (locationString == "image") {
      const image = defaults.page.locator("img");
      const src = await image.getAttribute("src");
      (0, test_1.expect)(src).toBe(textString);
    }
  },
);
(0, cucumber_1.Then)("home page contains the text", async function (docString) {
  // Write code here that turns the phrase above into concrete actions
  const locator = defaults.page.locator(".book-intro p");
  const innerText = await locator.allInnerTexts();
  (0, test_1.expect)(innerText[0]).toBe(docString);
});
