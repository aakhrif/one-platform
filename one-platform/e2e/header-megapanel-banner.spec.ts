// This file was renamed from example.spec.ts to header-megapanel-banner.e2e-spec.ts for clarity.
import { test, expect } from '@playwright/test';

test('header and mega-panel are positioned correctly when top-banner is shown', async ({ page }) => {
  // Set up: TopBanner must be visible (adapt this if your app uses a different mechanism)
  await page.goto('/?showBanner=true');

  // Header should have the class 'with-banner' and be shifted down
  const header = page.locator('header.ui-header');
  await expect(header).toHaveClass(/with-banner/);

  // Show mega-panel (e.g. by hovering over the products menu)
  await page.hover('.ui-header__nav a[routerlink="/products"]');
  const megaPanel = page.locator('.mega-panel');
  await expect(megaPanel).toBeVisible();

  // Header should have top: 2.5rem (due to .with-banner)
  const headerTop = await header.evaluate((el) => getComputedStyle(el).top);
  // Convert px to rem (default 1rem = 16px)
  const px = parseFloat(headerTop);
  const rem = px / 16;
  expect(rem).toBeCloseTo(2.5, 1); // 1 decimal place tolerance
});
