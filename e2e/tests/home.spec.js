import { test, expect } from "@playwright/test";

test("homepage loads successfully", async ({ page }) => {
	await page.goto("/");

	await expect(page.locator("body")).toBeAttached();
});

test("always passes test", async ({ page }) => {
	await page.goto("/");

	// Just checking that true is true
	expect(true).toBe(true);
});
