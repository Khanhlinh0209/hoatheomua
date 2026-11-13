const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const { parseHTML } = require('linkedom');

function loadPortfolio(savedLanguage) {
  const root = path.resolve(__dirname, '..');
  const { document, window } = parseHTML(fs.readFileSync(path.join(root, 'index.html'), 'utf8'));
  window.Element.prototype.getBoundingClientRect = () => ({ top: 1000 });
  const storage = new Map(savedLanguage ? [['hoatheomua-language', savedLanguage]] : []);
  const context = vm.createContext({
    document, NodeFilter: { SHOW_TEXT: 4 },
    window: { innerHeight: 800, scrollY: 0, addEventListener() {} },
    localStorage: { getItem: (key) => storage.get(key), setItem: (key, value) => storage.set(key, value) }
  });
  vm.runInContext(fs.readFileSync(path.join(root, 'i18n.js'), 'utf8'), context);
  vm.runInContext(fs.readFileSync(path.join(root, 'script.js'), 'utf8'), context);
  return { document, window, context, storage };
}

test('business problem tabs show one workstream and preserve selection when switching languages', () => {
  const { document, window } = loadPortfolio();
  const tabs = [...document.querySelectorAll('#problem [role="tab"]')];
  const panels = [...document.querySelectorAll('#problem [role="tabpanel"]')];
  assert.equal(tabs.length, 3);
  assert.equal(panels.length, 3);
  for (const selected of [0, 1, 2, 0]) {
    tabs[selected].dispatchEvent(new window.Event('click'));
    tabs.forEach((tab, index) => {
      assert.equal(tab.getAttribute('aria-selected'), String(index === selected));
      assert.equal(tab.getAttribute('tabindex'), index === selected ? '0' : '-1');
      assert.equal(document.getElementById(tab.getAttribute('aria-controls')).hidden, index !== selected);
    });
    document.querySelector('[data-language="vi"]').dispatchEvent(new window.Event('click'));
    assert.equal(panels.filter(panel => !panel.hidden).length, 1);
    assert.equal(panels[selected].hidden, false);
  }
});

test('solution tabs separate workstreams while preserving image galleries and language selection', () => {
  const { document, window } = loadPortfolio();
  const tabs = [...document.querySelectorAll('#solution [role="tab"]')];
  const panels = [...document.querySelectorAll('#solution [role="tabpanel"]')];
  assert.equal(tabs.length, 2);
  assert.equal(panels.length, 2);
  assert.equal(panels[0].querySelectorAll('#solution-flower-wireframes img').length, 5);
  for (const index of [0, 1, 0]) {
    tabs[index].dispatchEvent(new window.Event('click'));
    document.querySelector('[data-language="vi"]').dispatchEvent(new window.Event('click'));
    panels.forEach((panel, position) => assert.equal(panel.hidden, position !== index));
    assert.equal(tabs[index].getAttribute('aria-selected'), 'true');
  }
});

test('analysis tabs switch independently and retain selection across languages and keyboard navigation', () => {
  const { document, window } = loadPortfolio();
  const tabs = [...document.querySelectorAll('#analysis [role="tab"]')];
  const panels = [...document.querySelectorAll('#analysis [role="tabpanel"]')];
  assert.equal(tabs.length, 3);
  assert.equal(panels.length, 3);
  const expectSelected = (selected) => {
    tabs.forEach((tab, index) => {
      assert.equal(tab.getAttribute('aria-selected'), String(index === selected));
      assert.equal(tab.getAttribute('tabindex'), index === selected ? '0' : '-1');
      assert.equal(panels[index].hidden, index !== selected);
    });
  };
  expectSelected(0);
  tabs[1].dispatchEvent(new window.Event('click'));
  expectSelected(1);
  document.querySelector('[data-language="vi"]').dispatchEvent(new window.Event('click'));
  expectSelected(1);
  const next = new window.Event('keydown', { cancelable: true });
  next.key = 'ArrowRight';
  tabs[1].dispatchEvent(next);
  expectSelected(2);
  assert.equal(document.querySelector('#problem [aria-selected="true"]').id, 'problem-tab-flower');
});

