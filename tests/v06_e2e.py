"""v0.6: Lucide consistency and mapped-first cookies (Chromium API mock; no real sessions)."""
from playwright.sync_api import sync_playwright
from pathlib import Path
SCREENSHOTS = Path(__file__).resolve().parent / '_screenshots'
SCREENSHOTS.mkdir(exist_ok=True)
import json

# Reuse the v0.4 isolated popup/browser mock without executing its tests.
exec(Path(__file__).with_name('v04_e2e.py').read_text().split('with sync_playwright() as pw:')[0], globals())

seed={'cookieMapperProfilesV03': [{
    'id':'profile-sorted', 'name':'Development transfer',
    'sourcePattern':'https://booking-{env}.example.test/**',
    'destinationPattern':'http://localhost:5173/**',
    'cookieDomain':'example.test',
    # Deliberately reverse alphabetical: this order must survive in mapped list.
    'rules':[{'sourceName':'theme','targetName':'LOCAL_THEME'},
             {'sourceName':'SESSION_TEST','targetName':'LOCAL_SESSION'}]
}]}
with sync_playwright() as pw:
    browser=pw.chromium.launch(headless=True, **({'executable_path':'/usr/bin/chromium'} if Path('/usr/bin/chromium').exists() else {}),args=['--no-sandbox'])
    page=page_with(browser, seed)
    # Every visible select uses the same SVG icon as menu (no CSS text glyph).
    assert page.locator('#source-tab + .select-chevron[data-icon="chevron-down"] svg').count()==1
    assert page.locator('#target-tab + .select-chevron[data-icon="chevron-down"] svg').count()==1
    assert page.locator('.brand-icon [data-icon="arrow-up-right"] svg').count()==1
    assert page.locator('#mapping-menu-trigger [data-icon="chevron-down"] svg').count()==1
    assert page.locator('.select-chevron').count()==2
    assert page.locator('#mapping-suggestion').is_visible()
    page.locator('#mapping-apply-suggest').click()
    page.evaluate('''() => window.__sourceCookies.push({name:'AAAA_EXTRA',value:'DUMMY_OTHER',domain:'.example.test',path:'/',secure:false,httpOnly:false,sameSite:'lax',session:true,storeId:'0'})''')
    page.locator('#read-cookies').click()
    page.wait_for_function('document.querySelector("#cookie-count").textContent === "3"')
    assert page.locator('#cookies-list .cookie-group').count()==2
    assert page.locator('#cookies-list .cookie-group').first.inner_text().startswith('Del mapeo')
    names=page.locator('#cookies-list .cookie-row .cookie-name').all_inner_texts()
    assert names==['theme','SESSION_TEST','AAAA_EXTRA'], names
    assert page.locator('#cookies-list .cookie-row.mapped').count()==2
    assert page.locator('#cookies-list .cookie-row.mapped .cookie-rule-label svg').count()==2
    assert page.get_by_label('Copiar theme').is_checked()
    assert page.get_by_label('Copiar SESSION_TEST').is_checked()
    assert not page.get_by_label('Copiar AAAA_EXTRA').is_checked()
    assert page.get_by_label('Nombre de destino para theme').input_value()=='LOCAL_THEME'
    assert page.get_by_label('Nombre de destino para SESSION_TEST').input_value()=='LOCAL_SESSION'
    page.screenshot(path=str(SCREENSHOTS / 'cookie-mapper-v06-mapped-first.png'),full_page=True)

    # Search remains functional and keeps the mapped rule at the top.
    page.locator('#cookie-search').fill('session')
    assert page.locator('#cookies-list .cookie-row').count()==1
    assert page.locator('#cookies-list .cookie-row .cookie-name').inner_text()=='SESSION_TEST'
    page.locator('#cookie-search').fill('AAAA')
    assert page.locator('#cookies-list .cookie-row').count()==1
    assert page.locator('#cookies-list .cookie-row.mapped').count()==0
    page.locator('#cookie-search').fill('')
    page.get_by_label('Nombre de destino para theme').fill('NEW_LOCAL_THEME')
    assert page.get_by_label('Nombre de destino para theme').input_value()=='NEW_LOCAL_THEME'
    assert page.locator('#cookies-list .cookie-row .cookie-name').all_inner_texts()==['theme','SESSION_TEST','AAAA_EXTRA']

    # After clearing the mapping, no group/priority remains (manual alphabetical).
    page.locator('#mapping-clear').click()
    page.locator('#read-cookies').click()
    page.wait_for_function('document.querySelector("#cookie-count").textContent === "3"')
    assert page.locator('#cookies-list .cookie-group').count()==0
    assert page.locator('#cookies-list .cookie-row .cookie-name').all_inner_texts()==['AAAA_EXTRA','SESSION_TEST','theme']

    # Outcome status icons are Lucide too, not typographic check/cross pseudo-elements.
    page.get_by_label('Copiar SESSION_TEST').check()
    page.locator('#copy-cookies').click()
    page.wait_for_selector('#preview-panel:not(.hidden)')
    page.locator('#confirm-copy').click()
    page.wait_for_function('window.__writes.length === 1')
    assert page.locator('#results .result-entry.ok .result-icon svg').count()==1
    # Failure results also use Lucide, not typography for the red X.
    page.evaluate('''() => { window.chrome.cookies.set = async () => { throw new Error('Simulated failure'); }; }''')
    page.locator('#copy-cookies').click()
    page.locator('#confirm-copy').click()
    page.wait_for_function('document.querySelector("#results .result-entry.failed .result-icon svg") !== null')
    assert page.locator('#results .result-entry.failed .result-icon svg').count()==1
    assert 'DUMMY_SECRET_FOR_TEST_ONLY' not in json.dumps(page.evaluate('window.__storage'))
    page.close()
    browser.close()
    print('PASS v0.6: Lucide select chevrons + status icons, mapped-first saved rule order, other cookies, filter, alias, manual fallback and copy')
