import { Page, Locator } from "@playwright/test";

export class OrdersPage {

  // элементы страницы
  readonly page: Page;
  header: Locator;
  navigate: Locator;
  calcProLink: Locator;
  calcBaseLink: Locator;
  analyticsLink: Locator;
  nomenclaturesLink: Locator;
  usersLink: Locator;
  profileDropdown: Locator;
  profileLink: Locator;
  signoutLink: Locator;
  switchConfirmLink: Locator;




  constructor(page: Page) {
    this.page = page;

    this.header = page.locator('Конструктор коммерческого предложения');
    this.navigate = page.locator('nav');
    this.calcProLink = page.getByTestId('pro-calculator-content');
    this.calcBaseLink = page.getByTestId('base-calculator-content');
    this.analyticsLink = page.getByTestId('analytics-content');
    this.nomenclaturesLink = page.getByTestId('nomenclatures-content');
    this.usersLink = page.getByTestId('users-content');
    this.profileDropdown = page.getByTestId('profile-dropdown');
    this.profileLink = page.getByTestId('profile-content');
    this.signoutLink = page.getByTestId('signout-content');
    this.switchConfirmLink = page.getByTestId('base-calculator-switch-confirm-continue');
    // TODO: закончить реализацию

  }
  

}