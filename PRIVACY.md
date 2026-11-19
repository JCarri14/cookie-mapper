# Privacy policy — Cookie Mapper

_Last updated: 19 November 2026_

Cookie Mapper is a local browser extension for reading, renaming and copying selected cookies between browser tabs at the user's request. It does not run a backend, use analytics, or sell user data.

## Data used

- **Cookie names, attributes, and values:** read from the explicitly selected source and destination only during an initiated read, preview, or transfer. Cookie values are held in memory while the popup is open and written to the destination browser cookie store only when you confirm.
- **Open tab titles and URLs:** read to display available source/destination choices and match user-defined URL patterns.
- **Saved mappings:** the mapping name, URL patterns, cookie domain, and cookie-name transformations are stored in `chrome.storage.local`. **Cookie values are not stored in mappings.**
- **Language preference:** `es` or `en` is stored locally.

## Sharing and retention

The extension does not transmit cookie contents, tab data, or saved mappings to the developer or third parties, and does not include tracking, advertisements, or remote scripts. Saved mappings and language preference remain in the browser extension's local storage until deleted by the user, the extension is removed, or browser data is reset. Cookie values are not retained by the extension after the popup closes; cookies copied to the target are governed by the browser and target website.

The **destination website** may subsequently receive cookies through normal web requests. You control which source, destination, and cookie names are involved. Do not transfer session cookies to sites you do not trust.

## Permissions

- `tabs`: display open tab titles/URLs and identify selected sites.
- `cookies`: inspect and set cookies as requested.
- `storage`: retain mapping rules and preferred language.
- Optional HTTP(S) site access: requested on demand for chosen domains; not a background blanket read of all sites.

## Your choices

You may delete individual mappings in **Mappings → Manage mappings**, deny optional site permissions, revoke them from browser extension settings, or uninstall the extension. For issues or privacy questions, use the public repository's GitHub Issues page **without pasting cookie values or sensitive site information**.

## Spanish version

See [PRIVACY.es.md](PRIVACY.es.md).
