/**
 * @fileoverview Test script for verifying the store locator functionality.
 * This script launches the URL, interacts with the store locator elements,
 * and verifies the presence of the 'Directions' button.
 */

import { test, expect } from '@playwright/test';

// Environment variables for sensitive data
const BASE_URL = process.env.BASE_URL || 'http://localhost';

/**
 * Test suite for store locator functionality.
 */
test.describe('Store Locator Tests', () => {

  /**
   * Test case for verifying the store locator functionality.
   */
  test('should find stores and verify directions button', async ({ page }) => {
    // Step 1: Launch the URL
    await page.goto(`${BASE_URL}`);
    console.debug('Navigated to the base URL');

    // Step 2: Click on 'Store' icon
    await page.getByRole('link', { name: 'Stores', exact: true }).click();
    console.debug('Clicked on the Stores link');

    // Step 3: Enter the pincode as '500085'
    await page.getByRole('textbox').fill('500085');
    console.debug('Entered pincode 500085');

    // Step 4: Click on 'Find Stores' button
    await page.getByRole('button', { name: 'Find Stores' }).click();
    console.debug('Clicked on the Find Stores button');

    // Step 5: Click on 'Get Direction' button
    await page.getByRole('link', { name: 'Get Direction' }).first().click();
    console.debug('Clicked on the Get Direction link');

    // Step 6: Verify user able to see 'Direction' button
    const directionsButton = await page.getByRole('button', { name: 'Directions' });
    await expect(directionsButton).toBeVisible();
    console.debug('Verified the Directions button is visible');
  });

});
