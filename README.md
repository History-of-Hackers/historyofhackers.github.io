# History of Hackers

A living, community-maintained archive of the people, groups, tools,
vulnerabilities, events, and publications that shaped hacker culture and
cybersecurity. Pure **HTML/CSS/JS**, no build step, hosted on **GitHub
Pages**.

> Historical accuracy over quantity. Primary sources over rumors.
> Contributions over controversy. Knowledge over sensationalism.

---

## Table of Contents
- [Project Goals](#project-goals)
- [Site Structure](#site-structure)
- [Quick Start](#quick-start)
- [How to Contribute](#how-to-contribute)
- [Editorial Guidelines](#editorial-guidelines)
- [License](#license)

---

## Project Goals
- **Preserve** the history of hacker culture and security research with
  accurate, sourced entries.
- **Educate** with a neutral, encyclopedic tone — no rankings, no
  sensationalism.
- **Keep it static**: HTML/CSS/JS only, no framework, no backend, no
  database, no build step.

## Site Structure

```
/
├── index.html            # homepage
├── about.html            # about the project
├── people/                # researchers, hackers, phreakers, engineers
├── groups/                # collectives, crews, organizations
├── tools/                 # software that changed security research
├── vulnerabilities/       # vulnerabilities, exploits, digital weapons
├── events/                # dated milestones (worm outbreaks, conferences founded...)
├── publications/          # magazines, ezines, manifestos
├── fields/                # thematic overviews (phreaking, BBS culture, disclosure ethics...)
├── timeline/              # chronological view across all of the above
├── search/                # client-side search over data/manifest.json
├── data/                  # canonical JSON content — see data/README.md
├── templates/              # JSON schema templates for new entries
├── assets/css, assets/js  # shared styles and client-side behavior
├── CONTRIBUTING.md, STYLE_GUIDE.md, SOURCES.md, RESEARCH_BACKLOG.md, SECURITY.md
```

Each entity page (person/group/tool/...) is a static HTML file with its
content and an infobox, backed by a matching JSON record in `data/`. There
is no server-side rendering and no client-side data fetch required to read
an article — JavaScript only powers search, filtering, the theme toggle,
and the timeline/search pages that need to read `data/manifest.json`.

## Quick Start
1. **Fork** this repository.
2. **Clone** your fork:
   `git clone https://github.com/<your-username>/history-of-hackers.github.io`
3. Serve it locally to test, e.g. `python3 -m http.server` from the repo
   root, then open `http://localhost:8000/`.
4. Add or edit content — see [How to Contribute](#how-to-contribute).
5. Commit & push your changes, open a Pull Request.

## How to Contribute
See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow (new entity,
small fix, or adding a research candidate), and
[data/README.md](data/README.md) for the exact steps to add a new
person/group/tool/vulnerability/event/publication/field.

## Editorial Guidelines
See [STYLE_GUIDE.md](STYLE_GUIDE.md) (tone, evidence tags, what to avoid)
and [SOURCES.md](SOURCES.md) (source categories, citation format, image
licensing).

## License
Code and content licensing has not been formally declared yet — treat
content as "look but confirm before reuse" until a `LICENSE` file is
added. Contributions are made under the assumption they'll be licensed
permissively for the project's archival purpose; raise this in a PR/issue
if you need clarity for a specific reuse case.
