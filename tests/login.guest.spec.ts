import { test, expect } from '@playwright/test';

const url = 'https://calc-dev.v04.dev/auth';
const loginSubmitButton = 'login-submit-button';
const loginEmailInput = 'login-email-input';
const loginPasswordInput = 'login-password-input';
const loginForm = 'login-form'

// non functional test =( 
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
  await expect(page.getByTestId(loginForm).locator('span').first()).toHaveText('Неверный email');

});

test('validation', async ({ page }) => {

  await page.goto(url);
  await page.getByTestId(loginEmailInput).fill(''); 
  await page.getByTestId(loginPasswordInput).fill('');
  await page.getByTestId(loginSubmitButton).click();
  await expect(page.getByTestId(loginForm).locator('span').first()).toHaveText('Неверный email');

});

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