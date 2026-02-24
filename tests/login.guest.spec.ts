import { test, expect } from '@playwright/test';

const url = process.env.URL!;
const loginSubmitButton = 'login-submit-button';
const loginEmailInput = 'login-email-input';
const loginPasswordInput = 'login-password-input';
const loginForm = 'login-form'

// Открытие страницы / работоспособность  
test('open auth page', async ({ page }) => {

  await page.goto(url);
  await expect(page).toHaveURL(url);
  await expect(page.getByTestId('login-page-content')).toBeVisible();

});

// неверные логин/пароль
test('wrong credentials', async ({ page }) => {

  await page.goto(url);
  await page.getByTestId(loginEmailInput).fill(process.env.E2E_WRONG_EMAIL!); 
  await page.getByTestId(loginPasswordInput).fill(process.env.E2E_WRONG_PASSWORD!);
  await page.getByTestId(loginSubmitButton).click();
  await expect(page.getByTestId(loginForm).locator('span').first()).toHaveText('Неверный email');

});

// пустое состояние
test('validation', async ({ page }) => {

  await page.goto(url);
  await page.getByTestId(loginEmailInput).fill(''); 
  await page.getByTestId(loginPasswordInput).fill('');
  await page.getByTestId(loginSubmitButton).click();
  await expect(page.getByTestId(loginForm).locator('span').first()).toHaveText('Неверный email');

});

// авторизация/выход из лк
test('log out', async ({ page }) => {
  
  await page.goto(url);
  await page.getByTestId(loginEmailInput).fill(process.env.E2E_EMAIL!);
  await page.getByTestId(loginPasswordInput).fill(process.env.E2E_PASSWORD!);
  await page.getByTestId(loginSubmitButton).click();
  await page.getByTestId('header-profile-toggle').click();
  await page.getByTestId('header-profile-signout').click();
  await expect(page.getByTestId('login-page-content')).toBeVisible();
  await expect(page).toHaveURL(url);

})