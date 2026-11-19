# Store listing drafts (Edge Add-ons / Chrome Web Store)

These descriptions are for a future store submission. **Do not submit until a real Edge acceptance test has passed** and the public repository and privacy-policy URL exist.

## English

**Name:** Cookie Mapper

**Short description:** Copy, rename and map selected cookies between development tabs with reusable rules.

**Long description:**

Cookie Mapper helps developers and QA testers transfer selected cookies between authorized development environments. Choose a source tab, set the cookie domain, select a destination tab, and review exactly which cookie names will be created or replaced before confirming.

Features:
- Copy and rename selected cookies, including accessible HttpOnly cookies.
- Save mappings for source and destination URL patterns, including `{env}` variables.
- Suggest saved mappings when a source tab matches, without applying them automatically.
- Put mapped cookies first, with visible destination aliases.
- Manage rules, test URL patterns, and preview replacements.
- English and Spanish interface, with an in-popup language switch.
- Local processing with no analytics, account, remote scripts, or storage of cookie values.

Use Cookie Mapper only with sites, accounts, and environments you are authorized to access. Cross-domain authentication is not guaranteed; some cookies and host-bound sessions cannot be transferred directly.

## Español

**Nombre:** Cookie Mapper

**Descripción corta:** Copia, renombra y mapea cookies entre pestañas de desarrollo mediante reglas reutilizables.

**Descripción larga:**

Cookie Mapper permite a desarrolladores y equipos de QA transferir cookies seleccionadas entre entornos de desarrollo autorizados. Elige una pestaña de origen, configura el dominio de las cookies, selecciona el destino y revisa qué nombres se crearán o reemplazarán antes de confirmar la copia.

Características:
- Copiar y renombrar cookies seleccionadas, incluidas las HttpOnly accesibles.
- Guardar mapeos con patrones de origen y destino, incluidas variables `{env}`.
- Sugerir mapeos compatibles sin aplicarlos automáticamente.
- Mostrar primero las cookies del mapeo y sus nombres de destino.
- Editar reglas, comprobar patrones y previsualizar reemplazos.
- Interfaz en castellano e inglés, con selector de idioma.
- Procesamiento local, sin analítica ni almacenamiento de valores de cookies.

Utiliza Cookie Mapper únicamente con sitios, cuentas y entornos para los que tengas autorización. La autenticación entre dominios no siempre es compatible; algunas cookies y sesiones dependen de su dominio original.

## Permission rationale

| Permission | Why it is needed | When it is used |
|---|---|---|
| `tabs` | Lists source and target tabs and validates which sites are selected | When the popup opens and a transfer is prepared |
| `cookies` | Reads selected cookies and writes their mapped copies | User-requested read, preview, and confirmed transfer |
| `storage` | Stores mapping names, URL patterns, cookie-name rules, and the preferred language | Saving or retrieving settings |
| Optional HTTP(S) host access | Grants cookie access for user-selected origins and parent domains | Requested at runtime, upon a user action |

**Privacy policy:** use the public raw or rendered URL for `PRIVACY.md` after publication. Do not invent a URL before your GitHub repository exists.

**Recommended screenshots:** `assets/preview-en.png` and `assets/preview-es.png` are synthetic references. Create additional store-specific graphics at the exact dimensions required by the chosen marketplace.

**Developer/publisher details:** must be filled in by the actual publisher in Partner Center / Chrome Web Store.
