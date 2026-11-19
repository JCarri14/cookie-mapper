# Security policy

Cookie Mapper handles authentication cookies and must be used only in environments and accounts you are authorized to access.

## Reporting security issues

**Do not post a proof of concept containing active session tokens in a public GitHub issue.** Once the GitHub repository is public, use **Security → Advisories → Report a vulnerability** if private vulnerability reporting is enabled. Otherwise, open a public issue requesting a private contact method, without disclosing exploit details.

## Security model

- The extension requests cookie access only after a user clicks the relevant action, and asks for origin-specific host permissions.
- Cookie values are kept in the popup memory only for the active transfer; profiles persist patterns and cookie names, not values.
- Writes require a preview and explicit confirmation. A destination change since preview aborts the copy.
- Cookie values are never sent to a server controlled by the extension.
- The destination website may itself send cookies to its own server after the copy, and some authentication protocols bind a session to its original host.
- Cookies in private browsing and partitioned cookies may behave differently; partitioned cookies are skipped.
- The tool is not designed to bypass access controls or copy other users' sessions.

## Limitations

Optional host permissions are necessarily broad in the manifest so users can select arbitrary development origins; permission prompts request specific sites. Carefully verify requested sites and the preview before consenting. Advanced regex patterns are user-supplied and can impact responsiveness if overly complex. Do not import rules from untrusted sources.