test('requirements tabs retain accordion state while switching groups and languages', () => {
  const { document, window } = loadPortfolio();
  const tabs = [...document.querySelectorAll('#requirements [role="tab"]')];
  assert.equal(tabs.length, 3);
  const panels = [...document.querySelectorAll('#requirements [role="tabpanel"]')];
  assert.equal(panels.filter(panel => !panel.hidden).length, 1);
  const accordion = panels[0].querySelector('.requirement-trigger');
  accordion.dispatchEvent(new window.Event('click'));
  const expanded = accordion.getAttribute('aria-expanded');
  for (const selected of [1, 2, 0]) {
    tabs[selected].dispatchEvent(new window.Event('click'));
    document.querySelector('[data-language="vi"]').dispatchEvent(new window.Event('click'));
    assert.equal(panels.filter(panel => !panel.hidden).length, 1);
    assert.equal(panels[selected].hidden, false);
  }
  assert.equal(accordion.getAttribute('aria-expanded'), expanded);
});

test('flower portfolio contains ten stories with complete acceptance criteria and no source labels', () => {
  const { document, window } = loadPortfolio('vi');
  const group = document.querySelector('#ai-requirements');
  const cards = [...group.querySelectorAll('.requirement-card')];
  assert.equal(cards.length, 10);
  assert.deepEqual(cards.map(card => card.querySelector('.requirement-id').textContent),
    ['US-A01', 'US-A02', 'US-A03', 'US-A04', 'US-A05', 'US-A06', 'US-A07', 'US-A08', 'US-A09', 'US-A10']);
  assert.equal(group.querySelectorAll('.acceptance-criterion').length, 54);
  assert.equal(group.querySelectorAll('.requirement-feature-heading').length, 3);
  assert.equal(group.querySelector('.requirement-group-heading'), null);
  assert.equal(group.querySelector('.requirement-epic'), null);
  for (const card of cards) {
    assert.equal(card.querySelector('.requirement-panel').hidden, true);
    assert.equal(card.querySelector('.requirement-source'), null);
  }
  cards[9].querySelector('button').dispatchEvent(new window.Event('click'));
  assert.match(cards[9].textContent, /mauhoa_\[ma-ket-qua\]_\[yyyyMMdd_HHmmss\]\.png/);
  document.querySelector('[data-language="en"]').dispatchEvent(new window.Event('click'));
  assert.equal(group.querySelector('.requirement-epic'), null);
});

test('greeting portfolio shows ten collapsed stories with 57 criteria and the first-generation qualification', () => {
  const { document, window } = loadPortfolio('vi');
  const group = document.querySelector('#greeting-requirements');
  const cards = [...group.querySelectorAll('.requirement-card')];
  assert.equal(cards.length, 10);
  assert.deepEqual(cards.map(card => card.querySelector('.requirement-id').textContent),
    ['US-B01', 'US-B02', 'US-B03', 'US-B04', 'US-B05', 'US-B06', 'US-B07', 'US-B08', 'US-B09', 'US-B10']);
  assert.equal(group.querySelectorAll('.acceptance-criterion').length, 57);
  assert.equal(group.querySelectorAll('.requirement-feature-heading').length, 3);
  assert.equal(group.querySelector('.requirement-group-heading'), null);
  assert.equal(group.querySelector('.requirement-source'), null);
  cards.forEach(card => assert.equal(card.querySelector('.requirement-panel').hidden, true));
  assert.match(cards[5].querySelector('.requirement-story-note').textContent, /Chưa xác minh/);
  assert.match(cards[7].textContent, /BR-133–BR-139/);
  assert.match(cards[8].textContent, /BR-110–BR-117/);
  assert.match(cards[9].textContent, /thiep_\[ma-don-hang\]_\[yyyyMMdd_HHmmss\]\.png/);
  assert.equal(group.querySelectorAll('.acceptance-criterion ul > li > strong').length, 171);
  document.querySelector('[data-language="en"]').dispatchEvent(new window.Event('click'));
  assert.match(cards[5].querySelector('.requirement-story-note').textContent, /not been verified/);
});

test('admin portfolio contains twelve collapsed stories, 71 criteria and composite-story notes', () => {
  const { document, window } = loadPortfolio('vi');
  const group = document.querySelector('#admin-requirements');
  const cards = [...group.querySelectorAll('.requirement-card')];
  assert.deepEqual(cards.map(card => card.querySelector('.requirement-id').textContent),
    ['US-C01', 'US-C02', 'US-C03', 'US-C04', 'US-C05', 'US-C06', 'US-C07', 'US-C08', 'US-C09', 'US-C10', 'US-C11', 'US-C12']);
  assert.deepEqual(cards.map(card => card.querySelectorAll('.acceptance-criterion').length), [6,6,6,4,6,7,7,6,5,5,6,7]);
  assert.equal(group.querySelectorAll('.requirement-feature-heading').length, 3);
  assert.equal(group.querySelectorAll('.requirement-rules > li').length, 41);
  assert.equal(group.querySelectorAll('.acceptance-criterion ul > li > strong').length, 213);
  assert.equal(group.querySelector('.requirement-group-heading, .requirement-source, .requirement-summary'), null);
  cards.forEach(card => assert.equal(card.querySelector('.requirement-panel').hidden, true));
  for (const index of [3,8,9]) assert.ok(cards[index].querySelector('.requirement-story-note'));
  assert.match(cards[0].textContent, /isDelete = true/);
  assert.match(cards[4].textContent, /isDelete = false/);
  assert.match(cards[7].textContent, /STORY-071 và STORY-072/);
  document.querySelector('[data-language="en"]').dispatchEvent(new window.Event('click'));
  assert.match(cards[9].querySelector('.requirement-story-note').textContent, /composite story/);
});

