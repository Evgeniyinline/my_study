import { test as setup, expect } from '@playwright/test';

// функция аутентификации пользователя

setup('authenticate', async ({ page }, testInfo) => {

  await page.goto(process.env.URL!);

  await page.getByTestId('login-email-input').fill(process.env.E2E_EMAIL!);
  await page.getByTestId('login-password-input').fill(process.env.E2E_PASSWORD!);
  await page.getByTestId('login-submit-button').click();

  await expect(page.getByTestId('pro-calculator-content')).toBeVisible();

  const statePath =
    testInfo.project.name.includes('firefox')
      ? 'playwright/.auth/firefox.json'
      : 'playwright/.auth/chromium.json';

  await page.context().storageState({ path: statePath });
});