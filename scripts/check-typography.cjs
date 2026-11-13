const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');

(async () => {
  const root = path.resolve(__dirname, '..');
  const output = path.join(root, '.qa');
  fs.mkdirSync(output, { recursive: true });
  const edge = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
  const browser = await chromium.launch({ executablePath: edge, headless: true });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.addInitScript(() => localStorage.setItem('hoatheomua-language', 'vi'));
    await page.goto(pathToFileURL(path.join(root, 'index.html')).href);
    await page.evaluate(() => document.fonts.ready);
    const cdp = await page.context().newCDPSession(page);
    await cdp.send('DOM.enable');
    await cdp.send('CSS.enable');
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.screenshot({ path: path.join(output, `vietnamese-${width}.png`) });
      const { root: dom } = await cdp.send('DOM.getDocument');
      for (const selector of ['.hero h1', '.hero-details dd', '.section-heading h2', '.requirement-title']) {
        const { nodeId } = await cdp.send('DOM.querySelector', { nodeId: dom.nodeId, selector });
        const { fonts } = await cdp.send('CSS.getPlatformFontsForNode', { nodeId });
        console.log(`${width}px ${selector}: ${fonts.map((font) => `${font.familyName} (${font.isCustomFont ? 'bundled' : 'system'}, ${font.glyphCount} glyphs)`).join(', ')}`);
        assert(fonts.length > 0 && fonts.every((font) => font.isCustomFont), `${selector} must render every Vietnamese glyph with bundled fonts`);
      }
      const metrics = await page.evaluate(() => {
        const title = document.querySelector('.hero h1');
        const style = getComputedStyle(title);
        return {
          width: innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          lineRatio: parseFloat(style.lineHeight) / parseFloat(style.fontSize),
          heroWidth: document.querySelector('.hero-copy').getBoundingClientRect().width
        };
      });
      assert(metrics.lineRatio >= 1.2, 'Vietnamese heading must leave room for stacked accents');
      assert(metrics.scrollWidth <= width, 'Page must fit viewport');
      assert(metrics.heroWidth <= width, 'Hero column must fit viewport');
    }
    await page.locator('[data-language="en"]').click();
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');
    await page.evaluate(() => document.fonts.ready);
    assert.equal(errors.length, 0, errors.join('\n'));
    console.log('Vietnamese fonts, accent spacing, desktop/mobile layout, and language switching passed.');
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
