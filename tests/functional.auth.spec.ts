import { test, expect } from "@playwright/test";

const url = 'https://calc-dev.v04.dev/orders/pro';

// проверка смены конфигурации sla и города
test('change sla/city', async ({ page }) => {

await page.goto(url);
await page.getByTestId('pro-calculator-city-selector-option-0').click();
await page.getByTestId('pro-calculator-sla-selector-option-1').click();
await expect (page.getByTestId('pro-calculator-configuration-section').locator('span').first()).toHaveText('Город: Москва');
await expect (page.getByTestId('pro-calculator-configuration-section').locator('span').nth(1)).toHaveText('SLA: 99.500%');
await page.getByTestId('pro-calculator-city-selector-option-1').click();
await page.getByTestId('pro-calculator-sla-selector-option-2').click();
await expect (page.getByTestId('pro-calculator-configuration-section').locator('span').first()).toHaveText('Город: Санкт-Петербург');
await expect (page.getByTestId('pro-calculator-configuration-section').locator('span').nth(1)).toHaveText('SLA: 99.982%');
await page.getByTestId('pro-calculator-city-selector-option-2').click();
await page.getByTestId('pro-calculator-sla-selector-option-3').click();
await expect (page.getByTestId('pro-calculator-configuration-section').locator('span').first()).toHaveText('Город: Екатеринбург');
await expect (page.getByTestId('pro-calculator-configuration-section').locator('span').nth(1)).toHaveText('SLA: 99.999%');


});