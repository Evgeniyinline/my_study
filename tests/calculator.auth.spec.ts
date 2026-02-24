import { test, expect } from "@playwright/test";

const url = 'https://calc-dev.v04.dev';

// проверка всех разделов навигации
test('check all navigation sections', async ({ page }) => {

  const locator = 'h1'

  await page.goto(url);
  await expect(page.getByTestId('pro-calculator-content')).toBeVisible();
  await page.getByTestId('header-nav-link-orders-base').click();
  await expect(page.getByTestId('base-calculator-switch-confirm-modal-content')).toBeVisible();
  await page.getByTestId('base-calculator-switch-confirm-continue').click();
  await expect(page.getByTestId('base-calculator-content').locator(locator).first()).toHaveText('Base');
  await expect(page).toHaveURL(url + '/orders/base');
  await page.getByTestId('header-nav-link-analytics').click();
  await expect(page).toHaveURL(url + '/analytics');
  await expect(page.getByTestId('analytics-page').locator(locator)).toHaveText('Аналитика продукта');
  await page.getByTestId('header-nav-link-nomenclatures').click();
  await expect(page).toHaveURL(url + '/nomenclatures');
  await expect(page.getByTestId('nomenclatures-page').locator(locator)).toHaveText('Номенклатуры');
  await page.getByTestId('header-nav-link-users').click();
  await expect(page).toHaveURL(url + '/users');
  await expect(page.getByTestId('users-page').locator(locator)).toHaveText('Пользователи');
  await page.getByTestId('app-logo-link').click();
  await expect(page).toHaveURL(url + '/orders/pro');
  await expect(page.getByTestId('pro-calculator-content').locator(locator).first()).toHaveText('Pro');

});

// тест кликов в калькулятор коммерческого предложения
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
