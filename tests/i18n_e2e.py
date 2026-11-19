"""Public release: locale switching, English dynamic content, persistence and legacy Spanish UX."""
from playwright.sync_api import sync_playwright
from pathlib import Path
exec(Path(__file__).with_name('v04_e2e.py').read_text().split('with sync_playwright() as pw:')[0],globals())

with sync_playwright() as pw:
    browser = pw.chromium.launch(headless=True,**({'executable_path':'/usr/bin/chromium'} if Path('/usr/bin/chromium').exists() else {}),args=['--no-sandbox'])
    page = page_with(browser, {'cookieMapperLanguageV1':'en', 'cookieMapperProfilesV03':[{
        'id':'e2e-profile','name':'Demo staging',
        'sourcePattern':'https://booking-{env}.example.test/**',
        'destinationPattern':'http://localhost:5173/**',
        'cookieDomain':'example.test',
        'rules':[{'sourceName':'SESSION_TEST','targetName':'LOCAL_SESSION'}]
    }]})
    assert page.locator('html').get_attribute('lang')=='en'
    assert page.locator('header p').inner_text()=='Transfer cookies between tabs'
    assert 'Choose tabs' in page.locator('#tabs-title').inner_text()
    assert page.locator('#read-cookies').inner_text()=='Read source cookies'
    assert page.locator('#mapping-suggestion').is_visible()
    page.locator('#mapping-apply-suggest').click()
    page.locator('#read-cookies').click()
    page.wait_for_function('document.querySelector("#cookie-count").textContent === "2"')
    assert page.locator('#cookies-list .cookie-group').first.inner_text().startswith('From mapping')
    assert page.locator('#cookies-list .cookie-row.mapped .cookie-rule-label').inner_text()=='Rule'
    assert page.get_by_label('Copy SESSION_TEST').is_checked()
    assert page.get_by_label('Destination name for SESSION_TEST').input_value() == 'LOCAL_SESSION'
    page.locator('#copy-cookies').click()
    page.wait_for_selector('#preview-panel:not(.hidden)')
    assert 'Preview' in page.locator('#preview-title').inner_text()
    assert 'May overwrite' in page.locator('#preview-list').inner_text()
    assert page.locator('#confirm-copy').inner_text()=='Confirm copy'
    page.locator('#confirm-copy').click()
    page.wait_for_function('window.__writes.length === 1')
    assert 'cookies copied' in page.locator('#notice').inner_text()
    page.screenshot(path=str(Path(__file__).resolve().parents[1]/'assets/preview-en.png'),full_page=True)
    # Switch without reload and persist; update dynamic aria names + list.
    page.locator('#language-select').select_option('es')
    assert page.locator('html').get_attribute('lang')=='es'
    assert 'Selecciona las pestañas' in page.locator('#tabs-title').inner_text()
    assert page.locator('#read-cookies').inner_text()=='Leer cookies del origen'
    assert page.get_by_label('Copiar SESSION_TEST').count()==1
    page.screenshot(path=str(Path(__file__).resolve().parents[1]/'assets/preview-es.png'),full_page=True)
    page.wait_for_function('window.__storage.cookieMapperLanguageV1 === "es"')
    page.locator('#language-select').select_option('en')
    page.wait_for_function('window.__storage.cookieMapperLanguageV1 === "en"')
    page.locator('#mapping-menu-trigger').click()
    page.locator('#mapping-menu-manage').click()
    assert page.locator('.manager-title').first.inner_text()=='My mappings'
    page.locator('.manager-item').first.get_by_role('button',name='Edit').click()
    assert page.locator('#mapping-editor-title').inner_text()=='Edit mapping'
    assert page.get_by_label('Source name of rule 1').count()==1
    assert page.get_by_label('Destination name of rule 1').count()==1
    page.locator('#mapping-rule-add').click()
    assert page.get_by_label('Source name of rule 2').count()==1
    assert page.locator('#mapping-save').inner_text()=='Save mapping'
    page.locator('#mapping-cancel').click()
    # browser UI language preference when no saved override
    page2=browser.new_page(viewport={'width':480,'height':840})
    page2.set_content(html)
    page2.evaluate(mock, {'cookieMapperProfilesV03':[]})
    page2.evaluate("window.chrome.i18n = { getUILanguage: () => 'en-US' }")
    page2.add_script_tag(content=js)
    page2.wait_for_function('document.querySelector("#source-tab").options.length === 5')
    assert page2.locator('#language-select').input_value()=='en'
    assert page2.locator('#tabs-title').inner_text()=='Choose tabs'
    browser.close()
    print('PASS i18n: English UI, browser locale, dynamic labels/errors, mapping editor, Spanish switch, saved preference')
