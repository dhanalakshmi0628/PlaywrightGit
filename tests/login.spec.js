import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => {
  await page.goto("https://www.amazon.in/"); 

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon.in/);
  await page.waitForTimeout(4000);
await page.getByRole('link', { name: 'Get started' }).click();
await page.waitForTimeout(4000);
 await  page.getByText('Hello, sign in').click();
await page.pause();
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).fill('laxmidhanu28@gmail.com');
await page.waitForTimeout(1000);
  await page.locator('input.a-button-input:visible').click();
await page.waitForTimeout(1000);
await page.locator('[name="password"]').fill('New@2026');
await page.locator("//input[@id='signInSubmit']").click();
//await page.locator('i.hm-icon.nav-sprite:visible').click();
 await page.waitForTimeout(3000);
await page.locator(".nav-a[href='/b/?node=6637738031&ref_=nav_cs_amazonbasics']").click();
//wait page.locator("//div[normalize-space()='Mobiles, Computers']").click();
  await page.waitForTimeout(6000);
await page.mouse.down(20,20);
await page.locator("div[id='1'] img[class='_carousel-v2_style_carousel-tab-cell-images__3ChIX']").click();
await page.waitForTimeout(4000);
//ait  page.locator("//div[@id='anonCarousel2']//div[@id='acsProductBlockV2-0']//div[@class='a-section a-spacing-base a-spacing-top-micro _carousel-v2_style_product-image__3GTWS acsProductBlockV2__product_image _carousel-v2_style_grey-gradient-background__2mdc9']").click();
await page.waitForTimeout(2000);
await page.getByRole('link', { name: 'AmazonBasics' }).click();
  await page.locator('[id="1"]').getByRole('img').click();
  await page.getByRole('link', { name: 'Amazon Basics Travel Neck' }).click();
  await page.goto('https://www.amazon.in/Amazon-Basics-Travel-Pillow-Comfortable/dp/B0DFMHFMJ3/ref=s9_acsd_al_bw_cv2_1_0_t?_encoding=UTF8&pf_rd_m=A21TJRUUN4KGV&pf_rd_s=merchandised-search-3&pf_rd_r=VATBH3BBT23VSAGJRF2S&pf_rd_p=75fde330-7be7-4158-8a2b-9c848ce8f6c7&pf_rd_t=&pf_rd_i=6637738031&th=1');
  await page.getByRole('button', { name: 'Add to cart', exact: true }).click();
});