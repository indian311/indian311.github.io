"""Check published files, bilingual metadata and legacy policy anchors."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import sys
import xml.etree.ElementTree as ET

root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path('.')

class Document(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.ids, self.refs, self.canonical, self.languages = [], [], [], {}
        self.feed(path.read_text())
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.append(a['id'])
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonical.append(a['href'])
        if tag == 'link' and a.get('rel') == 'alternate':
            self.languages[a['hreflang']] = a['href']
        for key in ['href', 'src']:
            if key in a:
                self.refs.append(a[key])

def resolve(path):
    if path.is_dir():
        return path / 'index.html'
    if not path.exists() and not path.suffix:
        return path.with_suffix('.html')
    return path

files = [root / 'index.html']
for folder in ['flowerpig', 'hanjafriend', 'myfontmaker', 'gasgasstation', 'campus-romance', 'helldia', 'legacy-privacy', 'en']:
    files.extend(p for p in (root / folder).rglob('*.html') if p.name != '404.html')
assert len(files) == 22, len(files)
for path in files:
    d = Document(path)
    assert len(d.canonical) == 1, path
    assert set(d.languages) == {'ko', 'en', 'x-default'}, path
    assert d.canonical[0] in d.languages.values(), path
    assert len(d.ids) == len(set(d.ids)), path
    for ref in d.refs:
        url = urlsplit(ref)
        if url.scheme or url.netloc:
            continue
        target = root / unquote(url.path).lstrip('/') if url.path.startswith('/') else path.parent / unquote(url.path) if url.path else path
        target = resolve(target)
        assert target.is_file(), (path, ref)
        if url.fragment:
            assert unquote(url.fragment) in Document(target).ids, (path, ref)
for home in [root / 'index.html', root / 'en/index.html']:
    s = home.read_text()
    assert 'id1312694667' not in s and 'id830071127' not in s
    assert '혼술남녀' not in s and '#nowplaying' not in s
    assert {'privacy-solo-drink-guide', 'privacy-nowplaying'} <= set(Document(home).ids)
for home, prefix in [(root / 'index.html', ''), (root / 'en/index.html', '/en')]:
    refs = Document(home).refs
    assert f'{prefix}/flowerpig/' in refs, home
    assert f'{prefix}/flowerpig/privacy.html' in refs, home
for prefix in ['', 'en/']:
    game = root / prefix / 'flowerpig/index.html'
    assert 'support' in Document(game).ids, game
    assert 'mailto:indian311@icloud.com' in game.read_text(), game
    assert not any('apps.apple.com' in ref or 'play.google.com/store' in ref for ref in Document(game).refs), game
urls = [e.text for e in ET.parse(root / 'sitemap.xml').findall('.//{*}loc')]
assert len(urls) == 22 and len(set(urls)) == 22
for url in urls:
    assert resolve(root / urlsplit(url).path.lstrip('/')).is_file(), url
print('PASS: 22 pages, local links, anchors, canonical/hreflang, sitemap, removed app listings')
