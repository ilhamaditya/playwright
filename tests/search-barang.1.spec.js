const { test, expect } = require("@playwright/test");

test('Search Barang - Tanpa Login', async ({ page, context}) => {
    
    // search barang
    await page.goto('https://app.vcgamers.com/');
    await page.waitForTimeout(3000)
    // await page.type('//header/div[2]/div[1]/input[1]','Mobile Legends')
    // await page.waitForLoadState()
    await page.locator('//header/div[2]/div[1]/input[1]').fill('Mobile Legends');

    await page.waitForTimeout(3000)
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000)
    expect(await page.textContent('p[data-v-175a6a1d].font-weight-bold')).toContain('Mobile Legends')
});