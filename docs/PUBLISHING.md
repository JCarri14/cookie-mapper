# Publishing checklist

## 1. GitHub first

1. Review every file in the repository before making it public; never commit company/customer domains, personal data, or real session values.
2. Create a public repository named `cookie-mapper` (or use your preferred name), with **no automatically generated README/license** because they already exist here.
3. Push `main`, enable Issues and optionally private vulnerability reporting in **Settings → Security → Code security and analysis**.
4. Verify **Actions → CI** passes, README screenshots load, and the MIT/ISC license notices are present.
5. Create the first tag/release `v1.0.0` only after manual testing in a real Edge installation.

### CLI (after GitHub authentication)

```sh
git init
git branch -M main
git add .
git commit -m "chore: prepare Cookie Mapper 1.0.0 open-source release"
gh repo create cookie-mapper --public --source=. --remote=origin --push
# Once the repository is verified and Edge QA has passed:
git tag v1.0.0
git push origin v1.0.0
```

You can also create an empty repo on GitHub and `git remote add origin <your-repository-url>` + `git push -u origin main`.

## 2. Edge Add-ons later

1. Test the exact `release/cookie-mapper-1.0.0.zip` in Edge on Windows.
2. Register or sign in at Microsoft Partner Center for Edge extensions.
3. Add **store listing images**, developer contact, and public privacy policy URL (`https://github.com/<owner>/<repo>/blob/main/PRIVACY.md`) only after the repo exists.
4. Fill in **permissions justification** for `tabs`, `cookies`, `storage`, and broad optional host permissions. Explain that prompts are only issued for user-selected domains.
5. Declare data practices truthfully. No developer-side collection is expected; browser-side access to sensitive cookie values must still be disclosed where requested.
6. Upload the ZIP and complete store verification. Submission is not publication; await approval.

## Not completed by this package

GitHub repository creation/push, the real Edge UI acceptance check, personal/legal publisher contact, store graphic assets/screenshots at required sizes, developer-account registration, and store submission.

## Manual acceptance before public release

- Fresh install and upgrade in the **same unpacked extension folder** from v0.6; confirm saved mappings remain.
- ES/EN by browser language and manual selector; dismiss and reopen popup.
- Read a synthetic/authorized `HttpOnly` cookie on a parent domain and copy with a renamed key.
- Inspect permission prompts on source/domain/destination.
- Test missing permissions, cross-origin destination, SameSite/Secure adaptation, conflicts, and stale tabs.
- Ensure no cookie values appear in storage, logs, exported ZIP, or screenshots.

## Draft listing text

Copyable English and Spanish descriptions and permission justifications are available in [STORE_LISTING.md](STORE_LISTING.md). The public repository owner's contact details and store-specific screenshots are intentionally not pre-filled.
