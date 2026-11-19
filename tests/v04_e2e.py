"""Regression + v0.4 flows in Chromium with fully mocked extension APIs."""
from playwright.sync_api import sync_playwright
from pathlib import Path
SCREENSHOTS = Path(__file__).resolve().parent / '_screenshots'
SCREENSHOTS.mkdir(exist_ok=True)
import re, json

root = Path(__file__).resolve().parents[1] / 'dist'
html = (root / 'popup.html').read_text()
css = (root / 'popup.css').read_text()
js = (root / 'popup.js').read_text()
html = re.sub(r'<link[^>]+popup.css[^>]*>', f'<style>{css}</style>', html)
html = re.sub(r'<script[^>]+popup.js[^>]*></script>', '', html)

mock = '''(seed) => {
  const source = {id:1,url:'https://booking-uat.example.test/login',title:'Booking UAT',active:true};
  const target = {id:2,url:'http://localhost:5173/test',title:'Local'};
  const altSource = {id:3,url:'https://booking-pre.example.test/login',title:'Booking PRE'};
  const altTarget = {id:4,url:'https://frontend-pre.example.test/some',title:'Preprod frontend'};
  const session = {name:'SESSION_TEST',value:'DUMMY_SECRET_FOR_TEST_ONLY',domain:'.example.test',path:'/',secure:true,httpOnly:true,sameSite:'no_restriction',session:true,storeId:'0'};
  const other = {name:'theme',value:'dark',domain:'booking-uat.example.test',path:'/',secure:false,httpOnly:false,sameSite:'lax',session:true,storeId:'0'};
  const existing = {name:'LOCAL_SESSION',value:'OLD_DUMMY',domain:'localhost',path:'/',secure:false,httpOnly:true,sameSite:'lax',session:true,storeId:'0'};
  window.__tabs=[source,target,altSource,altTarget];
  window.__sourceCookies=[session,other];
  window.__destinationCookies=[existing];
  window.__writes=[]; window.__requests=[];
  window.__storage={...(seed||{})};
  window.chrome={
    tabs:{query:async()=>window.__tabs,get:async id=>window.__tabs.find(t=>t.id===id)},
    permissions:{request:async data=>{window.__requests.push(data);return true;}},
    cookies:{
      getAllCookieStores:async()=>[{id:'0',tabIds:[1,2,3,4]}],
      getAll:async data => {
        if(data.url?.startsWith('http://localhost')) return window.__destinationCookies;
        if(data.url?.startsWith('https://frontend-')) return [];
        if(data.domain==='example.test') return window.__sourceCookies;
        if(data.url?.startsWith('https://booking-')) return window.__sourceCookies;
        return [];
      },
      set:async payload=>{window.__writes.push(payload);return payload;}
    },
    storage:{local:{get:async key=>({[key]:window.__storage[key]}),set:async data=>{Object.assign(window.__storage,data)},setAccessLevel:async()=>{}}}
  };
}'''

def page_with(browser, seed=None):
    page=browser.new_page(viewport={'width':480,'height':840}, device_scale_factor=1)
    page.set_content(html)
    page.evaluate(mock, seed)
    page.add_script_tag(content=js)
    page.wait_for_function('document.querySelector("#source-tab").options.length === 5')
    return page

def open_menu(page):
    page.locator('#mapping-menu-trigger').click()
    page.wait_for_selector('#mapping-menu:not(.hidden)')

