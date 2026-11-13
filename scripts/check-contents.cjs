const assert = require('node:assert/strict');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true
  });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(pathToFileURL(path.resolve(__dirname, '../index.html')).href);
    await page.locator('[data-language="vi"]').click();
    await page.evaluate(() => document.fonts.ready);
    const links = page.locator('#toc-links a');
    assert.equal(await links.count(), 5);
    assert.match(await links.first().textContent(), /Tổng quan & Vai trò/);
    await page.locator('.hero-explore').click();
    assert.equal(new URL(page.url()).hash, '#contents');
    assert(Math.abs((await page.locator('#contents').boundingBox()).y) < 2, 'Explore must jump directly to contents');
    const desktopNav = await page.locator('.toc-sidebar').boundingBox();
    const overview = await page.locator('#overview').boundingBox();
    assert(desktopNav.x + desktopNav.width <= overview.x, 'Contents must sit to the left of the article');
    await page.screenshot({ path: '.qa/contents-desktop.png' });

    for (const section of ['analysis', 'requirements', 'solution']) {
      await page.evaluate((id) => document.getElementById(id).scrollIntoView({ behavior: 'instant' }), section);
      await page.waitForFunction((id) => document.querySelector('.toc-sidebar [aria-current="location"]')?.getAttribute('href') === `#${id}`, section);
      assert((await page.locator('.toc-sidebar').boundingBox()).y >= 23, 'Contents must remain pinned while reading');
      assert.equal(await page.locator('.toc-sidebar [aria-current]').count(), 1);
    }

    for (const width of [390, 320]) {
      await page.setViewportSize({ width, height: 844 });
      await page.locator('#top').scrollIntoViewIfNeeded();
      await page.locator('.hero-explore').click();
      assert.equal(await page.locator('.toc-toggle').getAttribute('aria-expanded'), 'false');
      assert.equal(await page.locator('#toc-links').isVisible(), false);
      await page.locator('.toc-toggle').click();
      assert.equal(await page.locator('.toc-toggle').getAttribute('aria-expanded'), 'true');
      assert.equal(await page.locator('#toc-links').isVisible(), true);
      await page.screenshot({ path: `.qa/contents-mobile-${width}.png` });
      await page.locator('#toc-links a[href="#requirements"]').click();
      assert.equal(await page.locator('#toc-links').isVisible(), false);
      await page.waitForFunction(() => document.querySelector('.toc-sidebar [aria-current="location"]')?.getAttribute('href') === '#requirements');
      await page.locator('.toc-toggle').click();
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('.toc-toggle').getAttribute('aria-expanded'), 'false');
      assert.equal(await page.locator('.toc-toggle').evaluate((element) => document.activeElement === element), true);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    }
    await page.locator('[data-language="en"]').click();
    assert.equal(await page.locator('.toc-toggle > span').first().textContent(), 'Contents');
    assert.match(await links.first().textContent(), /Overview & Role/);
    assert.equal(errors.length, 0, errors.join('\n'));
    console.log('Contents: immediate hero jump, 5 links, desktop sticky position, active section, mobile toggle/close/Escape, EN/VI, and responsive widths passed.');
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
