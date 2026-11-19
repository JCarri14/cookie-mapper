"""Cookie Mapper v0.5 E2E: real popup UI in Chromium, mocked browser APIs (no real cookies)."""
from playwright.sync_api import sync_playwright
from pathlib import Path
SCREENSHOTS = Path(__file__).resolve().parent / '_screenshots'
SCREENSHOTS.mkdir(exist_ok=True)
import json

# The same offline browser/API mock from the v0.4 regression suite.
exec((Path(__file__).with_name('v04_e2e.py')).read_text().split('with sync_playwright() as pw:')[0], globals())

with sync_playwright() as pw:
    browser=pw.chromium.launch(headless=True, **({'executable_path':'/usr/bin/chromium'} if Path('/usr/bin/chromium').exists() else {}), args=['--no-sandbox'])
    page=page_with(browser)
    assert page.locator('[data-icon="bookmark"] svg').count() >= 1
    assert page.locator('#mapping-update-current').is_hidden()
    open_menu(page)
    page.locator('#mapping-menu-create').click()
    assert page.locator('#mapping-rules-list .rules-empty').is_visible()
    page.locator('#mapping-name').fill('Offline profile')
    page.locator('#mapping-source').fill('https://different.example.test/**')
    page.locator('#mapping-destination').fill('http://localhost:5173/**')
    page.locator('#mapping-domain').fill('example.test')
    page.locator('#mapping-rule-add').click()
    assert page.locator('.rule-entry').count()==1
    page.locator('#mapping-save').click()
    assert 'key de origen' in page.locator('#mapping-form-error').inner_text()
    page.get_by_label('Key de origen de la regla 1').fill('CUSTOM_SESSION')
    page.get_by_label('Key de destino de la regla 1').fill('LOCAL_SESSION')
    page.locator('#mapping-rule-add').click()
    page.get_by_label('Key de origen de la regla 2').fill('ANOTHER')
    page.get_by_label('Key de destino de la regla 2').fill('LOCAL_SESSION')
    page.locator('#mapping-save').click()
    assert 'repetida' in page.locator('#mapping-form-error').inner_text()
    page.get_by_label('Key de destino de la regla 2').fill('ANOTHER_LOCAL')
    page.locator('#mapping-rule-import').click()
    assert 'No hay cookies cargadas' in page.locator('#mapping-rule-picker').inner_text()
    page.locator('#mapping-rule-picker-close').click()
    page.screenshot(path=str(SCREENSHOTS / 'cookie-mapper-v05-editor.png'),full_page=True)
    page.locator('#mapping-test').click()
    assert 'puedes guardar' in page.locator('#mapping-test-result').inner_text()
    page.locator('#mapping-save').click()
    page.wait_for_function('window.__storage.cookieMapperProfilesV03?.length===1')
    assert page.locator('#mapping-active').is_hidden()  # mismatch must not auto-apply
    assert 'No se ha aplicado' in page.locator('#notice').inner_text()
    stored=page.evaluate('window.__storage')
    assert stored['cookieMapperProfilesV03'][0]['rules']==[
      {'sourceName':'CUSTOM_SESSION','targetName':'LOCAL_SESSION'},
      {'sourceName':'ANOTHER','targetName':'ANOTHER_LOCAL'}]
    assert 'DUMMY_SECRET_FOR_TEST_ONLY' not in json.dumps(stored)
    page.close()

    initial={'cookieMapperProfilesV03':[{ 'id':'profile-1', 'name':'Booking UAT → Local',
      'sourcePattern':'https://booking-{env}.example.test/**',
      'destinationPattern':'http://localhost:5173/**', 'cookieDomain':'example.test',
      'rules':[{'sourceName':'SESSION_TEST','targetName':'LOCAL_SESSION'}]}]}
    page=page_with(browser,initial)
    assert page.locator('#mapping-suggestion').is_visible()
    page.locator('#mapping-apply-suggest').click()
    assert page.locator('#mapping-active').is_visible()
    assert page.locator('#mapping-update-current').is_visible()
    assert page.locator('#mapping-update-current').is_disabled()
    page.locator('#read-cookies').click()
    page.wait_for_function('document.querySelector("#cookie-count").textContent === "2"')
    assert page.get_by_label('Copiar SESSION_TEST').is_checked()
    assert page.locator('#mapping-update-current').is_enabled()
    open_menu(page)
    page.locator('#mapping-menu-manage').click()
    page.locator('.manager-item').first.get_by_role('button',name='Editar').click()
    assert page.locator('.rule-entry').count()==1
    assert page.get_by_label('Key de origen de la regla 1').input_value()=='SESSION_TEST'
    page.locator('#mapping-rule-import').click()
    picker=page.locator('#mapping-rule-picker')
    assert picker.is_visible()
    assert picker.locator('button.rule-picker-item').count()==2
    assert picker.locator('button.rule-picker-item').filter(has_text='SESSION_TEST').is_disabled()
    picker.locator('button.rule-picker-item').filter(has_text='theme').click()
    assert page.locator('.rule-entry').count()==2
    assert page.get_by_label('Key de origen de la regla 2').input_value()=='theme'
    page.get_by_label('Key de destino de la regla 2').fill('LOCAL_THEME')
    page.locator('#mapping-rule-picker-close').click()
    page.screenshot(path=str(SCREENSHOTS / 'cookie-mapper-v05-editor-with-import.png'),full_page=True)
    page.locator('#mapping-save').click()
    page.wait_for_function('window.__storage.cookieMapperProfilesV03[0].rules.length===2')
    assert page.locator('#mapping-active').is_visible()
    assert page.locator('#mapping-rules-list').is_hidden()
    stored=page.evaluate('window.__storage')
    assert stored['cookieMapperProfilesV03'][0]['rules']==[
      {'sourceName':'SESSION_TEST','targetName':'LOCAL_SESSION'},
      {'sourceName':'theme','targetName':'LOCAL_THEME'}]
    assert 'DUMMY_SECRET_FOR_TEST_ONLY' not in json.dumps(stored)

    page.locator('#read-cookies').click()
    page.wait_for_function('document.querySelector("#cookie-count").textContent === "2"')
    assert page.get_by_label('Copiar theme').is_checked()
    assert page.get_by_label('Nombre de destino para theme').input_value()=='LOCAL_THEME'
    # Update from current selection: inspect/replace rules, never silently overwrite.
    page.get_by_label('Copiar theme').uncheck()
    page.get_by_label('Nombre de destino para SESSION_TEST').fill('LATEST_SESSION')
    page.locator('#mapping-update-current').click()
    assert 'sustituyendo las 2 reglas' in page.locator('#mapping-editor-note').inner_text()
    assert page.locator('.rule-entry').count()==1
    assert page.get_by_label('Key de destino de la regla 1').input_value()=='LATEST_SESSION'
    page.locator('#mapping-save').click()
    page.wait_for_function('window.__storage.cookieMapperProfilesV03[0].rules[0].targetName==="LATEST_SESSION"')
    assert page.evaluate('window.__storage.cookieMapperProfilesV03.length')==1
    assert page.evaluate('window.__storage.cookieMapperProfilesV03[0].id')=='profile-1'

    # Create a new profile using the active mapping as template.
    page.locator('#read-cookies').click()
    page.wait_for_function('document.querySelector("#cookie-count").textContent === "2"')
    page.locator('#mapping-save-current').click()
    assert page.locator('#mapping-name').input_value()=='Booking UAT → Local (copia)'
    assert page.locator('#mapping-source').input_value()=='https://booking-{env}.example.test/**'
    page.locator('#mapping-save').click()
    page.wait_for_function('window.__storage.cookieMapperProfilesV03.length===2')
    assert page.evaluate('window.__storage.cookieMapperProfilesV03[0].id!==window.__storage.cookieMapperProfilesV03[1].id')
    stored=page.evaluate('window.__storage')
    assert 'DUMMY_SECRET_FOR_TEST_ONLY' not in json.dumps(stored)
    page.close()
    browser.close()
    print('PASS v0.5: Lucide SVG local, add/edit/delete/import rules, validation, unmatched profile save, update active profile, save-as-new, v0.4 migration and privacy')
