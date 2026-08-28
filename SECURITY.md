# Security Policy

History of Hackers is a static site (HTML/CSS/JS only, no backend, no
database, no API keys). Threat surface is intentionally small; keep it that
way.

## Reporting a vulnerability

If you find a security issue with the site itself (e.g. a DOM XSS vector, a
dependency risk, an unsafe rendering path), open a private report via
GitHub's "Report a vulnerability" flow on this repository, or open an issue
without exploit detail and request contact. Please do not open a PR that
demonstrates a live exploit against the production site.

## Guarantees / practices

- No inline event handlers or `eval()`-style dynamic execution of untrusted
  content.
- No `innerHTML` assignment of unsanitized or external content.
- No third-party analytics, trackers, or ad scripts.
- No API keys, tokens, or secrets in the repository.
- External links use `rel="noopener noreferrer"`.
- Content is served over HTTPS via GitHub Pages.

## Out of scope

- Reports about the historical subject matter of an article (that's an
  editorial/factual correction — open a normal PR or issue instead).
- Denial-of-service, physical, or social-engineering testing against GitHub
  Pages infrastructure itself.
