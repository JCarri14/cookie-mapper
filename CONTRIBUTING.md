# Contributing to Cookie Mapper

Thank you for helping! Open an issue before substantial changes, especially permissions or cookie-handling behavior.

## Development

Requirements: Node.js 20+, Python 3, Playwright, Chromium.

```sh
npm install
python3 -m pip install playwright==1.56.0
python3 -m playwright install chromium
npm run check
npm run build
npm test
```

The TypeScript UI is in `src/popup.ts`; styles and markup are in `public/`. Localized manifest metadata is in `_locales/en` and `_locales/es`. In-popup copy is maintained in the English dictionary `EN_MESSAGES` and its Spanish source strings, both in `src/popup.ts`. Please add or update both languages and an end-to-end test for new visible text. The language selector is persisted in `cookieMapperLanguageV1`.

## Rules

- Keep processing local. No remote scripts, analytics, background synchronization, or cookie-value persistence.
- Do not embed or submit real auth tokens, session cookies, company/customer domains, or screen captures with live data. Use `example.test`.
- Minimize browser permissions, and keep the explicit preview and confirmation step.
- Add regression coverage for cookie-domain, `HttpOnly`, and `SameSite` cases.
- Discuss any new third-party dependencies before adding them.

By contributing, you agree that your contributions are licensed under the MIT license of this repository; Lucide icon assets retain their ISC license.
