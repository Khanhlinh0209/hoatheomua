const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

test('page tells a feature-level ownership story across five sections', () => {
  const html = read('index.html');

  assert.match(html, /Hoa Theo Mua — Business Analysis Case Study/);
  assert.match(html, /AI Flower Image Generation, AI Greeting Card Creation &amp; Admin Management/);
  assert.match(html, /<dt>Role<\/dt><dd>Business Analyst<\/dd>/);
  assert.match(html, /Team Product/);
  assert.match(html, /<h4 id="greeting-scope-title">Key feature groups<\/h4>/);

  assert.doesNotMatch(html, /id="(?:validation|challenges|lessons)"|href="#(?:validation|challenges|lessons)"|data-section="0[678]"/);
  for (let section = 1; section <= 5; section += 1) {
    assert.match(html, new RegExp(`data-section="0${section}"`));
  }
});

test('page separates three feature groups and labels unverified content honestly', () => {
  const html = read('index.html');

  assert.match(html, /Workstream A — AI Flower Image Generation/);
  assert.match(html, /Workstream B — AI Greeting Card Creation/);
  assert.match(html, /Workstream C — Admin Management/);
  assert.match(html, /To be verified/);
  assert.doesNotMatch(html, /I designed the entire platform/i);
  assert.doesNotMatch(html, /I owned the architecture/i);
});

test('page links the visual and interaction assets', () => {
  const html = read('index.html');

  assert.match(html, /href="styles\.css"/);
  assert.match(html, /src="script\.js"/);
});

test('visual system defines both accents and responsive safeguards', () => {
  const css = read('styles.css');

  assert.match(css, /--ai-accent:/);
  assert.match(css, /--admin-accent:/);
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);
});

test('requirements model carries story, criteria and rules for all three groups', () => {
  const script = read('script.js');

  assert.match(script, /const requirementGroups/);
  assert.match(script, /group: 'ai'/);
  assert.match(script, /group: 'admin'/);
  assert.match(script, /"group": "greeting"/);
  for (const field of ['id', 'story', 'criteria', 'rules']) {
    assert.match(script, new RegExp(`"${field}":`));
  }
});

test('accordion behavior exposes and updates accessible state', () => {
  const script = read('script.js');

  assert.match(script, /aria-expanded/);
  assert.match(script, /aria-controls/);
  assert.match(script, /\.hidden =/);
  assert.match(script, /renderRequirements/);
});
