import { Page, Locator } from "@playwright/test";

export class AuthPage {

  // элементы страницы
  readonly page: Page;
  logo: Locator;
  title: Locator;
  emailInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.logo = page.getByTestId('login-page-logo');
    this.title = page.locator('h2');
    this.emailInput = page.getByTestId('login-email-input');
    this.passwordInput = page.getByTestId('login-password-input');
    this.loginButton = page.getByTestId('login-submit-button');
    this.errorMessage = page.getByText('Invalid email or password');

  }
  // авторизация статичного пользователя
  async signInStaticUser() {
    await this.emailInput.fill(process.env.E2E_EMAIL);
    await this.passwordInput.fill(process.env.E2E_PASSWORD);
    await this.loginButton.click();
  }
  // TODO: уйти от статичного пользователя

  // авторизация с не верными данными
  async signInWithInvalidData() {
    await this.emailInput.fill(process.env.E2E_WRONG_EMAIL);
    await this.passwordInput.fill(process.env.E2E_WRONG_PASSWORD);
    await this.loginButton.click();

  }

  // получение ошибки авторизации
   getErrorMessage() {
    return this.errorMessage;

  }

  // открытие страницы авторизации
  async openAuthPage() {
    await this.page.goto(process.env.URL);

  }

}