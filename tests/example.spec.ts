import { test, expect } from '@playwright/test';

test('Verify GitHub profile loads and displays repositories', async ({ page }) => {
  // 1. Navigate to your GitHub profile
  await page.goto('https://github.com/sahilbobhate2005');

  // 2. Validate the title
  await expect(page).toHaveTitle(/sahilbobhate2005/);

  // 3. Locate the "Repositories" link using regex to ignore the dynamic number counter
  const repoTab = page.getByRole('link', { name: /Repositories/ });
  await expect(repoTab).toBeVisible();
  
  // 4. Click the link and verify the URL changes
  await repoTab.click();
  await expect(page).toHaveURL(/.*tab=repositories/);
  
  // 5. Architecture Note for LLM-Assisted Testing:
  // An AI/MCP agent connected to this runner would read the accessibility tree here 
  // to dynamically find and test pinned repos, even if GitHub changes their DOM structure.
});