import { test, expect } from '@playwright/test';

const url = 'https://calc-dev.v04.dev/auth';
const loginSubmitButton = 'login-submit-button';
const loginEmailInput = 'login-email-input';
const loginPasswordInput = 'login-password-input';

test('open auth page', async ({ page }) => {

  await page.goto(url);
  await expect(page).toHaveURL(url);
  await expect(page.getByTestId('login-page-content')).toBeVisible();

});

test('wrong credentials', async ({ page }) => {

  await page.goto(url);
  await page.getByTestId(loginEmailInput).fill(process.env.E2E_WRONG_EMAIL!); 
  await page.getByTestId(loginPasswordInput).fill(process.env.E2E_WRONG_PASSWORD!);
  await page.getByTestId(loginSubmitButton).click();
  await expect(page.getByTestId('login-form').locator('span').first()).toHaveText(/Invalid email or password|Неверный email/);

});

test('validation', async ({ page }) => {

  await page.goto(url);
  await page.getByTestId(loginEmailInput).fill(''); 
  await page.getByTestId(loginPasswordInput).fill('');
  await page.getByTestId(loginSubmitButton).click();
  await expect(page.getByTestId('login-form').locator('span').first()).toHaveText(/Пароль должен быть не менее 5 символов|Неверный email/);

});