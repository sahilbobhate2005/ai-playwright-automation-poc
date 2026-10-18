import { test, expect } from '@playwright/test';
import { GitHubProfilePage } from './GitHubProfilePage';

test('Verify GitHub profile using Page Object Model', async ({ page }) => {
  // Instantiate the page object
  const githubPage = new GitHubProfilePage(page);

  await githubPage.navigateToProfile();
  await githubPage.clickRepositories();
  
  await expect(page).toHaveURL(/.*tab=repositories/);
});