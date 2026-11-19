"""Validate public release basics without accessing real browser data."""
from pathlib import Path
from zipfile import ZipFile
import json, re, sys

root = Path(__file__).resolve().parents[1]
manifest = json.loads((root/'manifest.json').read_text())
package = json.loads((root/'package.json').read_text())
assert manifest['version'] == package['version'], 'Package and manifest versions differ'
assert manifest['default_locale'] in ['en', 'es']
assert set(manifest['permissions']) == {'tabs','cookies','storage'}
assert set(manifest['optional_host_permissions']) == {'http://*/*','https://*/*'}
for locale in ('en','es'):
    strings = json.loads((root/f'_locales/{locale}/messages.json').read_text())
    for key in ('extName', 'extDescription', 'extAction'):
        assert strings[key]['message']
html = (root/'public/popup.html').read_text()
assert '<script src="popup.js" type="module" defer></script>' in html
assert 'http://' not in ''.join(re.findall(r'<script[^>]*>', html)), 'External scripts not permitted'
assert 'id="language-select"' in html
source = (root/'src/popup.ts').read_text()
assert 'cookieMapperProfilesV03' in source, 'Storage migration was not reviewed'
for forbidden in ('fetch(', 'XMLHttpRequest(', 'WebSocket(', 'sendBeacon(', 'eval('):
    assert forbidden not in source, f'Unexpected outbound/executable API: {forbidden}'
for file in list(root.glob('src/*.ts')) + list(root.glob('public/*')) + list(root.glob('tests/*.py')):
    if not file.is_file(): continue
    content = file.read_text(errors='replace')
    assert '-----BEGIN PRIVATE KEY-----' not in content, file
    assert not re.search(r'gh[pousr]_[a-zA-Z0-9]{20,}', content), file
    assert not re.search(r'AKIA[A-Z0-9]{16}', content), file
archive = root/'release'/f"cookie-mapper-{manifest['version']}.zip"
assert archive.exists(), f'{archive} missing: run packaging first'
with ZipFile(archive) as zipfile:
    names = zipfile.namelist()
    assert 'manifest.json' in names
    assert 'popup.js' in names
    assert 'popup.html' in names
    assert 'popup.css' in names
    assert '_locales/en/messages.json' in names
    assert '_locales/es/messages.json' in names
    assert not any(x.startswith(('node_modules/', 'tests/', 'src/', '.git/')) for x in names)
print('PASS: version, localization, minimal core permissions, local scripts, secret scan and extension ZIP')
