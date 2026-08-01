// e2e/homepage.spec.ts
import { test, expect } from '@playwright/test';

test('homepage loads and shows the main heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('main')).toBeVisible();
});
