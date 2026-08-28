# Contributing to History of Hackers

Thanks for helping build an accurate, open archive of hacker culture and
security history. Read this before opening a PR.

## Current state of the project

Today the entire site is one file, `index.html` — articles live as plain JS
objects in the `ARTICLES` array, no build step. A structured `templates/`
schema (person/group/event/tool/vulnerability) exists for the planned move
to `data/*.json` files, but nothing consumes it yet — **don't migrate
content on your own initiative**; add new articles the current way
(edit `index.html`) unless a maintainer says the data migration is in
progress.

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
3. For a **new article**: duplicate an existing object in the `ARTICLES`
   array in `index.html`. See [Article Schema](README.md#article-schema)
   in the README for the exact shape.
4. For a **new person/group/event/tool/vulnerability candidate that isn't
   ready for an article yet**: add a row to
   [RESEARCH_BACKLOG.md](RESEARCH_BACKLOG.md) instead of writing the article
   directly.
5. Add sources — at least one, ideally several, following
   [SOURCES.md](SOURCES.md).
6. Validate locally:
   - Open `index.html` in a browser, confirm the new article renders,
     search finds it, and no console errors appear.
   - Check every link you added resolves and uses
     `rel="noopener noreferrer"` if it's `target="_blank"`.
7. Open a Pull Request with a descriptive title (e.g.
   `Add: Katie Moussouris — bug bounty history`). In the description,
   list your sources and note if any fact is `DISPUTED`/`UNVERIFIED`.

## What reviewers check

- Sources actually support the claims made.
- Tone matches [STYLE_GUIDE.md](STYLE_GUIDE.md).
- No copy-pasted text from Wikipedia or elsewhere — original writing only.
- No unlicensed images (see [SOURCES.md](SOURCES.md#images)).
- `index.html` still opens and runs with no JS errors.

## Small fixes

Typo, date correction, dead link swap — just edit directly and open a PR
describing the fix and the source for the correction.

## Questions / uncertain candidates

If you're unsure whether someone/something has enough documentation for an
article, open an issue or add them to
[RESEARCH_BACKLOG.md](RESEARCH_BACKLOG.md) with status `TODO` and what you
already found — don't guess your way into an article.
