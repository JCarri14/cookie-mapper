"""Build an installable MV3 ZIP with files at archive root (no source or secrets)."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import json

root = Path(__file__).resolve().parents[1]
dist = root/'dist'
manifest = json.loads((dist/'manifest.json').read_text(encoding='utf-8'))
version = manifest['version']
release = root/'release'
release.mkdir(exist_ok=True)
out = release/f'cookie-mapper-{version}.zip'
with ZipFile(out, 'w', ZIP_DEFLATED, compresslevel=9) as archive:
    for path in sorted(dist.rglob('*')):
        if path.is_file():
            archive.write(path, path.relative_to(dist).as_posix())
with ZipFile(out) as archive:
    assert 'manifest.json' in archive.namelist(), 'manifest not at archive root'
    assert '_locales/en/messages.json' in archive.namelist(), 'English locale missing'
    assert '_locales/es/messages.json' in archive.namelist(), 'Spanish locale missing'
print(out)
