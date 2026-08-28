# Research Backlog

Candidates being researched before they earn an article. Nothing in this
file is published content — it exists so nobody skips validation and turns
a seed name into an unsourced page.

## Status values

- `TODO` — name identified, no research done yet.
- `RESEARCHING` — actively gathering sources.
- `VERIFIED` — identity and core facts confirmed by reliable sources.
- `ARTICLE_READY` — verified and enough material for a full page per the
  structure in [templates/person.json](templates/person.json).
- `PUBLISHED` — article is live.

## How to use this file

1. Add a candidate row with what you're trying to confirm and why they
   matter.
2. Move status forward only when you actually did the work (found sources,
   confirmed identity, resolved ambiguity).
3. Never jump straight to `PUBLISHED` — if there's no `VERIFIED` step behind
   it, the article shouldn't exist yet.
4. Link sources you've already found in the "Potential Sources" column even
   at `TODO`/`RESEARCHING` stage — half-done research is still useful to the
   next contributor.

## Candidates

| Candidate | Reason | Area | Potential Sources | Status |
|---|---|---|---|---|
| Dan Kaminsky | 2008 DNS cache poisoning vulnerability, major internet infra impact | DNS / Network Security | Black Hat 2008 talk, contemporary news coverage | TODO |
| Joanna Rutkowska | Blue Pill, Qubes OS, virtualization security research | Virtualization / OS Security | Invisible Things Lab publications, Black Hat talks | TODO |
| HD Moore | Metasploit Framework creator | Exploit Development | Already covered in `index.html` (id 14) — verify for expanded standalone page | ARTICLE_READY |
| Katie Moussouris | Bug bounty program pioneer (Microsoft, Pentagon) | Bug Bounty / Vulnerability Disclosure | Public talks, published interviews | TODO |
| Mudge (Peiter Zatko) | L0pht, Senate testimony, DARPA Cyber Fast Track | Vulnerability Research / Policy | Already partly covered via `l0pht-senate-testimony` article — verify for standalone page | RESEARCHING |
| Halvar Flake | Binary analysis / reverse engineering, zynamics/BinDiff | Reverse Engineering | Conference talks, BinDiff documentation | TODO |
| Solar Designer | John the Ripper, Openwall | Password Security / Open Source Tools | Already covered in `index.html` (id 23) — verify for standalone page | ARTICLE_READY |

## Explicitly out of scope until validated

Any name listed only in a planning/prompt document (including this
project's own master instructions) is a lead, not a fact of notability.
Confirm the person exists as a distinct, documented individual, with
sufficient reliable material, before promoting past `TODO`.
