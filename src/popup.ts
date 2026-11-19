// Spanish is the source locale. English is selected from the browser UI language
// or via the in-popup ES/EN preference. No external services or remote translation.
type Language = 'es' | 'en';
let language: Language = 'es';
const LANGUAGE_STORAGE_KEY = 'cookieMapperLanguageV1';
const EN_MESSAGES: Record<string, string> = {
  "{count} seleccionada": "{count} selected",
  "{count} cookie": "{count} cookie",
  "{pattern} · {count} regla": "{pattern} · {count} rule",
  "Vista previa · {count} {cookies}{conflicts}": "Preview · {count} {cookies}{conflicts}",
  "Una pestaña ha cambiado de origen. Actualiza las pestañas.": "A tab navigated elsewhere. Refresh the tabs.",
  "y rutas con": "and paths with",
  "Para regex avanzada usa": "For advanced regex use",
  "y grupos nombrados.": "and named groups.",
  "Transferencias entre pestañas": "Transfer cookies between tabs",
  "Mapeos": "Mappings",
  "Mapeos guardados": "Saved mappings",
  "MAPEOS GUARDADOS": "SAVED MAPPINGS",
  "Crear nuevo mapeo": "Create mapping",
  "Administrar mapeos": "Manage mappings",
  "Mapeo disponible:": "Matching mapping:",
  "Aplicar": "Apply",
  "Ocultar sugerencia": "Dismiss suggestion",
  "Quitar mapeo y volver al modo manual": "Remove mapping and use manual mode",
  "Volver a transferencia manual": "Back to manual transfer",
  "Selecciona las pestañas": "Choose tabs",
  "Actualizar pestañas": "Refresh tabs",
  "Origen": "Source",
  "Pestaña de origen": "Source tab",
  "Selecciona una pestaña.": "Choose a tab.",
  "Dominio de las cookies": "Cookie domain",
  "Puede ser el dominio padre; sin protocolo, puerto ni punto inicial.": "Parent domain allowed; no protocol, port or leading dot.",
  "Destino": "Destination",
  "Pestaña de destino": "Destination tab",
  "Leer cookies del origen": "Read source cookies",
  "Solicitaremos acceso a los dominios seleccionados. La lectura no copia ninguna cookie.": "We'll request access to the selected domains. Reading doesn't copy cookies.",
  "Cookies": "Cookies",
  "Seleccionar todas": "Select all",
  "Seleccionar visibles": "Select visible",
  "Deseleccionar visibles": "Deselect visible",
  "Filtrar cookies…": "Filter cookies…",
  "Filtrar cookies por nombre": "Filter cookies by name",
  "Key editable": "Editable name",
  "Sin cookies cargadas": "No cookies loaded",
  "Selecciona origen y destino y pulsa «Leer cookies».": "Choose source and destination, then click “Read source cookies”.",
  "seleccionadas": "selected",
  "100 % local": "100% local",
  "Actualizar mapeo": "Update mapping",
  "Guardar como mapeo": "Save as mapping",
  "Guardar como nuevo": "Save as new",
  "Revisar transferencia": "Review transfer",
  "Vista previa": "Preview",
  "Cancelar": "Cancel",
  "Revisa el destino y los posibles reemplazos. Los valores permanecen ocultos.": "Check the destination and any overwrites. Values stay hidden.",
  "Confirmar copia": "Confirm copy",
  "Las cookies nunca se guardan en perfiles. Las transferencias requieren confirmación.": "Cookie values are never stored in mappings. Transfers require confirmation.",
  "Administración de mapeos": "Manage mappings",
  "Volver": "Back",
  "Nuevo": "New",
  "Mis mapeos": "My mappings",
  "Utiliza mapeos para recuperar las pestañas, cookies y nombres de destino que sueles usar.": "Mappings recall the tabs, cookies, and destination names you use often.",
  "Confirmar eliminación": "Confirm deletion",
  "Sí, eliminar": "Yes, delete",
  "Guardar mapeo": "Save mapping",
  "Nombre del mapeo": "Mapping name",
  "Patrón de origen": "Source URL pattern",
  "Patrón de destino": "Destination URL pattern",
  "Captura variables con": "Capture variables with",
  "Captura variables con {env} y rutas con **. Para regex avanzada usa re:^https://...$ y grupos nombrados.": "Capture variables with {env} and paths with **. For advanced regex use re:^https://...$ and named groups.",
  "Comprueba el patrón con la pestaña seleccionada.": "Test the pattern against the selected tab.",
  "Probar patrón": "Test pattern",
  "Reglas de cookies": "Cookie rules",
  "Define qué key leer del origen y con qué nombre crearla en destino. Los valores nunca se guardan.": "Choose which source cookie name to read and its destination name. Values aren't stored.",
  "KEY ORIGEN": "SOURCE NAME",
  "KEY DESTINO": "DESTINATION NAME",
  "Añadir regla": "Add rule",
  "Desde cookies leídas": "From loaded cookies",
  "Cookies disponibles": "Available cookies",
  "Cerrar selector": "Close selector",
  "Añade cookies detectadas en el origen. Puedes cambiar sus keys después.": "Add cookies detected in the source. You can rename them afterwards.",
  "Eliminar": "Delete",
  "Solo se guardan nombres de cookies, alias y patrones. Nunca sus valores.": "Only cookie names, aliases and patterns are saved. Never their values.",
  "Todavía no has guardado ningún mapeo.": "You haven't saved any mappings yet.",
  "Aún no tienes mapeos guardados. Crea uno o guarda una selección desde la transferencia.": "No mappings yet. Create one or save a selection from a transfer.",
  "Activo": "Active",
  "Aplicar mapeo": "Apply mapping",
  "Editar": "Edit",
  "Duplicar": "Duplicate",
  "Eliminar regla": "Delete rule",
  "No hay cookies cargadas para el origen actual. Vuelve a la transferencia, pulsa «Leer cookies» y regresa al editor.": "No cookies loaded for the current source. Return to the transfer, read the cookies, then come back.",
  "Este mapeo todavía no tiene reglas. Añade una key manualmente o impórtala de las cookies leídas.": "This mapping has no rules yet. Add a name or import it from loaded cookies.",
  "Cookie origen": "Source cookie",
  "Key destino": "Destination name",
  "Editar mapeo": "Edit mapping",
  "Nuevo mapeo": "New mapping",
  "Comprueba los patrones antes de guardar.": "Check the patterns before saving.",
  "Puedes editar las reglas aquí y guardarlas sin leer cookies previamente.": "You can edit rules here and save them without reading any cookies first.",
  "Patrones válidos. La pestaña actual no coincide con el origen; puedes guardar y usar el mapeo cuando abras una pestaña compatible.": "Patterns valid. The current tab doesn't match the source; save the mapping and use it later on a matching tab.",
  "Introduce un nombre de mapeo válido.": "Enter a valid mapping name.",
  "Revisa el patrón de origen, destino y dominio.": "Check the source pattern, destination pattern, and cookie domain.",
  "La pestaña de origen no coincide con este mapeo.": "The source tab doesn't match this mapping.",
  "Selecciona una pestaña HTTP(S).": "Choose an HTTP(S) tab.",
  "Selecciona una pestaña…": "Choose a tab…",
  "Abre al menos dos pestañas HTTP(S) en esta ventana.": "Open at least two HTTP(S) tabs in this window.",
  "No hay cookies disponibles para": "No cookies available for",
  "Nombre de cookie no válido (usa caracteres ASCII permitidos, sin espacios).": "Invalid cookie name (use supported ASCII characters without spaces).",
  "Las cookies __Host- requieren HTTPS.": "__Host- cookies require HTTPS.",
  "Las cookies __Secure- requieren HTTPS.": "__Secure- cookies require HTTPS.",
  "Las cookies __Http- requieren HTTPS.": "__Http- cookies require HTTPS.",
  "Vuelve a leer las cookies del origen.": "Read the source cookies again.",
  "No se concedieron permisos al destino.": "Destination permission not granted.",
  "La selección cambió. Revisa de nuevo.": "The selection changed. Review again.",
  "La pestaña de origen ha cambiado. Vuelve a leer las cookies.": "The source tab changed. Read the cookies again.",
  "Una pestaña ha cambiado de sitio. Actualiza la selección antes de copiar.": "A tab navigated elsewhere. Refresh the tabs before copying.",
  "El destino cambió desde la vista previa. Revisa la transferencia otra vez.": "The destination has changed since the preview. Review the transfer again.",
  "Cookie ya no disponible en origen": "Cookie no longer available in source",
  "Cookie particionada no soportada": "Partitioned cookie not supported",
  "El navegador no devolvió la cookie creada": "The browser didn't return the created cookie",
  "Sesión": "Session",
  "Regla": "Rule",
  "Del mapeo": "From mapping",
  "Otras cookies": "Other cookies",
  "Ninguna cookie de las reglas guardadas está disponible en el origen.": "None of the mapped cookies are available in the source.",
  "Este mapeo no tiene reglas de cookies.": "This mapping has no cookie rules.",
  "valor oculto": "value hidden",
  "Sin coincidencias": "No matches",
  "Prueba con otro nombre de cookie.": "Try another cookie name.",
  "Procesando…": "Processing…",
  "Nueva": "New",
  "Puede reemplazar": "May overwrite",
  "Sitio": "Site",
  "Variable sin cerrar.": "Unclosed variable.",
  "Expresión regular demasiado larga.": "Regular expression too long.",
  "El destino debe ser una plantilla, no una regex.": "Destination must be a template, not a regex.",
  "Dominio de cookies no válido.": "Invalid cookie domain.",
  "El destino debe comenzar por http:// o https://.": "Destination must start with http:// or https://.",
  "Introduce un patrón de origen válido (máximo 500 caracteres).": "Enter a valid source pattern (max. 500 characters).",
  "Permisos no concedidos. No se ha leído ni modificado ninguna cookie.": "Permission denied. No cookies were read or modified.",
  "Permisos no concedidos. No se ha modificado ninguna cookie.": "Permission denied. No cookies were modified.",
  "El origen/destino no cumple el mapeo. Selecciona pestañas coincidentes o pasa a transferencia manual.": "The source/destination doesn't match the mapping. Choose matching tabs or switch to manual transfer.",
  "Ambas pestañas comparten origen: las cookies del mismo perfil son comunes y la copia afectará a las dos.": "Both tabs share an origin: cookies in the same browser profile are shared, and copying will affect both.",
  "No hay mapeo": "No mapping",
  "Mapeo aplicado · {count} regla(s) de cookies": "Mapping applied · {count} cookie rule(s)",
  "{pattern} · {count} reglas": "{pattern} · {count} rules",
  "¿Eliminar «{name}»? Se perderá su configuración guardada. No se modificará ninguna cookie.": "Delete “{name}”? Its saved configuration will be lost. No cookies will be modified.",
  "No se pudo duplicar: {error}": "Could not duplicate: {error}",
  "{source} (copia)": "{source} (copy)",
  "Regla {number}: key de origen no válida.": "Rule {number}: invalid source cookie name.",
  "Regla {number}: key de destino no válida.": "Rule {number}: invalid destination cookie name.",
  "La key de origen «{name}» está repetida.": "Source cookie name “{name}” is duplicated.",
  "La key de destino «{name}» está repetida.": "Destination cookie name “{name}” is duplicated.",
  "Máximo {count} reglas por mapeo.": "Maximum {count} rules per mapping.",
  "Key de origen de la regla {number}": "Source name of rule {number}",
  "Key de destino de la regla {number}": "Destination name of rule {number}",
  "Eliminar regla {number}": "Delete rule {number}",
  "Estás sustituyendo las {before} reglas guardadas por las {after} cookies seleccionadas. Revísalas antes de guardar.": "You're replacing {before} saved rules with {after} selected cookies. Review them before saving.",
  "Se guardarán {count} cookies como reglas con sus keys de destino, sin valores.": "{count} cookies will be saved as rules with destination names, without their values.",
  "Origen: coincide{captured}. Destino: {dest}. Dominio: {domain}": "Source: matches{captured}. Destination: {dest}. Domain: {domain}",
  "coincide": "matches",
  "sin pestaña coincidente": "no matching tab",
  "Mapeo «{name}» guardado ({count} reglas de cookies).{suffix}": "Mapping “{name}” saved ({count} cookie rules).{suffix}",
  " No se ha aplicado porque el origen actual no coincide con su patrón.": " Not applied because the current source doesn't match its pattern.",
  "No se pudo guardar el mapeo: {error}": "Could not save mapping: {error}",
  "No se pudo eliminar: {error}": "Could not delete mapping: {error}",
  "Mapeo «{name}» aplicado, pero no hay una pestaña de destino que coincida.": "Mapping “{name}” applied, but there is no matching destination tab.",
  "Mapeo: {error}": "Mapping: {error}",
  "Copiar {name}": "Copy {name}",
  "Nombre de destino para {name}": "Destination name for {name}",
  "{count} cookies": "{count} cookies",
  "{count} seleccionadas": "{count} selected",
  "{count} cookie(s)": "{count} cookie(s)",
  "No hay cookies disponibles para {domain}. Comprueba el dominio completo, los permisos y el perfil del navegador.": "No cookies available for {domain}. Check the domain, permissions, and browser profile.",
  "{count} cookies disponibles. Se han omitido {omitted} particionadas.": "{count} cookies available. {omitted} partitioned cookies omitted.",
  "{count} cookies leídas ({url} por URL y {domain} por dominio). Usa el filtro para localizar la cookie deseada.": "{count} cookies loaded ({url} by URL and {domain} by domain). Use the filter to find your cookie.",
  "No se han podido leer las cookies: {error}": "Could not read cookies: {error}",
  "No se han podido consultar las pestañas: {error}": "Could not list tabs: {error}",
  "No se pudieron cargar los mapeos: {error}": "Could not load mappings: {error}",
  "Detalle: {ok} correctas · {failed} fallidas": "Details: {ok} succeeded · {failed} failed",
  "Varias cookies terminarían con la key «{name}». Modifica una key.": "Multiple cookies would use destination name “{name}”. Change one of the names.",
  "No se pudo preparar la transferencia: {error}": "Could not prepare transfer: {error}",
  "Vista previa · {count} cookies{conflicts}": "Preview · {count} cookies{conflicts}",
  " · {count} conflictos": " · {count} conflicts",
  "{ok} copiadas, {failed} fallidas. Revisa el detalle.": "{ok} copied, {failed} failed. See details.",
  "{ok} cookies copiadas al destino.{suffix}": "{ok} cookies copied to destination.{suffix}",
  " Se adaptaron atributos al dominio y protocolo de destino.": " Cookie attributes were adjusted for the destination domain and protocol.",
  "Error al copiar las cookies: {error}": "Error copying cookies: {error}",
  "Variable inválida: {name}": "Invalid variable: {name}",
  "Variable duplicada: {name}": "Duplicate variable: {name}",
  "La variable {{{name}}} no está definida en origen.": "Variable {{{name}}} isn't defined in the source.",
  "El patrón debe tener entre 1 y 500 caracteres.": "Pattern length must be between 1 and 500 characters."
};
function t(spanish: string, values: Record<string, string | number> = {}): string {
  const template = language === 'en' ? (EN_MESSAGES[spanish] ?? spanish) : spanish;
  return template.replace(/\{([A-Za-z][A-Za-z0-9_]*)\}/g, (full, key: string) =>
    Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : full);
}
const staticTextNodes: Array<{node: Text, original: string}> = [];
const staticAttributes: Array<{node: Element, attr: string, original: string}> = [];
function snapshotStaticStrings(): void {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    if (node.parentElement?.closest('script, style')) continue;
    staticTextNodes.push({node, original: node.textContent ?? ''});
  }
  for (const element of Array.from(document.querySelectorAll('[placeholder], [aria-label], [title]'))) {
    for (const attr of ['placeholder', 'aria-label', 'title']) {
      const value = element.getAttribute(attr);
      if (value !== null) staticAttributes.push({node: element, attr, original: value});
    }
  }
}
function translateStaticStrings(): void {
  document.documentElement.lang = language;
  for (const {node, original} of staticTextNodes) {
    const trimmed = original.trim();
    node.textContent = trimmed && EN_MESSAGES[trimmed] ? original.replace(trimmed, t(trimmed)) : original;
  }
  for (const {node, attr, original} of staticAttributes) node.setAttribute(attr, t(original));
}
async function loadLanguage(): Promise<void> {
  const data = await chrome.storage.local.get(LANGUAGE_STORAGE_KEY);
  const saved = data[LANGUAGE_STORAGE_KEY];
  const locale = typeof chrome.i18n?.getUILanguage === 'function' ? chrome.i18n.getUILanguage() : 'es';
  language = saved === 'en' || saved === 'es' ? saved : locale.toLowerCase().startsWith('es') ? 'es' : 'en';
  (document.getElementById('language-select') as HTMLSelectElement).value = language;
  translateStaticStrings();
}

