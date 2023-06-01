const { test, expect } = require("@playwright/test");

test('c.Add to cart', async ({ page, context}) => {
    
     // login
     await page.goto('https://www.vcgamers.com/');
     await expect(page).toHaveTitle('Buy & Sell Game Credit and Digital Product | VCGamers');
     await page.locator('.elementor-element-e7f70c2.elementor-align-right.elementor-mobile-align-left.elementor-widget__width-auto.elementor-widget.elementor-widget-button:nth-child(1) .elementor-widget-container .elementor-button-wrapper > .elementor-button-link.elementor-button.elementor-size-sm').click();
     await page.waitForTimeout(3000);
     const newTab = await context.pages();
     await page.waitForTimeout(3000)
     await expect(newTab[1]).toHaveTitle('Top Up Game Murah dan Cepat di VCGamers Marketplace');
     await (newTab[1]).locator("//a[contains(text(),'Masuk / Daftar')]").click()
     await expect((newTab[1])).toHaveTitle('Masuk / Login - VCGamers')
     await (newTab[1]).waitForTimeout(3000)
     await (newTab[1]).locator('.container-step.relative:nth-child(1) form.w-full:nth-child(3) > input.py-4.px-5.border.w-full.bg-transparent.outline-none.mt-5').fill('adi3tz.ophelia@gmail.com')
     await (newTab[1]).locator('.container-step.relative:nth-child(1) form.w-full:nth-child(3) div.relative > input.py-4.px-5.border.w-full.bg-transparent.outline-none.mt-5').fill('!Password01')
     await (newTab[1]).locator('.btn-submit.py-3.w-full.mt-7.text-center.font-semibold.text-sm').click()

    // add to chart
    await (newTab[1]).waitForTimeout(5000)
    await (newTab[1]).locator('.category.position-relative.product:nth-child(4) div.row.row-h-scroll div.item-container:nth-child(2) a.lp-product div.content-text-container > p.lp-product-title.font-weight-bold').click()
    await (newTab[1]).locator('.add-cart.w-100 > button.button.white').click()
    // await (newTab[1]).locator('.button.primary.full:nth-child(1)').click()
    // await expect((newTab[1])).toHaveURL('https://app.vcgamers.com/marketplace/cart');
});