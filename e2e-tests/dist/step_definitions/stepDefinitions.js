"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
const { webkit } = require('playwright');
const defaults = __importStar(require("../support/hook"));
(0, cucumber_1.Given)('test one exec', async function () {
    // Write code here that turns the phrase above into concrete actions
    //   const browser = await webkit.launch();
    //   const context = await browser.newContext();
    //   const page = await context.newPage();
    let page = defaults.page;
    await page.goto('https://sinhalaforkids.com');
    //   await page.screenshot({ path: 'screenshot.png' });
    const title = await page.title();
    (0, test_1.expect)(title).toBe('Sinhala for kids');
    //   await expect(page).toHaveTitle(/Sinhala for kids/);
});