test('language controls translate content, metadata and dynamic requirements and restore English', () => {
  const { document, window, storage } = loadPortfolio();
  const english = document.querySelector('main').textContent;
  document.querySelector('[data-language="vi"]').dispatchEvent(new window.Event('click'));
  assert.equal(document.documentElement.lang, 'vi');
  assert.equal(document.querySelector('#hero-title').textContent, 'Hoa Theo Mùa');
  assert.equal(document.title, 'Hoa Theo Mùa');
  assert.match(document.querySelector('.hero-details').textContent, /Chuyên viên Phân tích nghiệp vụ/);
  assert.match(document.querySelector('.requirement-fields').textContent, /Tiêu chí nghiệm thu/);
  assert.match(document.querySelector('meta[name="description"]').content, /Tạo ảnh hoa bằng AI/);
  assert.equal(document.querySelector('[data-language="vi"]').getAttribute('aria-pressed'), 'true');
  assert.equal(storage.get('hoatheomua-language'), 'vi');
  document.querySelector('[data-language="en"]').dispatchEvent(new window.Event('click'));
  assert.equal(document.documentElement.lang, 'en');
  assert.equal(document.querySelector('#hero-title').textContent, 'Hoa Theo Mua');
  assert.equal(document.title, 'Hoa Theo Mua');
  assert.equal(document.querySelector('main').textContent, english);
  assert.equal(document.querySelector('[data-language="vi"]').getAttribute('aria-pressed'), 'false');
});

test('saved Vietnamese preference is applied on load and accordions still work', () => {
  const { document, window } = loadPortfolio('vi');
  assert.equal(document.documentElement.lang, 'vi');
  document.querySelectorAll('.requirement-trigger').forEach((item) => {
    assert.equal(item.getAttribute('aria-expanded'), 'false');
    assert.equal(document.getElementById(item.getAttribute('aria-controls')).hidden, true);
  });
  const trigger = document.querySelector('.requirement-trigger');
  const panel = document.getElementById(trigger.getAttribute('aria-controls'));
  trigger.dispatchEvent(new window.Event('click'));
  assert.equal(trigger.getAttribute('aria-expanded'), 'true');
  assert.equal(panel.hidden, false);
  document.querySelector('[data-language="en"]').dispatchEvent(new window.Event('click'));
  assert.equal(panel.hidden, false);
  trigger.dispatchEvent(new window.Event('click'));
  assert.equal(panel.hidden, true);
});

test('Vietnamese BACCM definitions retain accents without encoding replacements', () => {
  const { document } = loadPortfolio('vi');
  const cards = document.querySelectorAll('#problem .baccm-concepts');
  assert.equal(cards.length, 3);
  for (const card of cards) {
    const definitions = card.querySelectorAll('dd');
    assert.equal(definitions.length, 6);
    for (const [index, definition] of [...definitions].entries()) {
      assert.doesNotMatch(definition.textContent, /[?\uFFFD]/);
      if (index !== 3) assert.match(definition.textContent, /[\u1EA0-\u1EF9]/);
    }
  }
});

test('all reader-facing English text has a Vietnamese translation', () => {
  const { context } = loadPortfolio();
  const missing = vm.runInContext(`(() => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const missing = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement.closest('script, style, .language-switch, code')) continue;
      const source = node.nodeValue.replace(/\\s+/g, ' ').trim();
      if (!/[a-z]/i.test(source) || /^(HoaTheoMua|[ABC]|(?:AI|ADM)-US-___)$/.test(source)) continue;
      if (!(source in vietnameseTranslations)) missing.push(source);
    }
    return missing;
  })()`, context);
  assert.equal(JSON.stringify(missing), '[]');
});
