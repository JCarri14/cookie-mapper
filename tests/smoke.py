from playwright.sync_api import sync_playwright
from pathlib import Path
import re,json
root=Path(__file__).resolve().parents[1] / 'dist'
html=(root/'popup.html').read_text()
css=(root/'popup.css').read_text()
js=(root/'popup.js').read_text()
html=re.sub(r'<link[^>]+popup.css[^>]*>',f'<style>{css}</style>',html)
html=re.sub(r'<script[^>]+popup.js[^>]*></script>','',html)
with sync_playwright() as pw:
    browser=pw.chromium.launch(headless=True,**({'executable_path':'/usr/bin/chromium'} if Path('/usr/bin/chromium').exists() else {}),args=['--no-sandbox'])
    page=browser.new_page(viewport={'width':480,'height':760})
    page.set_content(html)
    page.evaluate('''() => {
      const source = {id: 1, url: 'https://test.example.com/profile', title:'Entorno test', active:true};
      const target = {id: 2, url: 'http://localhost:5173', title:'Frontend local', active:false};
      const cookies = [
        {name:'AUTH_TOKEN',value:'abc123',domain:'.example.com',path:'/',secure:true,httpOnly:true,sameSite:'no_restriction',session:true,storeId:'0'},
        {name:'theme',value:'dark',domain:'test.example.com',path:'/',secure:false,httpOnly:false,sameSite:'lax',session:false,expirationDate:4102444800,storeId:'0'}
      ];
      window.__writes = []; window.__requests=[];
      window.chrome = {
        storage:{local:{get:async key=>({[key]:[]}),set:async()=>{},setAccessLevel:async()=>{}}},
        tabs:{query: async () => [source,target],get: async id => id===1?source:target},
        permissions:{request: async data => {window.__requests.push(data);return true;}},
        cookies:{getAllCookieStores:async()=>[{id:'0',tabIds:[1,2]}],getAll:async()=>cookies,set:async payload=>{window.__writes.push(payload);return payload;}}
      };
    }''')
    page.add_script_tag(content=js)
    page.wait_for_timeout(200)
    print('source:',page.locator('#source-tab').input_value(),'target:',page.locator('#target-tab').input_value())
    page.locator('#read-cookies').click()
    page.wait_for_function('document.querySelector("#cookie-count").textContent === "2"', timeout=2000)
    assert page.locator('.cookie-row').count()==2
    page.get_by_label('Copiar AUTH_TOKEN').check()
    page.get_by_label('Nombre de destino para AUTH_TOKEN').fill('LOCAL_AUTH_TOKEN')
    page.locator('#copy-cookies').click()
    page.wait_for_selector('#preview-panel:not(.hidden)')
    page.locator('#confirm-copy').click()
    page.wait_for_function('window.__writes.length===1', timeout=2000)
    item=page.evaluate('window.__writes[0]')
    print('copy:',item)
    assert item['url']=='http://localhost:5173/'
    assert item['name']=='LOCAL_AUTH_TOKEN'
    assert item['value']=='abc123'
    assert item['secure'] is False
    assert item['httpOnly'] is True
    assert item['sameSite']=='lax'
    assert item['path']=='/'
    assert page.locator('.result-entry.ok').count()==1
    assert len(page.evaluate('window.__requests'))==3
    print('SMOKE PASS: lectura, selección, alias, permisos y copia normalizada')
    browser.close()
