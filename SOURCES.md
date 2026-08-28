# Sources Policy

## Reference format

Every reference cited in an article should carry, at minimum, a `label` and
a `url` (matching the current `sources: [{ label, url }]` shape in
`index.html`). When adding entries to the future JSON dataset
(see `templates/`), use the fuller shape:

```json
{
  "title": "Original headline or document title",
  "author": "Author or organization",
  "publisher": "Publication or site",
  "date": "YYYY-MM-DD or YYYY",
  "url": "https://...",
  "accessDate": "YYYY-MM-DD",
  "type": "PRIMARY | ACADEMIC | CONFERENCE | NEWS | ARCHIVE | INTERVIEW | COMMUNITY"
}
```

## Source types

- **PRIMARY** — the subject's own writing/talk, an advisory, a CVE record,
  a court document, an original code release.
- **ACADEMIC** — papers, theses, IEEE/ACM/USENIX publications.
- **CONFERENCE** — DEF CON, Black Hat, CCC talks/slides/video.
- **NEWS** — reputable journalism (Wired, major outlets, trade press).
- **ARCHIVE** — Internet Archive, Wayback Machine captures of otherwise
  dead links.
- **INTERVIEW** — podcasts, documentaries, recorded interviews.
- **COMMUNITY** — Phrack, Bugtraq/Full Disclosure archives, Packet Storm,
  underground zines. Useful as historical record, not treated as
  automatically factual — corroborate before stating as fact.

## Priority order

1. Primary sources (the researcher's own site/blog/paper/advisory, CVE/NVD,
   CERT/CISA, vendor advisories).
2. Academic and conference sources (USENIX, IEEE, ACM, DEF CON, Black Hat).
3. Reliable technical/news press.
4. Wikipedia — good for discovery, not sufficient alone for a
   contested or unusual claim. Cross-check anything load-bearing.
5. Community/underground material — valid as historical context, always
   treated as a lead to verify, not a fact in itself.

## Images

- Never scrape random images off the internet.
- Only use images with a clear, compatible license (public domain, CC-BY,
  CC-BY-SA, or explicit permission).
- Record `source`, `author`, and `license` for every image used.
- No image is better than an unlicensed or fabricated one. Never generate or
  imply a "portrait" of a real person that isn't an actual photo of them.

## Extraordinary claims

The more extraordinary or damaging a claim, the more independent
corroboration it requires before publication. A single unverified source is
not enough for claims like criminal conduct, nation-state attribution, or
identity of a pseudonymous figure.
