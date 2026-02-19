import { test, expect } from "@playwright/test";

const url = 'https://calc-dev.v04.dev/orders/pro';

test('change calculator to pro or base', async ({ page }) => {

  await page.goto(url);
  await expect(page.getByTestId('pro-calculator-content')).toBeVisible();
  await page.getByTestId('header-nav-link-orders-base').click();
  await expect(page.getByTestId('base-calculator-switch-confirm-modal-content')).toBeVisible();
  await page.getByTestId('base-calculator-switch-confirm-continue').click();
  await expect(page.getByTestId('base-calculator-content').locator('h1').first()).toHaveText('Base');
  await expect(page).toHaveURL('https://calc-dev.v04.dev/orders/base');

});

test.skip('click calc', async ({ page }) => {

  await page.goto(url);
  await expect(page.getByRole('paragraph')).toContainText('Конструктор коммерческого предложения');
  await expect(page.getByRole('heading', { name: 'Коммерческое предложение' })).toBeVisible();
  await expect(page.getByTestId('pro-calculator-city-selector-option-0')).toContainText('Москва');
  await page.getByTestId('pro-calculator-city-selector-option-0').click();
  await expect(page.getByTestId('pro-calculator-content').locator('span')).toHaveText('Город: Москва');
  await page.getByTestId('pro-calculator-city-selector-option-1').click();
  await expect(page.getByTestId('pro-calculator-content').locator('span')).toHaveText('Город: Санкт-Петербург');
  await page.getByTestId('pro-calculator-city-selector-option-2').click();
  await expect(page.getByTestId('pro-calculator-content').locator('span')).toHaveText('Город: Екатеринбург');
  await page.getByTestId('pro-calculator-sla-selector-option-0').click();
  await expect(page.getByTestId('pro-calculator-content').locator('span')).toHaveText('SLA: 99.000%');
  await page.getByTestId('pro-calculator-sla-selector-option-1').click();
  await expect(page.getByTestId('pro-calculator-content').locator('span')).toHaveText('SLA: 99.500%');
  await page.getByTestId('pro-calculator-sla-selector-option-2').click();
  await expect(page.getByTestId('pro-calculator-content').locator('span')).toHaveText('SLA: 99.982%');
  await page.getByTestId('pro-calculator-sla-selector-option-3').click();
  await expect(page.getByTestId('pro-calculator-content').locator('span')).toHaveText('SLA: 99.999%');
  
});
