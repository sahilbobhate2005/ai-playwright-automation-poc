import { expect, type Locator, type Page } from '@playwright/test';

export class GitHubProfilePage {
  readonly page: Page;
  readonly repoTab: Locator;

  // 1. Define the locators in the constructor
  constructor(page: Page) {
    this.page = page;
    this.repoTab = page.getByRole('link', { name: /Repositories/ });
  }

  // 2. Abstract the actions into reusable methods
  async navigateToProfile() {
    await this.page.goto('https://github.com/sahilbobhate2005');
    await expect(this.page).toHaveTitle(/sahilbobhate2005/);
  }

  async clickRepositories() {
    await this.repoTab.click();
  }
}