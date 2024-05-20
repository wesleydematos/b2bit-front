import { test, expect } from "@playwright/test";

const baseUrl = "http://localhost:5173/";

test.describe("Logout functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);

    await page.fill('input[name="email"]', "cliente@youdrive.com");

    await page.fill('input[name="password"]', "password");

    await page.click('button[type="submit"]');

    await page.waitForURL(`${baseUrl}profile`);
    expect(page.url()).toBe(`${baseUrl}profile`);
  });

  test("Logout and redirect to login", async ({ page }) => {
    await page.click('button:has-text("Logout")');

    await page.waitForURL(baseUrl);
    expect(page.url()).toBe(baseUrl);
  });
});