// Selección local de iconos de Lucide (ISC). Sin CDN, scripts remotos ni dependencias runtime.
// Fuente del diseño: https://lucide.dev — licencia incluida en LICENSE-LUCIDE.txt.
type IconNode = [string, Record<string, string>];
const ICONS: Record<string, IconNode[]> = {
  bookmark: [['path', {d:'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'}]],
  'bookmark-check': [['path',{d:'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h6'}], ['path',{d:'m16 6 2 2 4-4'}]],
  check: [['path',{d:'M20 6 9 17l-5-5'}]],
  'chevron-down': [['path',{d:'m6 9 6 6 6-6'}]],
  'arrow-up-right': [['path',{d:'M7 17 17 7'}],['path',{d:'M7 7h10v10'}]],
  'circle-check': [['circle',{cx:'12',cy:'12',r:'10'}],['path',{d:'m8 12 2.5 2.5L16 9'}]],
  'circle-x': [['circle',{cx:'12',cy:'12',r:'10'}],['path',{d:'m15 9-6 6'}],['path',{d:'m9 9 6 6'}]],
  plus: [['path',{d:'M12 5v14'}],['path',{d:'M5 12h14'}]],
  'settings-2': [['path',{d:'M4 21v-7'}],['path',{d:'M4 10V3'}],['path',{d:'M12 21v-9'}],['path',{d:'M12 8V3'}],['path',{d:'M20 21v-5'}],['path',{d:'M20 12V3'}],['path',{d:'M1 14h6'}],['path',{d:'M9 8h6'}],['path',{d:'M17 16h6'}]],
  'refresh-cw': [['path',{d:'M3 12a9 9 0 0 1 15.36-6.36L21 8'}],['path',{d:'M21 3v5h-5'}],['path',{d:'M21 12a9 9 0 0 1-15.36 6.36L3 16'}],['path',{d:'M3 21v-5h5'}]],
  'arrow-left': [['path',{d:'m12 19-7-7 7-7'}],['path',{d:'M19 12H5'}]],
  'arrow-down': [['path',{d:'M12 5v14'}],['path',{d:'m19 12-7 7-7-7'}]],
  'arrow-right': [['path',{d:'M5 12h14'}],['path',{d:'m12 5 7 7-7 7'}]],
  'trash-2': [['path',{d:'M3 6h18'}],['path',{d:'M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2'}],['path',{d:'m19 6-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6'}],['path',{d:'M10 11v6'}],['path',{d:'M14 11v6'}]],
  pencil: [['path',{d:'M12 20h9'}],['path',{d:'M16.5 3.5a2.12 2.12 0 0 1 3 3L9 17l-4 1 1-4Z'}]],
  copy: [['rect',{x:'8',y:'8',width:'12',height:'12',rx:'2'}],['path',{d:'M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2'}]],
  search: [['circle',{cx:'11',cy:'11',r:'8'}],['path',{d:'m21 21-4.3-4.3'}]],
  save: [['path',{d:'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z'}],['path',{d:'M17 21v-8H7v8'}],['path',{d:'M7 3v5h8'}]],
  x: [['path',{d:'M18 6 6 18'}],['path',{d:'m6 6 12 12'}]],
  sparkles: [['path',{d:'m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z'}],['path',{d:'M19 19v3'}],['path',{d:'M17.5 20.5h3'}]],
  cookie: [['path',{d:'M12 2a2 2 0 0 0 2 2 2 2 0 0 0 2 2 2 2 0 0 0 2 2 2 2 0 0 0 2 2 10 10 0 1 1-8-8Z'}],['circle',{cx:'8',cy:'10',r:'1'}],['circle',{cx:'15',cy:'15',r:'1'}],['path',{d:'M9 16h.01'}]],
  'list-plus': [['path',{d:'M9 6h11'}],['path',{d:'M9 12h11'}],['path',{d:'M9 18h6'}],['path',{d:'M4 4v4'}],['path',{d:'M2 6h4'}],['path',{d:'M19 16v6'}],['path',{d:'M16 19h6'}]],
};
function lucideIcon(name: string): SVGSVGElement {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  for (const [attr, value] of Object.entries({viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', 'stroke-width':'1.9', 'stroke-linecap':'round', 'stroke-linejoin':'round', 'aria-hidden':'true', focusable:'false'})) svg.setAttribute(attr, value);
  for (const [tag, attributes] of ICONS[name] ?? ICONS.bookmark!) {
    const element = document.createElementNS(ns, tag);
    for (const [attr, value] of Object.entries(attributes)) element.setAttribute(attr, value);
    svg.append(element);
  }
  return svg;
}
function fillIcons(root: ParentNode = document): void {
  for (const node of Array.from(root.querySelectorAll<HTMLElement>('[data-icon]'))) {
    if (node.childElementCount === 0) node.append(lucideIcon(node.dataset.icon ?? 'bookmark'));
  }
}

type CookieRow = {
  cookie: BrowserCookie;
  alias: string;
  selected: boolean;
};
type NoticeKind = 'ok' | 'warn' | 'error';
type CookieRule = { sourceName: string; targetName: string };
type MappingProfile = {
  id: string;
  name: string;
  sourcePattern: string;
  destinationPattern: string;
  cookieDomain: string;
  rules: CookieRule[];
};
type PatternMatch = { variables: Record<string, string> };
type TransferPreview = { signature: string; conflicts: Map<string, boolean> };

type CopyResult = { from: string; to: string; ok: boolean; reason?: string };

const el = <T extends HTMLElement>(id: string): T => {
  const node = document.getElementById(id);
  if (!node) throw new Error(`Elemento ausente: ${id}`);
  return node as T;
};

const sourceSelect = el<HTMLSelectElement>('source-tab');
const targetSelect = el<HTMLSelectElement>('target-tab');
const sourceMeta = el<HTMLDivElement>('source-meta');
const targetMeta = el<HTMLDivElement>('target-meta');
const cookieDomainInput = el<HTMLInputElement>('cookie-domain');
const readButton = el<HTMLButtonElement>('read-cookies');
const copyButton = el<HTMLButtonElement>('copy-cookies');
const copyLabel = el<HTMLSpanElement>('copy-label');
const refreshButton = el<HTMLButtonElement>('refresh-tabs');
const selectAllButton = el<HTMLButtonElement>('toggle-all');
const searchInput = el<HTMLInputElement>('cookie-search');
const cookieCount = el<HTMLSpanElement>('cookie-count');
const selectionCount = el<HTMLSpanElement>('selection-count');
const cookieToolbar = el<HTMLDivElement>('cookie-toolbar');
const list = el<HTMLDivElement>('cookies-list');
const notice = el<HTMLDivElement>('notice');
const results = el<HTMLDivElement>('results');
const menuTrigger = el<HTMLButtonElement>('mapping-menu-trigger');
const mappingMenu = el<HTMLDivElement>('mapping-menu');
const menuList = el<HTMLDivElement>('mapping-menu-list');
const menuCreate = el<HTMLButtonElement>('mapping-menu-create');
const menuManage = el<HTMLButtonElement>('mapping-menu-manage');
const transferWorkspace = el<HTMLDivElement>('transfer-workspace');
const mappingWorkspace = el<HTMLElement>('mapping-workspace');
const managerView = el<HTMLDivElement>('mapping-manager');
const managerList = el<HTMLDivElement>('mapping-manager-list');
const managerBack = el<HTMLButtonElement>('mapping-manager-back');
const managerNew = el<HTMLButtonElement>('mapping-manager-new');
const deleteConfirm = el<HTMLDivElement>('mapping-delete-confirm');
const deleteText = el<HTMLParagraphElement>('mapping-delete-text');
const deleteAccept = el<HTMLButtonElement>('mapping-delete-accept');
const deleteCancel = el<HTMLButtonElement>('mapping-delete-cancel');
const activeContext = el<HTMLDivElement>('mapping-active');
const activeName = el<HTMLElement>('mapping-active-name');
const activeMeta = el<HTMLElement>('mapping-active-meta');
const clearActive = el<HTMLButtonElement>('mapping-clear');
const suggestion = el<HTMLDivElement>('mapping-suggestion');
const suggestedName = el<HTMLElement>('mapping-suggestion-name');
const applySuggested = el<HTMLButtonElement>('mapping-apply-suggest');
const dismissSuggested = el<HTMLButtonElement>('mapping-dismiss-suggest');
const saveCurrent = el<HTMLButtonElement>('mapping-save-current');
const updateCurrent = el<HTMLButtonElement>('mapping-update-current');
const rulesList = el<HTMLDivElement>('mapping-rules-list');
const rulesCount = el<HTMLSpanElement>('mapping-rules-count');
const addRule = el<HTMLButtonElement>('mapping-rule-add');
const importRules = el<HTMLButtonElement>('mapping-rule-import');
const rulePicker = el<HTMLDivElement>('mapping-rule-picker');
const rulePickerClose = el<HTMLButtonElement>('mapping-rule-picker-close');
const rulePickerList = el<HTMLDivElement>('mapping-rule-available');
const editorNote = el<HTMLParagraphElement>('mapping-editor-note');
const editorError = el<HTMLDivElement>('mapping-form-error');
const mappingEditor = el<HTMLDivElement>('mapping-editor');
const editorTitle = el<HTMLElement>('mapping-editor-title');
const mappingName = el<HTMLInputElement>('mapping-name');
const mappingSource = el<HTMLInputElement>('mapping-source');
const mappingDestination = el<HTMLInputElement>('mapping-destination');
const mappingDomain = el<HTMLInputElement>('mapping-domain');
const mappingTestResult = el<HTMLDivElement>('mapping-test-result');
const mappingTest = el<HTMLButtonElement>('mapping-test');
const mappingSave = el<HTMLButtonElement>('mapping-save');
const mappingCancel = el<HTMLButtonElement>('mapping-cancel');
const mappingDelete = el<HTMLButtonElement>('mapping-delete');
const previewPanel = el<HTMLDivElement>('preview-panel');
const previewList = el<HTMLDivElement>('preview-list');
const previewTitle = el<HTMLElement>('preview-title');
const previewCancel = el<HTMLButtonElement>('preview-cancel');
const confirmCopy = el<HTMLButtonElement>('confirm-copy');


let tabs: BrowserTab[] = [];
let cookies: CookieRow[] = [];
let busy = false;
let loadedFor: string | null = null;
let profiles: MappingProfile[] = [];
let activeProfileId: string | null = null;
let editorProfileId: string | null = null;
let suggestedProfileId: string | null = null;
let dismissedSuggestionFor: string | null = null;
let editorReturnTo: 'manager' | 'transfer' = 'manager';
let draftRules: CookieRule[] = [];
const MAX_RULES = 100;
let pendingDeleteId: string | null = null;
let preview: TransferPreview | null = null;
const STORAGE_KEY = 'cookieMapperProfilesV03';
const COOKIE_NAME_RE = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;


// Patrones: ** = resto de URL, * = segmento, {var} = componente capturado.
// Para casos complejos se admite re: con grupos nombrados (?<env>...).
function escapeRegex(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function matchUrlPattern(pattern: string, url: URL): PatternMatch | null {
  if (!pattern || pattern.length > 500) throw new Error(t('El patrón debe tener entre 1 y 500 caracteres.'));
  if (pattern.startsWith('re:')) {
    const expression = pattern.slice(3);
    if (expression.length > 480) throw new Error(t('Expresión regular demasiado larga.'));
    const match = new RegExp(expression).exec(url.href);
    return match ? { variables: { ...(match.groups ?? {}) } } : null;
  }
  let expression = '^';
  const names: string[] = [];
  for (let i = 0; i < pattern.length;) {
    if (pattern.slice(i, i + 2) === '**') { expression += '.*'; i += 2; continue; }
    if (pattern[i] === '*') { expression += '[^/]*'; i++; continue; }
    if (pattern[i] === '{') {
      const close = pattern.indexOf('}', i + 1);
      if (close === -1) throw new Error(t('Variable sin cerrar.'));
      const name = pattern.slice(i + 1, close);
      if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(name)) throw new Error(t('Variable inválida: {name}', {name}));
      if (names.includes(name)) throw new Error(t('Variable duplicada: {name}', {name}));
      names.push(name);
      expression += `(?<${name}>[^/.?#:]+)`;
      i = close + 1;
      continue;
    }
    expression += escapeRegex(pattern[i]!);
    i++;
  }
  const match = new RegExp(expression + '$').exec(url.href);
  return match ? { variables: { ...(match.groups ?? {}) } } : null;
}

function expandVariables(template: string, vars: Record<string, string>): string {
  return template.replace(/\{([A-Za-z][A-Za-z0-9_]*)\}/g, (_all, key: string) => {
    if (!(key in vars)) throw new Error(t('La variable {{{name}}} no está definida en origen.', {name:key}));
    return vars[key]!;
  });
}

function activeProfile(): MappingProfile | undefined {
  return profiles.find(profile => profile.id === activeProfileId);
}

function profileMatch(profile: MappingProfile, source: BrowserTab | undefined): PatternMatch | null {
  const url = parsedUrl(source);
  return url ? matchUrlPattern(profile.sourcePattern, url) : null;
}

function profileDestinationMatches(profile: MappingProfile, vars: Record<string, string>, target: BrowserTab | undefined): boolean {
  const url = parsedUrl(target);
  if (!url) return false;
  const resolved = expandVariables(profile.destinationPattern, vars);
  if (resolved.startsWith('re:')) throw new Error(t('El destino debe ser una plantilla, no una regex.'));
  return matchUrlPattern(resolved, url) !== null;
}

function profileCookieDomain(profile: MappingProfile, vars: Record<string, string>): string {
  return expandVariables(profile.cookieDomain, vars);
}

function mappedPairIsValid(): boolean {
  const profile = activeProfile();
  if (!profile) return true;
  try {
    const match = profileMatch(profile, sourceTab());
    return !!match && profileDestinationMatches(profile, match.variables, targetTab());
  } catch {
    return false;
  }
}

function closeMenu(): void {
  mappingMenu.classList.add('hidden');
  menuTrigger.setAttribute('aria-expanded', 'false');
}

function showTransfer(): void {
  transferWorkspace.classList.remove('hidden');
  mappingWorkspace.classList.add('hidden');
  managerView.classList.remove('hidden');
  mappingEditor.classList.add('hidden');
  closeMenu();
}

function renderMappingUI(): void {
  menuList.replaceChildren();
  if (!profiles.length) {
    const empty = document.createElement('div');
    empty.className = 'menu-empty';
    empty.textContent = t('Todavía no has guardado ningún mapeo.');
    menuList.append(empty);
  }
  for (const profile of profiles) {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('role', 'menuitem');
    button.className = `menu-item${activeProfileId === profile.id ? ' active' : ''}`;
    const icon = document.createElement('span');
    icon.className = 'menu-item-icon';
    icon.append(lucideIcon('bookmark'));
    const text = document.createElement('span');
    text.className = 'menu-item-text';
    const name = document.createElement('strong');
    name.textContent = profile.name;
    const pattern = document.createElement('small');
    pattern.textContent = profile.sourcePattern;
    text.append(name, pattern);
    button.append(icon, text);
    if (activeProfileId === profile.id) {
      const check = document.createElement('span');
      check.className = 'menu-check';
      check.append(lucideIcon('check'));
      button.append(check);
    }
    button.addEventListener('click', () => chooseProfile(profile));
    menuList.append(button);
  }
  const current = activeProfile();
  updateCurrent.classList.toggle('hidden', !current);
  saveCurrent.textContent = '';
  saveCurrent.append(lucideIcon('bookmark'), document.createTextNode(current ? t('Guardar como nuevo') : t('Guardar como mapeo')));
  activeContext.classList.toggle('hidden', !current);
  if (current) {
    activeName.textContent = current.name;
    activeMeta.textContent = t('Mapeo aplicado · {count} regla(s) de cookies', {count: current.rules.length}).replace('rule(s)', current.rules.length === 1 ? 'rule' : 'rules').replace('regla(s)', current.rules.length === 1 ? 'regla' : 'reglas');
  }
  const possible = !current && dismissedSuggestionFor !== sourceSelect.value
    ? profiles.find(profile => {
      try { return !!profileMatch(profile, sourceTab()); } catch { return false; }
    }) : undefined;
  suggestedProfileId = possible?.id ?? null;
  suggestion.classList.toggle('hidden', !possible);
  if (possible) suggestedName.textContent = possible.name;
}

function renderManager(): void {
  managerList.replaceChildren();
  if (!profiles.length) {
    const empty = document.createElement('div');
    empty.className = 'manager-empty';
    empty.textContent = t('Aún no tienes mapeos guardados. Crea uno o guarda una selección desde la transferencia.');
    managerList.append(empty);
  }
  for (const profile of profiles) {
    const item = document.createElement('div');
    item.className = 'manager-item';
    const title = document.createElement('div');
    title.className = 'manager-item-title';
    const name = document.createElement('strong');
    name.textContent = profile.name;
    title.append(name);
    if (activeProfileId === profile.id) {
      const marker = document.createElement('span');
      marker.className = 'count';
      marker.textContent = t('Activo');
      title.append(marker);
    }
    const caption = document.createElement('span');
    caption.className = 'manager-item-caption';
    caption.textContent = t(profile.rules.length === 1 ? '{pattern} · {count} regla' : '{pattern} · {count} reglas', {pattern: profile.sourcePattern, count: profile.rules.length});
    const actions = document.createElement('div');
    actions.className = 'manager-item-actions';
    const action = (label: string, run: () => void, extra = '') => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `small-button ${extra}`.trim();
      btn.append(lucideIcon(({ Aplicar:'check', Editar:'pencil', Duplicar:'copy', Eliminar:'trash-2' } as Record<string, string>)[label] ?? 'bookmark'), document.createTextNode(t(label)));
      btn.addEventListener('click', run);
      actions.append(btn);
    };
    action('Aplicar', () => chooseProfile(profile));
    action('Editar', () => openEditor(profile));
    action('Duplicar', () => { void duplicateMapping(profile); }, 'secondary');
    action('Eliminar', () => requestDeleteMapping(profile.id), 'danger');
    item.append(title, caption, actions);
    managerList.append(item);
  }
  const toDelete = profiles.find(item => item.id === pendingDeleteId);
  deleteConfirm.classList.toggle('hidden', !toDelete);
  if (toDelete) deleteText.textContent = t('¿Eliminar «{name}»? Se perderá su configuración guardada. No se modificará ninguna cookie.', {name: toDelete.name});
}

function openManager(): void {
  closeMenu();
  transferWorkspace.classList.add('hidden');
  mappingWorkspace.classList.remove('hidden');
  mappingEditor.classList.add('hidden');
  managerView.classList.remove('hidden');
  pendingDeleteId = null;
  renderManager();
}

function requestDeleteMapping(id: string): void {
  pendingDeleteId = id;
  managerView.classList.remove('hidden');
  mappingEditor.classList.add('hidden');
  renderManager();
  deleteAccept.focus();
}

function makeMappingId(): string {
  return `mapping-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

async function duplicateMapping(profile: MappingProfile): Promise<void> {
  const copy: MappingProfile = { ...profile, id: makeMappingId(), name: t('{source} (copia)', {source: profile.name}), rules: profile.rules.map(rule => ({ ...rule })) };
  const previous = [...profiles];
  profiles.push(copy);
  try { await persistProfiles(); renderMappingUI(); renderManager(); }
  catch (error) { profiles = previous; renderManager(); alert(t('No se pudo duplicar: {error}', {error: errorMessage(error)})); }
}

function chooseProfile(profile: MappingProfile): void {
  closeMenu();
  if (!profileMatch(profile, sourceTab())) {
    const candidate = tabs.find(tab => { try { return !!profileMatch(profile, tab); } catch { return false; } });
    if (candidate?.id !== undefined) sourceSelect.value = String(candidate.id);
  }
  applyProfile(profile);
  showTransfer();
}

function setManual(): void {
  activeProfileId = null;
  dismissedSuggestionFor = sourceSelect.value;
  cookieDomainInput.value = guessCookieDomain(parsedUrl(sourceTab())?.hostname ?? '');
  if (!targetTab()) targetSelect.value = String(tabs.find(tab => tab.id !== sourceTab()?.id)?.id ?? '');
  invalidateCookies();
  updateTabMetadata();
  renderMappingUI();
}


async function loadProfiles(): Promise<void> {
  // Limita visibilidad a contextos de confianza (sin content scripts).
  if (chrome.storage.local.setAccessLevel) await chrome.storage.local.setAccessLevel({ accessLevel: 'TRUSTED_CONTEXTS' });
  const data = await chrome.storage.local.get(STORAGE_KEY);
  const candidate: unknown = data[STORAGE_KEY];
  if (!Array.isArray(candidate)) { profiles = []; return; }
  profiles = candidate.filter((item): item is MappingProfile =>
    !!item && typeof item === 'object' &&
    typeof item.id === 'string' && typeof item.name === 'string' &&
    typeof item.sourcePattern === 'string' && typeof item.destinationPattern === 'string' &&
    typeof item.cookieDomain === 'string' && Array.isArray(item.rules) &&
    item.rules.every((rule: CookieRule) => !!rule && typeof rule.sourceName === 'string' && typeof rule.targetName === 'string')
  ).slice(0, 100);
  renderMappingUI();
}

async function persistProfiles(): Promise<void> {
  await chrome.storage.local.set({ [STORAGE_KEY]: profiles });
}

function showEditorError(message: string): void {
  editorError.textContent = message;
  editorError.classList.remove('hidden');
}

function editorRuleCount(): void {
  rulesCount.textContent = String(draftRules.length);
  addRule.disabled = draftRules.length >= MAX_RULES;
  importRules.disabled = draftRules.length >= MAX_RULES;
}

function currentCookiesAvailable(): boolean {
  const site = parsedUrl(sourceTab());
  const domain = selectedCookieDomain();
  return !!(site && domain && loadedFor === loadedSourceKey(site, domain) && cookies.length);
}

function rulePickerRender(): void {
  rulePickerList.replaceChildren();
  if (!currentCookiesAvailable()) {
    const hint = document.createElement('p');
    hint.className = 'rule-picker-empty';
    hint.textContent = t('No hay cookies cargadas para el origen actual. Vuelve a la transferencia, pulsa «Leer cookies» y regresa al editor.');
    rulePickerList.append(hint);
    return;
  }
  const seen = new Set<string>();
  for (const row of cookies) {
    const name = row.cookie.name;
    if (seen.has(name)) continue;
    seen.add(name);
    const already = draftRules.some(rule => rule.sourceName === name);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'rule-picker-item';
    button.disabled = already || draftRules.length >= MAX_RULES;
    const text = document.createElement('span');
    text.textContent = name;
    button.append(text, lucideIcon(already ? 'check' : 'plus'));
    button.addEventListener('click', () => {
      if (draftRules.length >= MAX_RULES || draftRules.some(rule => rule.sourceName === name)) return;
      draftRules.push({sourceName:name, targetName: row.alias || name});
      renderEditorRules();
    });
    rulePickerList.append(button);
  }
}

function renderEditorRules(): void {
  rulesList.replaceChildren();
  editorRuleCount();
  if (!draftRules.length) {
    const empty = document.createElement('div');
    empty.className = 'rules-empty';
    empty.textContent = t('Este mapeo todavía no tiene reglas. Añade una key manualmente o impórtala de las cookies leídas.');
    rulesList.append(empty);
  }
  draftRules.forEach((rule, index) => {
    const entry = document.createElement('div');
    entry.className = 'rule-entry';
    const source = document.createElement('input');
    source.type = 'text'; source.value = rule.sourceName; source.maxLength = 256;
    source.autocomplete = 'off'; source.spellcheck = false;
    source.placeholder = t('Cookie origen');
    source.setAttribute('aria-label', t('Key de origen de la regla {number}', {number:index + 1}));
    source.addEventListener('input', () => {rule.sourceName = source.value; editorError.classList.add('hidden');});
    const arrow = document.createElement('span'); arrow.className = 'rule-arrow'; arrow.append(lucideIcon('arrow-right'));
    const target = document.createElement('input');
    target.type = 'text'; target.value = rule.targetName; target.maxLength = 256;
    target.autocomplete = 'off'; target.spellcheck = false;
    target.placeholder = t('Key destino');
    target.setAttribute('aria-label', t('Key de destino de la regla {number}', {number:index + 1}));
    target.addEventListener('input', () => {rule.targetName = target.value; editorError.classList.add('hidden');});
    const remove = document.createElement('button');
    remove.type = 'button'; remove.className = 'rule-delete';
    remove.setAttribute('aria-label', t('Eliminar regla {number}', {number:index + 1})); remove.title = t('Eliminar regla');
    remove.append(lucideIcon('trash-2'));
    remove.addEventListener('click', () => {draftRules.splice(index, 1); renderEditorRules();});
    entry.append(source, arrow, target, remove);
    rulesList.append(entry);
  });
  if (!rulePicker.classList.contains('hidden')) rulePickerRender();
}

function validateEditorRules(): string | null {
  if (draftRules.length > MAX_RULES) return t('Máximo {count} reglas por mapeo.', {count: MAX_RULES});
  const from = new Set<string>();
  const to = new Set<string>();
  for (const [index, rule] of draftRules.entries()) {
    if (!COOKIE_NAME_RE.test(rule.sourceName)) return t('Regla {number}: key de origen no válida.', {number:index + 1});
    if (!COOKIE_NAME_RE.test(rule.targetName)) return t('Regla {number}: key de destino no válida.', {number:index + 1});
    if (from.has(rule.sourceName)) return t('La key de origen «{name}» está repetida.', {name:rule.sourceName});
    if (to.has(rule.targetName)) return t('La key de destino «{name}» está repetida.', {name:rule.targetName});
    from.add(rule.sourceName);
    to.add(rule.targetName);
  }
  return null;
}

function closeEditor(): void {
  editorProfileId = null;
  mappingEditor.classList.add('hidden');
  if (editorReturnTo === 'transfer') showTransfer();
  else { managerView.classList.remove('hidden'); renderManager(); }
}

function openEditor(profile?: MappingProfile, returnTo: 'manager' | 'transfer' = 'manager', useCurrentSelection = false): void {
  closeMenu();
  editorProfileId = profile?.id ?? null;
  editorError.classList.add('hidden');
  editorError.textContent = '';
  editorReturnTo = returnTo;
  const selection = selectedRows();
  draftRules = useCurrentSelection ? selection.map(row => ({sourceName:row.cookie.name, targetName:row.alias})) : profile?.rules.map(rule => ({...rule})) ?? [];
  rulePicker.classList.add('hidden');
  transferWorkspace.classList.add('hidden');
  mappingWorkspace.classList.remove('hidden');
  managerView.classList.add('hidden');
  mappingEditor.classList.remove('hidden');
  editorTitle.textContent = profile ? t('Editar mapeo') : t('Nuevo mapeo');
  mappingDelete.classList.toggle('hidden', !profile);
  mappingName.value = profile?.name ?? '';
  mappingSource.value = profile?.sourcePattern ?? `${parsedUrl(sourceTab())?.origin ?? 'https://example.test'}/**`;
  mappingDestination.value = profile?.destinationPattern ?? `${parsedUrl(targetTab())?.origin ?? 'http://localhost:5173'}/**`;
  mappingDomain.value = profile?.cookieDomain ?? selectedCookieDomain() ?? '';
  mappingTestResult.textContent = t('Comprueba los patrones antes de guardar.');
  mappingTestResult.className = 'pattern-test';
  editorNote.textContent = useCurrentSelection && profile
    ? t('Estás sustituyendo las {before} reglas guardadas por las {after} cookies seleccionadas. Revísalas antes de guardar.', {before:profile.rules.length, after:selection.length})
    : useCurrentSelection ? t('Se guardarán {count} cookies como reglas con sus keys de destino, sin valores.', {count:selection.length})
      : t('Puedes editar las reglas aquí y guardarlas sin leer cookies previamente.');
  renderEditorRules();
  mappingName.focus();
}


function describePattern(): boolean {
  try {
    const sourcePattern = mappingSource.value.trim();
    const destinationTemplate = mappingDestination.value.trim();
    const domainTemplate = mappingDomain.value.trim().replace(/^\.+/, '');
    if (!sourcePattern || sourcePattern.length > 500) throw new Error(t('Introduce un patrón de origen válido (máximo 500 caracteres).'));
    // Comprueba la sintaxis incluso cuando no hay ninguna pestaña que coincida.
    matchUrlPattern(sourcePattern, new URL('https://example.test/'));
    if (!destinationTemplate.startsWith('http://') && !destinationTemplate.startsWith('https://')) throw new Error(t('El destino debe comenzar por http:// o https://.'));
    const variableNames = sourcePattern.startsWith('re:')
      ? [...sourcePattern.matchAll(/\(\?<([A-Za-z][A-Za-z0-9_]*)>/g)].map(match => match[1]!)
      : [...sourcePattern.matchAll(/\{([A-Za-z][A-Za-z0-9_]*)\}/g)].map(match => match[1]!);
    const exampleVars = Object.fromEntries(variableNames.map(name => [name, 'uat']));
    const exampleDestination = expandVariables(destinationTemplate, exampleVars);
    const exampleDomain = expandVariables(domainTemplate, exampleVars);
    if (!validDomain(exampleDomain)) throw new Error(t('Dominio de cookies no válido.'));
    // Aceptamos plantillas de URL con comodines, no regex en destino.
    matchUrlPattern(exampleDestination, new URL('https://example.test/'));
    const origin = parsedUrl(sourceTab());
    const match = origin ? matchUrlPattern(sourcePattern, origin) : null;
    if (!match) {
      mappingTestResult.textContent = t('Patrones válidos. La pestaña actual no coincide con el origen; puedes guardar y usar el mapeo cuando abras una pestaña compatible.');
      mappingTestResult.className = 'pattern-test';
      return true;
    }
    const resolvedDestination = expandVariables(destinationTemplate, match.variables);
    const resolvedDomain = expandVariables(domainTemplate, match.variables);
    if (!validDomain(resolvedDomain)) throw new Error(t('Dominio de cookies no válido.'));
    const target = parsedUrl(targetTab());
    const targetMatches = !!target && matchUrlPattern(resolvedDestination, target) !== null;
    const captured = Object.keys(match.variables).map(key => `${key}=${match.variables[key]}`).join(', ');
    mappingTestResult.textContent = t('Origen: coincide{captured}. Destino: {dest}. Dominio: {domain}', {captured: captured ? ` · ${captured}` : '', dest: targetMatches ? t('coincide') : t('sin pestaña coincidente'), domain:resolvedDomain});
    mappingTestResult.className = targetMatches ? 'pattern-test success' : 'pattern-test';
    return true;
  } catch (error) {
    mappingTestResult.textContent = errorMessage(error);
    mappingTestResult.className = 'pattern-test failed';
    return false;
  }
}

async function saveMapping(): Promise<void> {
  const name = mappingName.value.trim();
  if (!name || name.length > 80) { showEditorError(t('Introduce un nombre de mapeo válido.')); return; }
  if (!describePattern()) { showEditorError(t('Revisa el patrón de origen, destino y dominio.')); return; }
  const previous = profiles.find(item => item.id === editorProfileId);
  const ruleProblem = validateEditorRules();
  if (ruleProblem) { showEditorError(ruleProblem); return; }
  const rules = draftRules.map(rule => ({ sourceName:rule.sourceName, targetName:rule.targetName }));
  const saved: MappingProfile = {
    id: previous?.id ?? makeMappingId(),
    name,
    sourcePattern: mappingSource.value.trim(),
    destinationPattern: mappingDestination.value.trim(),
    cookieDomain: mappingDomain.value.trim().replace(/^\.+/, ''),
    rules
  };
  const oldProfiles = [...profiles];
  if (previous) profiles = profiles.map(item => item.id === previous.id ? saved : item);
  else profiles.push(saved);
  try {
    await persistProfiles();
    editorProfileId = null;
    const matchesCurrent = !!profileMatch(saved, sourceTab());
    if (matchesCurrent) applyProfile(saved);
    else if (activeProfileId === saved.id) activeProfileId = null;
    showTransfer();
    renderMappingUI();
    showNotice(t('Mapeo «{name}» guardado ({count} reglas de cookies).{suffix}', {name:saved.name, count:rules.length, suffix:matchesCurrent ? '' : t(' No se ha aplicado porque el origen actual no coincide con su patrón.')}));
  } catch (error) {
    profiles = oldProfiles;
    renderMappingUI();
    showEditorError(t('No se pudo guardar el mapeo: {error}', {error:errorMessage(error)}));
  }
}

async function deleteMapping(): Promise<void> {
  const id = pendingDeleteId;
  if (!id) return;
  const previous = [...profiles];
  profiles = profiles.filter(item => item.id !== id);
  try {
    await persistProfiles();
    if (activeProfileId === id) {
      activeProfileId = null;
      cookieDomainInput.value = guessCookieDomain(parsedUrl(sourceTab())?.hostname ?? '');
      invalidateCookies();
      updateTabMetadata();
    }
    pendingDeleteId = null;
    renderManager();
    renderMappingUI();
  } catch (error) {
    profiles = previous;
    renderManager();
    alert(t('No se pudo eliminar: {error}', {error:errorMessage(error)}));
  }
}


function applyProfile(profile: MappingProfile): void {
  try {
    const match = profileMatch(profile, sourceTab());
    if (!match) throw new Error(t('La pestaña de origen no coincide con este mapeo.'));
    activeProfileId = profile.id;
    dismissedSuggestionFor = null;
    cookieDomainInput.value = profileCookieDomain(profile, match.variables);
    const target = tabs.find(tab => tab.id !== sourceTab()?.id && profileDestinationMatches(profile, match.variables, tab));
    targetSelect.value = target?.id === undefined ? '' : String(target.id);
    invalidateCookies();
    updateTabMetadata();
    renderMappingUI();
    if (!target) showNotice(t('Mapeo «{name}» aplicado, pero no hay una pestaña de destino que coincida.', {name:profile.name}), 'warn');
  } catch (error) { showNotice(t('Mapeo: {error}', {error:errorMessage(error)}), 'warn'); }
}

function detectMapping(): void {
  // Una coincidencia solo sugiere: nunca modifica destino, dominio ni cookies automáticamente.
  const active = activeProfile();
  if (active && !profileMatch(active, sourceTab())) activeProfileId = null;
  renderMappingUI();
}


function applySavedCookieRules(): void {
  const profile = activeProfile();
  if (!profile) return;
  for (const row of cookies) {
    const rule = profile.rules.find(item => item.sourceName === row.cookie.name);
    row.selected = !!rule;
    row.alias = rule?.targetName ?? row.cookie.name;
  }
}

function parsedUrl(tab?: BrowserTab): URL | null {
  if (!tab?.url) return null;
  try {
    const url = new URL(tab.url);
    return ['http:', 'https:'].includes(url.protocol) ? url : null;
  } catch {
    return null;
  }
}

function sourceTab(): BrowserTab | undefined {
  return tabs.find(tab => String(tab.id) === sourceSelect.value);
}

function targetTab(): BrowserTab | undefined {
  return tabs.find(tab => String(tab.id) === targetSelect.value);
}

function formatTab(tab: BrowserTab): string {
  const url = parsedUrl(tab);
  const prefix = url ? `${url.hostname}${url.port ? ':' + url.port : ''}` : t('Sitio');
  const title = tab.title?.trim();
  return `${prefix}${title ? ` · ${title}` : ''}`;
}

function matchPattern(url: URL): string {
  return `${url.protocol}//${url.hostname}/*`;
}

// Sugerencia editable, no un cálculo completo de la Public Suffix List.
// Los sufijos menos habituales se pueden corregir con el campo de dominio.
function guessCookieDomain(hostname: string): string {
  if (hostname === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname) || hostname.includes(':')) return hostname;
  const labels = hostname.split('.');
  if (labels.length <= 2) return hostname;
  const twoLevelSuffixes = new Set(['co.uk', 'org.uk', 'ac.uk', 'gov.uk', 'com.es', 'org.es', 'gob.es', 'com.au', 'net.au', 'org.au', 'co.jp', 'com.br', 'com.mx', 'com.ar']);
  const suffix = labels.slice(-2).join('.');
  return labels.slice(twoLevelSuffixes.has(suffix) ? -3 : -2).join('.');
}

function validDomain(input: string): boolean {
  input = input.trim().replace(/^\.+/, '').toLowerCase();
  if (!input || input.includes('..') || input.length > 253 || !/^[a-z0-9.-]+$/.test(input)) return false;
  if (input !== 'localhost' && !/^\d+\.\d+\.\d+\.\d+$/.test(input) && !input.includes('.')) return false;
  if (input.split('.').some(label => !label || label.startsWith('-') || label.endsWith('-') || label.length > 63)) return false;
  return true;
}

function selectedCookieDomain(): string | null {
  const input = cookieDomainInput.value.trim().replace(/^\.+/, '').toLowerCase();
  return validDomain(input) ? input : null;
}

function domainPermission(url: URL, domain: string): string {
  const host = domain === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(domain) ? domain : `*.${domain}`;
  return `${url.protocol}//${host}/*`;
}

function loadedSourceKey(sourceUrl: URL, domain: string): string {
  return `${sourceUrl.origin} | ${domain}`;
}

async function getSourceCookies(url: string, domain: string, storeId?: string): Promise<{ cookies: BrowserCookie[]; byUrl: number; byDomain: number }> {
  const store = storeId ? { storeId } : {};
  // Leer por dominio permite ver cookies del dominio padre incluso cuando el
  // permiso inicial por hostname concreto las habría omitido silenciosamente.
  const [urlCookies, domainCookies] = await Promise.all([
    chrome.cookies.getAll({ url, ...store }),
    chrome.cookies.getAll({ domain, ...store })
  ]);
  const unique = new Map<string, BrowserCookie>();
  for (const cookie of [...urlCookies, ...domainCookies]) unique.set(cookieKey(cookie), cookie);
  return { cookies: [...unique.values()], byUrl: urlCookies.length, byDomain: domainCookies.length };
}

function cookieKey(cookie: BrowserCookie): string {
  return [cookie.storeId, cookie.domain, cookie.path, cookie.name].join('\u0001');
}

function showNotice(message: string, kind: NoticeKind = 'ok'): void {
  notice.textContent = message;
  notice.className = `notice ${kind === 'ok' ? '' : kind}`.trim();
}

function invalidatePreview(): void {
  preview = null;
  previewPanel.classList.add('hidden');
}

function clearFeedback(): void {
  invalidatePreview();
  notice.className = 'notice hidden';
  notice.textContent = '';
  results.className = 'results hidden';
  results.replaceChildren();
}

function selectedRows(): CookieRow[] {
  return cookies.filter(row => row.selected);
}

function mappedRuleIndex(profile: MappingProfile): Map<string, number> {
  // El orden de las reglas guardadas es también el orden de lectura de las cookies mapeadas.
  const indexes = new Map<string, number>();
  profile.rules.forEach((rule, index) => {
    if (!indexes.has(rule.sourceName)) indexes.set(rule.sourceName, index);
  });
  return indexes;
}

function visibleRows(): CookieRow[] {
  const term = searchInput.value.trim().toLocaleLowerCase();
  const filtered = cookies.filter(row => !term || row.cookie.name.toLocaleLowerCase().includes(term) || row.alias.toLocaleLowerCase().includes(term));
  const profile = activeProfile();
  if (!profile) return filtered; // En modo manual se respeta el orden original.
  const indexes = mappedRuleIndex(profile);
  return filtered.sort((a, b) => {
    const aIndex = indexes.get(a.cookie.name) ?? Infinity;
    const bIndex = indexes.get(b.cookie.name) ?? Infinity;
    return aIndex - bIndex || a.cookie.name.localeCompare(b.cookie.name) || a.cookie.domain.localeCompare(b.cookie.domain) || a.cookie.path.localeCompare(b.cookie.path);
  });
}

function setBusy(value: boolean): void {
  busy = value;
  syncButtons();
}

function syncButtons(): void {
  const source = sourceTab();
  const target = targetTab();
  const validTabs = !!(source && target && source.id !== target.id && parsedUrl(source) && parsedUrl(target) && mappedPairIsValid());
  const validDomain = !!selectedCookieDomain();
  const selected = selectedRows().length;
  readButton.disabled = busy || !validTabs || !validDomain;
  readButton.textContent = busy ? t('Procesando…') : t('Leer cookies del origen');
  copyButton.disabled = busy || !validTabs || !validDomain || !selected || !loadedFor;
  copyLabel.textContent = busy ? t('Procesando…') : t('Revisar transferencia');
  refreshButton.disabled = busy;
  sourceSelect.disabled = busy;
  targetSelect.disabled = busy;
  cookieDomainInput.disabled = busy;
  menuTrigger.disabled = busy;
  saveCurrent.disabled = busy || !loadedFor || selected === 0;
  updateCurrent.disabled = busy || !loadedFor || selected === 0 || !activeProfile() || !mappedPairIsValid();
  mappingSave.disabled = busy;
  confirmCopy.disabled = busy;
  selectAllButton.disabled = busy || visibleRows().length === 0;
  const visible = visibleRows();
  selectAllButton.textContent = visible.length > 0 && visible.every(row => row.selected) ? t('Deseleccionar visibles') : t('Seleccionar visibles');
  cookieCount.textContent = String(cookies.length);
  selectionCount.textContent = t(selected === 1 ? '{count} seleccionada' : '{count} seleccionadas', {count:selected});
}

function emptyState(title: string, detail: string): void {
  const box = document.createElement('div');
  box.className = 'empty-state';
  const symbol = document.createElement('div');
  symbol.className = 'empty-symbol';
  symbol.append(lucideIcon('cookie'));
  const strong = document.createElement('p');
  strong.textContent = title;
  const small = document.createElement('span');
  small.textContent = detail;
  box.append(symbol, strong, small);
  list.replaceChildren(box);
}

function renderCookies(): void {
  const scrollPosition = list.scrollTop;
  const filtered = visibleRows();
  cookieToolbar.classList.toggle('hidden', cookies.length === 0);
  if (!cookies.length) {
    emptyState(t('Sin cookies cargadas'), t('Selecciona origen y destino y pulsa «Leer cookies».'));
  } else if (!filtered.length) {
    emptyState(t('Sin coincidencias'), t('Prueba con otro nombre de cookie.'));
  } else {
    const fragment = document.createDocumentFragment();
    const profile = activeProfile();
    const mappedNames = profile ? mappedRuleIndex(profile) : new Map<string, number>();
    const mappedRows = profile ? filtered.filter(row => mappedNames.has(row.cookie.name)) : [];
    const otherRows = profile ? filtered.filter(row => !mappedNames.has(row.cookie.name)) : filtered;
    const appendGroup = (title: string, count: number, icon: string, kind = '') => {
      const heading = document.createElement('div');
      heading.className = `cookie-group ${kind}`.trim();
      heading.append(lucideIcon(icon));
      const name = document.createElement('span');
      name.textContent = t(title);
      const total = document.createElement('span');
      total.className = 'cookie-group-count';
      total.textContent = t(count === 1 ? '{count} cookie' : '{count} cookies', {count});
      heading.append(name, total);
      fragment.append(heading);
    };
    if (profile) {
      appendGroup(t('Del mapeo'), mappedRows.length, 'bookmark-check');
      if (!mappedRows.length && !searchInput.value.trim()) {
        const empty = document.createElement('div');
        empty.className = 'cookie-group-empty';
        empty.textContent = profile.rules.length
          ? t('Ninguna cookie de las reglas guardadas está disponible en el origen.')
          : t('Este mapeo no tiene reglas de cookies.');
        fragment.append(empty);
      }
    }
    const renderRow = (row: CookieRow, mapped: boolean) => {
      const outer = document.createElement('div');
      outer.className = `cookie-row${row.selected ? ' selected' : ''}${mapped ? ' mapped' : ''}`;
      const check = document.createElement('input');
      check.type = 'checkbox';
      check.className = 'cookie-checkbox';
      check.checked = row.selected;
      check.setAttribute('aria-label', t('Copiar {name}', {name:row.cookie.name}));
      check.addEventListener('change', () => {
        row.selected = check.checked;
        outer.classList.toggle('selected', row.selected);
        clearFeedback();
        syncButtons();
      });

      const content = document.createElement('div');
      content.className = 'cookie-content';
      const header = document.createElement('div');
      header.className = 'cookie-header';
      const name = document.createElement('div');
      name.className = 'cookie-name';
      name.textContent = row.cookie.name;
      name.title = row.cookie.name;
      const attrs = document.createElement('div');
      attrs.className = 'cookie-attrs';
      const tags = [
        ...(row.cookie.httpOnly ? ['HttpOnly'] : []),
        ...(row.cookie.secure ? ['Secure'] : []),
        ...(row.cookie.session ? [t('Sesión')] : [])
      ];
      for (const tag of tags) {
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.textContent = tag;
        attrs.append(chip);
      }
      if (mapped) {
        const marker = document.createElement('span');
        marker.className = 'cookie-rule-label';
        marker.append(lucideIcon('check'));
        marker.append(document.createTextNode(t('Regla')));
        attrs.prepend(marker);
      }
      header.append(name, attrs);

      const sub = document.createElement('span');
      sub.className = 'cookie-sub';
      sub.textContent = `${row.cookie.domain}${row.cookie.path} · ${t('valor oculto')}`;
      sub.title = `${row.cookie.domain}${row.cookie.path}`;

      const aliasRow = document.createElement('div');
      aliasRow.className = 'alias-row';
      const arrow = document.createElement('span');
      arrow.append(lucideIcon('arrow-right'));
      arrow.setAttribute('aria-hidden', 'true');
      const input = document.createElement('input');
      input.type = 'text';
      input.value = row.alias;
      input.autocomplete = 'off';
      input.spellcheck = false;
      input.maxLength = 256;
      input.setAttribute('aria-label', t('Nombre de destino para {name}', {name:row.cookie.name}));
      input.addEventListener('input', () => {
        row.alias = input.value;
        clearFeedback();
        syncButtons();
      });
      aliasRow.append(arrow, input);
      content.append(header, sub, aliasRow);
      outer.append(check, content);
      fragment.append(outer);
    };
    for (const row of mappedRows) renderRow(row, true);
    if (profile && otherRows.length) appendGroup(t('Otras cookies'), otherRows.length, 'cookie', 'other');
    for (const row of otherRows) renderRow(row, false);
    list.replaceChildren(fragment);
  }
  list.scrollTop = scrollPosition;
  syncButtons();
}

function invalidateCookies(): void {
  cookies = [];
  loadedFor = null;
  searchInput.value = '';
  renderCookies();
  clearFeedback();
}

function updateTabMetadata(): void {
  const source = parsedUrl(sourceTab());
  const target = parsedUrl(targetTab());
  sourceMeta.textContent = source ? source.origin : t('Selecciona una pestaña HTTP(S).');
  targetMeta.textContent = target ? target.origin : t('Selecciona una pestaña HTTP(S).');
  if (activeProfile() && !mappedPairIsValid()) {
    showNotice(t('El origen/destino no cumple el mapeo. Selecciona pestañas coincidentes o pasa a transferencia manual.'), 'warn');
  }
  if (source && target && source.origin === target.origin && sourceTab()?.id !== targetTab()?.id) {
    showNotice(t('Ambas pestañas comparten origen: las cookies del mismo perfil son comunes y la copia afectará a las dos.'), 'warn');
  }
  syncButtons();
}

function fillSelect(select: HTMLSelectElement, preferredId: number | undefined): void {
  select.replaceChildren();
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = t('Selecciona una pestaña…');
  select.append(placeholder);
  for (const tab of tabs) {
    const option = document.createElement('option');
    option.value = String(tab.id);
    option.textContent = formatTab(tab);
    option.title = tab.title ?? tab.url ?? '';
    select.append(option);
  }
  if (preferredId !== undefined && tabs.some(tab => tab.id === preferredId)) select.value = String(preferredId);
  else select.value = '';
}

async function loadTabs(): Promise<void> {
  if (busy) return;
  try {
    const oldSource = Number(sourceSelect.value);
    const oldTarget = Number(targetSelect.value);
    const allTabs = await chrome.tabs.query({ currentWindow: true });
    tabs = allTabs.filter(tab => tab.id !== undefined && parsedUrl(tab));
    const active = tabs.find(tab => tab.active) ?? tabs[0];
    const sourceId = tabs.some(tab => tab.id === oldSource) ? oldSource : active?.id;
    const targetId = tabs.some(tab => tab.id === oldTarget && tab.id !== sourceId)
      ? oldTarget
      : tabs.find(tab => tab.id !== sourceId)?.id;
    fillSelect(sourceSelect, sourceId);
    fillSelect(targetSelect, targetId);
    cookieDomainInput.value = guessCookieDomain(parsedUrl(sourceTab())?.hostname ?? '');
    invalidateCookies();
    detectMapping();
    if (activeProfile()) applyProfile(activeProfile()!);
    updateTabMetadata();
    if (tabs.length < 2) showNotice(t('Abre al menos dos pestañas HTTP(S) en esta ventana.'), 'warn');
  } catch (error) {
    showNotice(t('No se han podido consultar las pestañas: {error}', {error:errorMessage(error)}), 'error');
  }
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

async function storeIdFor(tabId: number): Promise<string | undefined> {
  const stores = await chrome.cookies.getAllCookieStores();
  return stores.find(store => store.tabIds.includes(tabId))?.id;
}

function selectedSites(): { source: BrowserTab; target: BrowserTab; sourceUrl: URL; targetUrl: URL } | null {
  const source = sourceTab();
  const target = targetTab();
  const sourceUrl = parsedUrl(source);
  const targetUrl = parsedUrl(target);
  if (source?.id === undefined || target?.id === undefined || source.id === target.id || !sourceUrl || !targetUrl) return null;
  return { source, target, sourceUrl, targetUrl };
}

async function readCookies(): Promise<void> {
  const selected = selectedSites();
  const cookieDomain = selectedCookieDomain();
  if (!selected || !cookieDomain) return;
  clearFeedback();
  // Llamada inmediata desde el clic: Chromium exige activación del usuario.
  const request = chrome.permissions.request({ origins: [...new Set([matchPattern(selected.sourceUrl), domainPermission(selected.sourceUrl, cookieDomain), matchPattern(selected.targetUrl)])] });
  setBusy(true);
  try {
    if (!await request) {
      showNotice(t('Permisos no concedidos. No se ha leído ni modificado ninguna cookie.'), 'warn');
      return;
    }
    const storeId = await storeIdFor(selected.source.id!);
    const snapshot = await getSourceCookies(selected.source.url!, cookieDomain, storeId);
    const found = snapshot.cookies;
    // Las cookies particionadas necesitan una clave de partición específica: fuera del alcance de esta POC.
    const eligible = found.filter(cookie => !cookie.partitionKey);
    eligible.sort((a, b) => a.name.localeCompare(b.name) || a.path.localeCompare(b.path));
    cookies = eligible.map(cookie => ({ cookie, alias: cookie.name, selected: false }));
    applySavedCookieRules();
    loadedFor = loadedSourceKey(selected.sourceUrl, cookieDomain);
    searchInput.value = '';
    renderCookies();
    if (!cookies.length) showNotice(t('No hay cookies disponibles para {domain}. Comprueba el dominio completo, los permisos y el perfil del navegador.', {domain:cookieDomain}), 'warn');
    else if (eligible.length !== found.length) showNotice(t('{count} cookies disponibles. Se han omitido {omitted} particionadas.', {count:cookies.length, omitted:found.length - eligible.length}), 'warn');
    else showNotice(t('{count} cookies leídas ({url} por URL y {domain} por dominio). Usa el filtro para localizar la cookie deseada.', {count:cookies.length,url:snapshot.byUrl,domain:snapshot.byDomain}));
  } catch (error) {
    invalidateCookies();
    showNotice(t('No se han podido leer las cookies: {error}', {error:errorMessage(error)}), 'error');
  } finally {
    setBusy(false);
  }
}

function validateAlias(alias: string, destination: URL): string | null {
  if (!COOKIE_NAME_RE.test(alias)) return t('Nombre de cookie no válido (usa caracteres ASCII permitidos, sin espacios).');
  if (alias.startsWith('__Host-') && destination.protocol !== 'https:') return t('Las cookies __Host- requieren HTTPS.');
  if (alias.startsWith('__Secure-') && destination.protocol !== 'https:') return t('Las cookies __Secure- requieren HTTPS.');
  if ((alias.startsWith('__Http-') || alias.startsWith('__Host-Http-')) && destination.protocol !== 'https:') return t('Las cookies __Http- requieren HTTPS.');
  return null;
}

function renderResults(outcomes: CopyResult[]): void {
  results.replaceChildren();
  const title = document.createElement('div');
  title.className = 'result-title';
  const ok = outcomes.filter(result => result.ok).length;
  title.textContent = t('Detalle: {ok} correctas · {failed} fallidas', {ok, failed:outcomes.length - ok});
  results.append(title);
  for (const outcome of outcomes) {
    const row = document.createElement('div');
    row.className = `result-entry ${outcome.ok ? 'ok' : 'failed'}`;
    const icon = document.createElement('span');
    icon.className = 'result-icon';
    icon.append(lucideIcon(outcome.ok ? 'circle-check' : 'circle-x'));
    const detail = document.createElement('span');
    detail.className = 'result-text';
    detail.textContent = `${outcome.from} → ${outcome.to}${outcome.reason ? `: ${outcome.reason}` : ''}`;
    row.append(icon, detail);
    results.append(row);
  }
  results.classList.remove('hidden');
}

function transferSignature(selected: { sourceUrl: URL; targetUrl: URL }): string {
  return JSON.stringify({
    source: selected.sourceUrl.origin,
    target: selected.targetUrl.origin,
    domain: selectedCookieDomain(),
    profile: activeProfileId,
    rows: selectedRows().map(row => [cookieKey(row.cookie), row.alias])
  });
}

function checkSelection(destination: URL): string | null {
  const nameSet = new Set<string>();
  for (const row of selectedRows()) {
    const issue = validateAlias(row.alias, destination);
    if (issue) return `${row.cookie.name}: ${issue}`;
    if (nameSet.has(row.alias)) return t('Varias cookies terminarían con la key «{name}». Modifica una key.', {name:row.alias});
    nameSet.add(row.alias);
  }
  return null;
}

function hasTargetConflict(all: BrowserCookie[], alias: string, target: URL): boolean {
  // Incluye cookies de dominio padre que sean visibles en el destino.
  return all.some(cookie => cookie.name === alias && cookie.path === '/' &&
    (target.hostname === cookie.domain.replace(/^\./, '') || target.hostname.endsWith('.' + cookie.domain.replace(/^\./, ''))));
}

async function previewTransfer(): Promise<void> {
  const selected = selectedSites();
  const domain = selectedCookieDomain();
  if (!selected || !domain || !selectedRows().length || !loadedFor || !mappedPairIsValid()) return;
  if (loadedFor !== loadedSourceKey(selected.sourceUrl, domain)) { showNotice(t('Vuelve a leer las cookies del origen.'), 'warn'); return; }
  const issue = checkSelection(selected.targetUrl);
  if (issue) { showNotice(issue, 'error'); return; }
  // La petición de permisos debe realizarse directamente desde un clic.
  const request = chrome.permissions.request({ origins: [...new Set([
    matchPattern(selected.sourceUrl), domainPermission(selected.sourceUrl, domain), matchPattern(selected.targetUrl)
  ])] });
  clearFeedback();
  setBusy(true);
  try {
    if (!await request) { showNotice(t('No se concedieron permisos al destino.'), 'warn'); return; }
    const fresh = await Promise.all([chrome.tabs.get(selected.source.id!), chrome.tabs.get(selected.target.id!)]);
    if (parsedUrl(fresh[0])?.origin !== selected.sourceUrl.origin || parsedUrl(fresh[1])?.origin !== selected.targetUrl.origin) {
      showNotice(t('Una pestaña ha cambiado de origen. Actualiza las pestañas.'), 'error'); return;
    }
    const storeId = await storeIdFor(selected.target.id!);
    const destinationCookies = await chrome.cookies.getAll({ url: `${selected.targetUrl.origin}/`, ...(storeId ? { storeId } : {}) });
    const conflicts = new Map<string, boolean>();
    const fragment = document.createDocumentFragment();
    for (const row of selectedRows()) {
      const exists = hasTargetConflict(destinationCookies, row.alias, selected.targetUrl);
      conflicts.set(row.alias, exists);
      const entry = document.createElement('div');
      entry.className = 'preview-entry';
      const names = document.createElement('span');
      names.className = 'preview-entry-name';
      names.textContent = `${row.cookie.name} → ${row.alias}`;
      const label = document.createElement('span');
      label.className = `preview-entry-label${exists ? ' conflict' : ''}`;
      label.textContent = exists ? t('Puede reemplazar') : t('Nueva');
      entry.append(names, label);
      fragment.append(entry);
    }
    previewList.replaceChildren(fragment);
    const conflictCount = [...conflicts.values()].filter(Boolean).length;
    previewTitle.textContent = t('Vista previa · {count} {cookies}{conflicts}', {count:conflicts.size, cookies:conflicts.size === 1 ? 'cookie' : 'cookies', conflicts: conflictCount ? t(' · {count} conflictos', {count:conflictCount}) : ''});
    preview = { signature: transferSignature(selected), conflicts };
    previewPanel.classList.remove('hidden');
  } catch (error) { showNotice(t('No se pudo preparar la transferencia: {error}', {error:errorMessage(error)}), 'error'); }
  finally { setBusy(false); }
}

async function commitCookies(): Promise<void> {
  const selected = selectedSites();
  const cookieDomain = selectedCookieDomain();
  if (!selected || !cookieDomain || !loadedFor || !preview || !mappedPairIsValid()) return;
  if (preview.signature !== transferSignature(selected)) { invalidatePreview(); showNotice(t('La selección cambió. Revisa de nuevo.'), 'warn'); return; }
  const savedPreview = preview;
  const chosen = selectedRows();
  if (!chosen.length) return;
  if (loadedSourceKey(selected.sourceUrl, cookieDomain) !== loadedFor) {
    showNotice(t('La pestaña de origen ha cambiado. Vuelve a leer las cookies.'), 'error');
    return;
  }
  const issue = checkSelection(selected.targetUrl);
  if (issue) { showNotice(issue, 'error'); return; }

  // Si ya se concedieron, este request se resuelve sin volver a pedir permiso.
  const request = chrome.permissions.request({ origins: [...new Set([matchPattern(selected.sourceUrl), domainPermission(selected.sourceUrl, cookieDomain), matchPattern(selected.targetUrl)])] });
  clearFeedback();
  setBusy(true);
  try {
    if (!await request) {
      showNotice(t('Permisos no concedidos. No se ha modificado ninguna cookie.'), 'warn');
      return;
    }
    // Evita escribir en una pestaña distinta si se ha navegado desde que se seleccionó.
    const [freshSource, freshTarget] = await Promise.all([
      chrome.tabs.get(selected.source.id!), chrome.tabs.get(selected.target.id!)
    ]);
    if (parsedUrl(freshSource)?.origin !== selected.sourceUrl.origin || parsedUrl(freshTarget)?.origin !== selected.targetUrl.origin) {
      showNotice(t('Una pestaña ha cambiado de sitio. Actualiza la selección antes de copiar.'), 'error');
      return;
    }
    const [sourceStoreId, targetStoreId] = await Promise.all([
      storeIdFor(selected.source.id!), storeIdFor(selected.target.id!)
    ]);
    const currentDestination = await chrome.cookies.getAll({
      url: `${selected.targetUrl.origin}/`, ...(targetStoreId ? { storeId: targetStoreId } : {})
    });
    if (chosen.some(row => hasTargetConflict(currentDestination, row.alias, selected.targetUrl) !== savedPreview.conflicts.get(row.alias))) {
      showNotice(t('El destino cambió desde la vista previa. Revisa la transferencia otra vez.'), 'warn');
      return;
    }
    const snapshot = await getSourceCookies(freshSource.url!, cookieDomain, sourceStoreId);
    const latest = new Map(snapshot.cookies.map(cookie => [cookieKey(cookie), cookie]));
    const outcomes: CopyResult[] = [];
    let normalized = 0;
    for (const row of chosen) {
      const cookie = latest.get(cookieKey(row.cookie));
      if (!cookie) {
        outcomes.push({ from: row.cookie.name, to: row.alias, ok: false, reason: t('Cookie ya no disponible en origen') });
        continue;
      }
      if (cookie.partitionKey) {
        outcomes.push({ from: row.cookie.name, to: row.alias, ok: false, reason: t('Cookie particionada no soportada') });
        continue;
      }
      const isHttps = selected.targetUrl.protocol === 'https:';
      const sameSite = cookie.sameSite === 'no_restriction' && !isHttps ? 'lax' : cookie.sameSite;
      const secure = isHttps && (cookie.secure || sameSite === 'no_restriction' || row.alias.startsWith('__Secure-') || row.alias.startsWith('__Host-') || row.alias.startsWith('__Http-'));
      if (cookie.secure !== secure || cookie.sameSite !== sameSite || cookie.path !== '/' || cookie.domain.replace(/^\./, '') !== selected.targetUrl.hostname) normalized++;
      const payload: CookieSetDetails = {
        url: `${selected.targetUrl.origin}/`,
        name: row.alias,
        value: cookie.value,
        path: '/',
        secure,
        httpOnly: cookie.httpOnly || row.alias.startsWith('__Http-') || row.alias.startsWith('__Host-Http-'),
        sameSite,
        ...(targetStoreId ? { storeId: targetStoreId } : {}),
        ...(!cookie.session && cookie.expirationDate && cookie.expirationDate > Date.now() / 1000 ? { expirationDate: cookie.expirationDate } : {})
      };
      try {
        const written = await chrome.cookies.set(payload);
        if (!written) throw new Error(t('El navegador no devolvió la cookie creada'));
        outcomes.push({ from: cookie.name, to: row.alias, ok: true });
      } catch (error) {
        outcomes.push({ from: cookie.name, to: row.alias, ok: false, reason: errorMessage(error) });
      }
    }
    const ok = outcomes.filter(outcome => outcome.ok).length;
    const failed = outcomes.length - ok;
    renderResults(outcomes);
    if (failed) showNotice(t('{ok} copiadas, {failed} fallidas. Revisa el detalle.', {ok,failed}), 'warn');
    else showNotice(t('{ok} cookies copiadas al destino.{suffix}', {ok, suffix:normalized ? t(' Se adaptaron atributos al dominio y protocolo de destino.') : ''}));
  } catch (error) {
    showNotice(t('Error al copiar las cookies: {error}', {error:errorMessage(error)}), 'error');
  } finally {
    setBusy(false);
  }
}

sourceSelect.addEventListener('change', () => {
  activeProfileId = null;
  dismissedSuggestionFor = null;
  cookieDomainInput.value = guessCookieDomain(parsedUrl(sourceTab())?.hostname ?? '');
  invalidateCookies();
  detectMapping();
  updateTabMetadata();
});
targetSelect.addEventListener('change', () => { invalidateCookies(); updateTabMetadata(); });
cookieDomainInput.addEventListener('input', () => { invalidateCookies(); syncButtons(); });
refreshButton.addEventListener('click', () => { void loadTabs(); });
readButton.addEventListener('click', () => { void readCookies(); });
copyButton.addEventListener('click', () => { void previewTransfer(); });
confirmCopy.addEventListener('click', () => { void commitCookies(); });
previewCancel.addEventListener('click', () => { invalidatePreview(); syncButtons(); });
searchInput.addEventListener('input', renderCookies);
selectAllButton.addEventListener('click', () => {
  const filtered = visibleRows();
  const select = !filtered.every(row => row.selected);
  filtered.forEach(row => { row.selected = select; });
  clearFeedback();
  renderCookies();
});
menuTrigger.addEventListener('click', () => {
  if (busy) return;
  const opening = mappingMenu.classList.contains('hidden');
  mappingMenu.classList.toggle('hidden', !opening);
  menuTrigger.setAttribute('aria-expanded', String(opening));
  if (opening) mappingMenu.querySelector<HTMLButtonElement>('button')?.focus();
});
document.addEventListener('click', event => {
  if (!menuTrigger.parentElement?.contains(event.target as Node)) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mappingMenu.classList.contains('hidden')) { closeMenu(); menuTrigger.focus(); }
});
menuCreate.addEventListener('click', () => openEditor());
menuManage.addEventListener('click', openManager);
managerBack.addEventListener('click', showTransfer);
managerNew.addEventListener('click', () => openEditor());
clearActive.addEventListener('click', setManual);
applySuggested.addEventListener('click', () => {
  const chosen = profiles.find(profile => profile.id === suggestedProfileId);
  if (chosen) chooseProfile(chosen);
});
dismissSuggested.addEventListener('click', () => { dismissedSuggestionFor = sourceSelect.value; renderMappingUI(); });
saveCurrent.addEventListener('click', () => {
  if (!loadedFor || !selectedRows().length) return;
  const current = activeProfile();
  openEditor(undefined, 'transfer', true);
  if (current) {
    mappingName.value = t('{source} (copia)', {source:current.name});
    mappingSource.value = current.sourcePattern;
    mappingDestination.value = current.destinationPattern;
    mappingDomain.value = current.cookieDomain;
  }
});
updateCurrent.addEventListener('click', () => { const profile = activeProfile(); if (profile && loadedFor && selectedRows().length && mappedPairIsValid()) openEditor(profile, 'transfer', true); });
addRule.addEventListener('click', () => { if (draftRules.length >= MAX_RULES) return; draftRules.push({sourceName:'', targetName:''}); renderEditorRules(); rulesList.querySelector<HTMLInputElement>('.rule-entry:last-child input')?.focus(); });
importRules.addEventListener('click', () => { rulePicker.classList.toggle('hidden'); if (!rulePicker.classList.contains('hidden')) rulePickerRender(); });
rulePickerClose.addEventListener('click', () => { rulePicker.classList.add('hidden'); });
mappingCancel.addEventListener('click', closeEditor);
mappingTest.addEventListener('click', describePattern);
mappingSave.addEventListener('click', () => { void saveMapping(); });
mappingDelete.addEventListener('click', () => { if (editorProfileId) requestDeleteMapping(editorProfileId); });
deleteCancel.addEventListener('click', () => { pendingDeleteId = null; renderManager(); });
deleteAccept.addEventListener('click', () => { void deleteMapping(); });


fillIcons();
snapshotStaticStrings();
const languageSelect = document.getElementById('language-select') as HTMLSelectElement;
languageSelect.addEventListener('change', () => {
  language = languageSelect.value === 'en' ? 'en' : 'es';
  translateStaticStrings();
  void chrome.storage.local.set({[LANGUAGE_STORAGE_KEY]:language}).catch(error => showNotice(String(error), 'error'));
  renderMappingUI();
  renderManager();
  renderEditorRules();
  if (!mappingEditor.classList.contains('hidden')) describePattern();
  fillSelect(sourceSelect, sourceTab()?.id);
  fillSelect(targetSelect, targetTab()?.id);
  updateTabMetadata();
  renderCookies();
  clearFeedback();
});

void (async () => {
  try { await loadLanguage(); } catch { language = 'es'; translateStaticStrings(); }
  try { await loadProfiles(); }
  catch (error) { showNotice(t('No se pudieron cargar los mapeos: {error}', {error:errorMessage(error)}), 'warn'); }
  await loadTabs();
})();
