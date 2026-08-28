# Contributing to History of Hackers

Thanks for helping build an accurate, open archive of hacker culture and
security history. Read this before opening a PR.

## Current state of the project

The site is a multi-page static archive. Content lives as JSON records
under [`data/`](data/README.md) (one file per person/group/tool/
vulnerability/event/publication/field, matching the schemas in
[`templates/`](templates/)), and each record has a matching static HTML
page under `/people/`, `/groups/`, `/tools/`, `/vulnerabilities/`,
`/events/`, `/publications/`, or `/fields/`. Search and filtering are
client-side, reading [`data/manifest.json`](data/manifest.json). There is
no build step — pages are written by hand (or copied from an existing page
of the same type) and committed as-is.

## Ground rules

1. **No invented information.** Not dates, aliases, nationalities, CVEs,
   affected companies, exploits, quotes, arrests, or relationships between
   people. See [STYLE_GUIDE.md](STYLE_GUIDE.md).
2. **Every non-trivial claim needs a source.** See [SOURCES.md](SOURCES.md).
3. **Quality over quantity.** One well-sourced article beats five thin ones.
4. **Neutral, factual tone.** No sensationalism, no glorification of crime,
   no ranking of "best/worst hackers".

## Workflow

1. Fork the repository.
2. Create a branch: `git checkout -b add-jane-doe` or `fix-mitnick-date`.
3. For a **new article**, see the step-by-step in
   [data/README.md](data/README.md#adding-a-new-entity): copy a template
   from `templates/`, fill in `data/<type>/<slug>.json`, add a row to
   `data/manifest.json`, and copy an existing page of the same type under
   `/people/`, `/groups/`, `/tools/`, `/vulnerabilities/`, `/events/`,
   `/publications/`, or `/fields/` to build the new page.
4. For a **candidate that isn't ready for an article yet**: add a row to
   [RESEARCH_BACKLOG.md](RESEARCH_BACKLOG.md) instead of writing the article
   directly.
5. Add sources — at least one, ideally several, following
   [SOURCES.md](SOURCES.md).
6. Validate locally:
   - Serve the repo (e.g. `python3 -m http.server`) and open the new page,
     confirm it renders, appears in `/search/` and the relevant `/<type>/`
     index, and has no console errors.
   - Check every link you added resolves and uses
     `rel="noopener noreferrer"` if it's `target="_blank"`.
   - If the entry has dated milestones, confirm they show up correctly on
     `/timeline/`.
7. Open a Pull Request with a descriptive title (e.g.
   `Add: Katie Moussouris — bug bounty history`). In the description,
   list your sources and note if any fact is `DISPUTED`/`UNVERIFIED`.

## What reviewers check

- Sources actually support the claims made.
- Tone matches [STYLE_GUIDE.md](STYLE_GUIDE.md).
- No copy-pasted text from Wikipedia or elsewhere — original writing only.
- No unlicensed images (see [SOURCES.md](SOURCES.md#images)).
- The new/edited page opens and runs with no JS errors, and `data/manifest.json`
  stays valid JSON with the new entry present.

## Small fixes

Typo, date correction, dead link swap — just edit the relevant `data/*.json`
record and the corresponding HTML page, then open a PR describing the fix
and the source for the correction.

## Questions / uncertain candidates

If you're unsure whether someone/something has enough documentation for an
article, open an issue or add them to
[RESEARCH_BACKLOG.md](RESEARCH_BACKLOG.md) with status `TODO` and what you
already found — don't guess your way into an article.
