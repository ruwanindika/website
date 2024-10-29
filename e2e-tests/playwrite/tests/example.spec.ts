import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://sinhalaforkids.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sinhala for kids/);
});

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: " Next page" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" }),
//   ).toBeVisible();
// });
