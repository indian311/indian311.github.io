const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const script = fs.readFileSync('assets/language.js', 'utf8');
function route(language, path = '/', saved, blocked = false, languages) {
  let redirected;
  let stored = saved;
  const url = new URL(path, 'https://malangsoft.pages.dev');
  vm.runInNewContext(script, {
    URL,
    navigator: { language, languages: languages || [language] },
    location: { href: url.href, pathname: url.pathname, replace: value => redirected = value },
    localStorage: {
      getItem() { if (blocked) throw Error('disabled'); return stored; },
      setItem(_, value) { if (blocked) throw Error('disabled'); stored = value; }
    }
  });
  return { url: redirected || url.href, stored };
}
assert.equal(route('ko-KR').url, 'https://malangsoft.pages.dev/');
assert.equal(route('ko').url, 'https://malangsoft.pages.dev/');
assert.equal(route('en-US', '/hanjafriend/#how').url, 'https://malangsoft.pages.dev/en/hanjafriend/#how');
assert.equal(route('ja-JP').url, 'https://malangsoft.pages.dev/en/');
assert.equal(route('ko-KR', '/', null, false, ['en-US', 'ko-KR']).url, 'https://malangsoft.pages.dev/en/');
assert.equal(route('ko-KR', '/en/helldia/?lang=en').stored, 'en');
assert.equal(route('en-US', '/en/helldia/?lang=ko').url, 'https://malangsoft.pages.dev/helldia/?lang=ko');
assert.equal(route('ko-KR', '/myfontmaker/', 'en').url, 'https://malangsoft.pages.dev/en/myfontmaker/');
assert.equal(route('en-US', '/en/hanjafriend/privacy').url, 'https://malangsoft.pages.dev/en/hanjafriend/privacy');
assert.equal(route('en-US', '/', null, true).url, 'https://malangsoft.pages.dev/en/');
assert.equal(route('ko-KR', '/en/?lang=en', null, true).url, 'https://malangsoft.pages.dev/en/?lang=en');
assert.equal(route('ko-KR', '/?lang=bad', 'bad').url, 'https://malangsoft.pages.dev/?lang=bad');
assert.equal(route('en-US', '/flowerpig/#support').url, 'https://malangsoft.pages.dev/en/flowerpig/#support');
assert.equal(route('ko-KR', '/en/flowerpig/privacy.html?lang=ko').url, 'https://malangsoft.pages.dev/flowerpig/privacy.html?lang=ko');
console.log('PASS: browser languages, overrides, storage disabled, deep links, no redirect loop');
