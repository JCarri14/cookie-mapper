"""Regresión: cookie HttpOnly de dominio padre ausente de consulta por URL."""
from playwright.sync_api import sync_playwright
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1] / 'dist'
html = (root / 'popup.html').read_text()
css = (root / 'popup.css').read_text()
js = (root / 'popup.js').read_text()
html = re.sub(r'<link[^>]+popup.css[^>]*>', f'<style>{css}</style>', html)
html = re.sub(r'<script[^>]+popup.js[^>]*></script>', '', html)

with sync_playwright() as pw:
    browser = pw.chromium.launch(headless=True, **({'executable_path':'/usr/bin/chromium'} if Path('/usr/bin/chromium').exists() else {}), args=['--no-sandbox'])
    page = browser.new_page(viewport={'width': 480, 'height': 800})
    page.set_content(html)
    page.evaluate('''() => {
      const source = { id: 11, url: 'https://booking.example.test/test', title: 'Origen', active: true };
      const target = { id: 22, url: 'http://localhost:5173', title: 'Destino' };
      const session = {
        name:'PARENT_SESSION', value:'DUMMY_TEST_VALUE_NOT_REAL',
        domain:'.example.test', path:'/', secure:true,
        httpOnly:true, sameSite:'no_restriction', session:true, storeId:'0'
      };
      window.__reads = [];
      window.__requests = [];
      window.__writes = [];
      window.chrome = {
        storage:{local:{get:async key=>({[key]:[]}),set:async()=>{},setAccessLevel:async()=>{}}},
        tabs: { query: async()=>[source,target], get: async id=> id===11?source:target },
        permissions: { request: async data => {window.__requests.push(data);return true;} },
        cookies: {
          getAllCookieStores: async()=>[{id:'0',tabIds:[11,22]}],
          getAll: async details => {
            window.__reads.push(details);
            return details.domain === 'example.test' ? [session] : [];
          },
          set: async details => {window.__writes.push(details);return details;}
        }
      };
    }''')
    page.add_script_tag(content=js)
    page.wait_for_function('document.querySelector("#cookie-domain").value !== ""')
    assert page.locator('#cookie-domain').input_value() == 'example.test'
    page.locator('#read-cookies').click()
    page.wait_for_function('document.querySelector("#cookie-count").textContent === "1"')
    assert page.locator('.cookie-name').inner_text() == 'PARENT_SESSION'
    assert page.locator('.cookie-attrs').inner_text().find('HttpOnly') >= 0
    requested_origins = page.evaluate('window.__requests[0].origins')
    assert 'https://*.example.test/*' in requested_origins, requested_origins
    assert 'http://localhost/*' in requested_origins, requested_origins
    page.get_by_label('Copiar PARENT_SESSION').check()
    page.get_by_label('Nombre de destino para PARENT_SESSION').fill('LOCAL_SESSION')
    page.locator('#copy-cookies').click()
    page.wait_for_selector('#preview-panel:not(.hidden)')
    page.locator('#confirm-copy').click()
    page.wait_for_function('window.__writes.length === 1')
    cookie = page.evaluate('window.__writes[0]')
    assert cookie['name'] == 'LOCAL_SESSION'
    assert cookie['httpOnly'] is True
    assert cookie['value'] == 'DUMMY_TEST_VALUE_NOT_REAL'
    assert len(page.evaluate('window.__reads')) == 6 # 2 al leer, 1 preview, 1 destino, 2 antes de copiar
    assert page.locator('.result-entry.ok').count() == 1
    print('REGRESSION PASS: cookie de dominio padre HttpOnly / SameSite=None visible y copiable con alias')
    browser.close()