with sync_playwright() as pw:
    browser=pw.chromium.launch(headless=True,**({'executable_path':'/usr/bin/chromium'} if Path('/usr/bin/chromium').exists() else {}),args=['--no-sandbox'])
    page=page_with(browser)
    assert page.locator('#mapping-active').is_hidden()
    assert page.locator('#mapping-suggestion').is_hidden()
    assert page.locator('#mapping-workspace').is_hidden()
    assert page.locator('#cookie-domain').input_value()=='example.test'
    assert page.locator('#mapping-save-current').is_disabled()
    page.screenshot(path=str(SCREENSHOTS / 'cookie-mapper-v04-inicial.png'))
    open_menu(page)
    assert page.locator('.menu-empty').is_visible()
    page.screenshot(path=str(SCREENSHOTS / 'cookie-mapper-v04-menu.png'))
    page.keyboard.press('Escape')
    assert page.locator('#mapping-menu').is_hidden()

    # Manual reading, alias and saving from active selection.
    page.locator('#read-cookies').click()
    page.wait_for_function('document.querySelector("#cookie-count").textContent === "2"')
    page.get_by_label('Copiar SESSION_TEST').check()
    page.get_by_label('Nombre de destino para SESSION_TEST').fill('LOCAL_SESSION')
    assert page.locator('#mapping-save-current').is_enabled()
    page.locator('#mapping-save-current').click()
    assert page.locator('#mapping-workspace').is_visible()
    assert page.locator('#mapping-editor').is_visible()
    assert '1 cookie' in page.locator('#mapping-editor-note').inner_text()
    page.locator('#mapping-name').fill('Booking environments')
    page.locator('#mapping-source').fill('https://booking-{env}.example.test/**')
    page.locator('#mapping-destination').fill('http://localhost:5173/**')
    page.locator('#mapping-domain').fill('example.test')
    page.locator('#mapping-test').click()
    assert 'env=uat' in page.locator('#mapping-test-result').inner_text()
    page.locator('#mapping-save').click()
    page.wait_for_function('window.__storage.cookieMapperProfilesV03?.length === 1')
    assert page.locator('#mapping-workspace').is_hidden()
    assert page.locator('#mapping-active').is_visible()
    assert 'Booking environments' in page.locator('#mapping-active-name').inner_text()
    stored=page.evaluate('window.__storage')
    assert 'DUMMY_SECRET_FOR_TEST_ONLY' not in json.dumps(stored)
    assert stored['cookieMapperProfilesV03'][0]['rules']==[{'sourceName':'SESSION_TEST','targetName':'LOCAL_SESSION'}]
    page.locator('#read-cookies').click()
    page.wait_for_function('document.querySelector("#cookie-count").textContent === "2"')
    assert page.get_by_label('Copiar SESSION_TEST').is_checked()
    assert page.get_by_label('Nombre de destino para SESSION_TEST').input_value()=='LOCAL_SESSION'

    # Read and review remain independent from writes.
    page.locator('#copy-cookies').click()
    page.wait_for_selector('#preview-panel:not(.hidden)')
    assert page.locator('.preview-entry-label.conflict').count()==1
    assert page.evaluate('window.__writes.length')==0
    page.locator('#confirm-copy').click()
    page.wait_for_function('window.__writes.length === 1')
    cookie=page.evaluate('window.__writes[0]')
    assert cookie['name']=='LOCAL_SESSION' and cookie['httpOnly'] is True and cookie['secure'] is False and cookie['sameSite']=='lax'

    # Reopen: suggest (do not silently apply) saved pattern.
    page2=page_with(browser,stored)
    assert page2.locator('#mapping-active').is_hidden()
    assert page2.locator('#mapping-suggestion').is_visible()
    assert page2.locator('#target-tab').input_value()=='2'
    assert page2.evaluate('window.__writes.length')==0
    open_menu(page2)
    assert page2.locator('.menu-item').count()==1
    assert page2.locator('.menu-item.active').count()==0
    page2.screenshot(path=str(SCREENSHOTS / 'cookie-mapper-v04-menu-perfiles.png'))
    page2.locator('.menu-item').click()
    assert page2.locator('#mapping-active').is_visible()
    assert page2.locator('#mapping-suggestion').is_hidden()
    page2.locator('#mapping-clear').click()
    assert page2.locator('#mapping-active').is_hidden()
    assert page2.locator('#mapping-suggestion').is_hidden()  # dismissed after explicit manual opt-out
    assert page2.locator('#read-cookies').is_enabled()
    # New source -> suggestion, never auto-apply.
    page2.locator('#source-tab').select_option('3')
    assert page2.locator('#mapping-suggestion').is_visible()
    page2.locator('#mapping-apply-suggest').click()
    assert page2.locator('#mapping-active').is_visible()
    assert page2.locator('#target-tab').input_value()=='2'

    # Create a second mapping in manager with an advanced regex and interpolated destination.
    open_menu(page2)
    page2.locator('#mapping-menu-manage').click()
    assert page2.locator('#mapping-manager').is_visible()
    assert page2.locator('.manager-item').count()==1
    page2.screenshot(path=str(SCREENSHOTS / 'cookie-mapper-v04-manager.png'))
    page2.locator('#mapping-manager-new').click()
    page2.locator('#mapping-name').fill('Preprod regex')
    page2.locator('#mapping-source').fill(r're:^https://booking-(?<env>[^.]+)\.example\.test/.*$')
    page2.locator('#mapping-destination').fill('https://frontend-{env}.example.test/**')
    page2.locator('#mapping-domain').fill('example.test')
    page2.locator('#mapping-test').click()
    assert 'env=pre' in page2.locator('#mapping-test-result').inner_text()
    page2.locator('#mapping-save').click()
    page2.wait_for_function('window.__storage.cookieMapperProfilesV03.length===2')
    assert page2.locator('#target-tab').input_value()=='4'
    # Manage duplicate: names/patterns/rules copied, never cookie values.
    open_menu(page2)
    page2.locator('#mapping-menu-manage').click()
    assert page2.locator('.manager-item').count()==2
    page2.locator('.manager-item').first.get_by_role('button',name='Duplicar').click()
    page2.wait_for_function('window.__storage.cookieMapperProfilesV03.length===3')
    assert page2.locator('.manager-item').count()==3
    assert 'DUMMY_SECRET_FOR_TEST_ONLY' not in json.dumps(page2.evaluate('window.__storage'))
    # Edit an existing profile without accidentally replacing rules with current selection.
    page2.locator('.manager-item').first.get_by_role('button',name='Editar').click()
    page2.locator('#mapping-name').fill('Booking updated')
    page2.locator('#mapping-save').click()
    page2.wait_for_function('window.__storage.cookieMapperProfilesV03.some(x => x.name === "Booking updated")')
    assert page2.evaluate('window.__storage.cookieMapperProfilesV03.find(x => x.name === "Booking updated").rules.length')==1
    # Delete is two-step.
    open_menu(page2)
    page2.locator('#mapping-menu-manage').click()
    page2.locator('.manager-item').first.get_by_role('button',name='Eliminar').click()
    assert page2.locator('#mapping-delete-confirm').is_visible()
    assert page2.evaluate('window.__storage.cookieMapperProfilesV03.length')==3
    page2.locator('#mapping-delete-cancel').click()
    assert page2.evaluate('window.__storage.cookieMapperProfilesV03.length')==3
    page2.locator('.manager-item').first.get_by_role('button',name='Eliminar').click()
    page2.locator('#mapping-delete-accept').click()
    page2.wait_for_function('window.__storage.cookieMapperProfilesV03.length===2')
    page2.locator('#mapping-manager-back').click()
    assert page2.locator('#transfer-workspace').is_visible()
    print('PASS v0.4: manual, save from selection, persisted patterns, suggestions (non automatic), menu, apply, clear, manage, edit, duplicate, confirm delete, preview/commit, privacy')
    page.close();page2.close();browser.close()
