import { test, expect } from '@playwright/test';

test('open auth page', async ({ page }) => {
  const url = 'https://calc-dev.v04.dev/auth';

  await page.goto(url);
  await expect(page).toHaveURL(url);
  await expect(page.getByTestId('login-page-content')).toBeVisible();
});

test('login form negative case', async ({ page }) => {
  const url = 'https://calc-dev.v04.dev/auth';
  const email = 'test@mail.com';
  const password = '123456';

  await page.goto(url);
  await page.getByTestId('login-email-input').fill(email); 
  await page.getByTestId('login-password-input').fill(password);
  await page.getByTestId('login-submit-button').click();
  await expect(page.getByTestId('login-form').locator('span').first()).toHaveText('Invalid email or password');
});
