import { test as setup, expect } from '@playwright/test';
import { AuthPage } from '@/pages/auth.page';

// функция аутентификации пользователя

setup('authenticate', async ({ page }, testInfo) => {
  const authPage = new AuthPage(page);

  await authPage.openAuthPage();
  await authPage.signInStaticUser();

  await expect(authPage.page.getByTestId('pro-calculator-content')).toBeVisible();

  const statePath =
    testInfo.project.name.includes('firefox')
      ? 'playwright/.auth/firefox.json'
      : 'playwright/.auth/chromium.json';

  await page.context().storageState({ path: statePath });
});
