import { test, expect } from "@playwright/test";

// non functional test =( 
test('change calculator to pro or base', async ({ page }) => {

await page.goto('https://calc-dev.v04.dev/orders/pro');
//   await page.goto(url);
//   await expect(page).toHaveURL(url);
  await expect(page.getByTestId('pro-calculator-content')).toBeVisible();
  await page.getByTestId('header-nav-link-orders-base').click();
  await expect(page.getByTestId('base-calculator-switch-confirm-modal-content')).toBeVisible();
  await page.getByTestId('base-calculator-switch-confirm-continue').click();
  await expect(page.getByTestId('base-calculator-content').locator('h1').first()).toHaveText('Base');
  await expect(page).toHaveURL('https://calc-dev.v04.dev/orders/base');

});
