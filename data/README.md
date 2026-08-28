# Data Directory (planned)

This directory is a placeholder for the future migration of content out of
the `ARTICLES` array in `index.html` into standalone JSON records, one file
per entity, matching the schemas in [`/templates`](../templates).

## Why

The single-file `index.html` approach works well at the current scale
(dozens of articles) but won't scale to hundreds/thousands of entries with
per-page infoboxes, related-entity links, and per-type filtering. Separating
content (JSON) from presentation (HTML/CSS/JS) is the intended path forward
— see the project's data architecture goals.

## Planned layout

```
data/
├── people/           # one JSON file per person, matching templates/person.json
├── groups/           # matching templates/group.json
├── events/           # matching templates/event.json
├── tools/            # matching templates/tool.json
└── vulnerabilities/  # matching templates/vulnerability.json
```

## Status

**Not active yet.** `index.html` does not read from this directory. Do not
start migrating existing articles here without a maintainer decision — it
requires matching frontend changes (routing, rendering, search index) that
haven't been built. New content should still go into `index.html`'s
`ARTICLES` array per [CONTRIBUTING.md](../CONTRIBUTING.md) until this
migration is actually implemented.
