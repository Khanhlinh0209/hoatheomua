const assert = require('node:assert/strict');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true
  });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    await page.goto(pathToFileURL(path.resolve(__dirname, '../index.html')).href);
    const originalUrl = page.url();
    const links = page.locator('.flower-diagram-link');
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 844 });
      for (let index = 0; index < await links.count(); index++) {
        await links.nth(index).click();
        const viewer = page.locator('#diagram-viewer');
        await viewer.waitFor({ state: 'visible', timeout: 3000 });
        assert.equal(await viewer.locator('img').getAttribute('src'), await links.nth(index).getAttribute('href'));
        await viewer.locator('[data-diagram-zoom]').click();
        assert.equal(await viewer.locator('[data-diagram-zoom]').getAttribute('aria-pressed'), 'true');
        await page.keyboard.press('Escape');
        assert.equal(await viewer.isVisible(), false);
        assert.equal(await links.nth(index).evaluate(el => el === document.activeElement), true);
        assert.equal(page.url(), originalUrl);
        assert.equal(page.context().pages().length, 1);
      }
    }
    await page.locator('[data-language="vi"]').click();
    await links.first().click();
    await page.getByRole('button', { name: 'Đóng ảnh' }).click();
    assert.equal(await page.locator('#diagram-viewer').isVisible(), false);
    await links.first().click();
    await page.mouse.click(1, 1);
    assert.equal(await page.locator('#diagram-viewer').isVisible(), false);
    console.log('Diagram viewer: desktop/mobile, both images, zoom, Escape, focus, close and no new tabs passed.');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
