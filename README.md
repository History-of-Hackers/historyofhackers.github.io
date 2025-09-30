# History of Hackers — Mini Wiki

A lightweight, single-file wiki about hacker history. Built with **pure HTML/CSS/JS** (one `index.html`), easy to edit and perfect for **GitHub Pages**.

> Live structure: the entire site lives in `index.html`. Articles are plain JavaScript objects inside the `ARTICLES` array.

---

## Table of Contents
- [Project Goals](#project-goals)
- [Quick Start](#quick-start)
- [How to Contribute](#how-to-contribute)
- [Article Schema](#article-schema)
- [Editorial Guidelines](#editorial-guidelines)
- [Style Guide](#style-guide)
- [Images & Media](#images--media)
- [Testing Your Changes](#testing-your-changes)
- [Pull Request Checklist](#pull-request-checklist)
- [FAQ](#faq)
- [License](#license)

---

## Project Goals
- **Preserve** the history of hacking with accurate, sourced entries.
- **Educate** with a neutral, encyclopedic tone.
- **Keep it simple**: a single HTML file, no build steps, no external dependencies.

---

## Quick Start
1. **Fork** this repository.
2. **Clone** your fork:  
   `git clone https://github.com/<your-username>/history-of-hackers.git`
3. Open `index.html` in any text editor.
4. Add or edit an article inside the `ARTICLES` array.
5. Commit & push your changes.
6. (Optional) Enable **GitHub Pages**: *Settings → Pages →* select **Branch:** `main` and **Folder:** `/ (root)`.

---

## How to Contribute
There are two common paths:

### 1) Small Fix (typo, date, source)
- Edit `index.html` directly.
- Keep the change minimal and clearly described in your commit message.
- Open a Pull Request (PR).

### 2) New Article
- Duplicate an existing article object in the `ARTICLES` array.
- Update fields (see [Article Schema](#article-schema)).
- Add **at least one** credible source (preferably more).
- Open a PR with a descriptive title (e.g., `Add: Kevin Mitnick complete history`).

> **Tip:** Use a unique `id` (next integer), a URL-friendly `slug` (lowercase, dashes), and a concise `summary`.

---

## Article Schema
Each article is a plain object inside the `ARTICLES` array:

```js
{
  id: 7,                             // unique integer
  title: "Example Title",            // article title
  slug: "example-title",             // lowercase-with-dashes
  era: "1990s–2000s",                // free text (range or label)
  tags: ["phreaking","FBI"],         // short, reusable keywords
  summary: "One-line summary.",      // concise overview
  content: `
    <h2>Section</h2>
    <p>Write content in HTML (paragraphs, lists, headings).</p>
    <ul>
      <li>Keep paragraphs short.</li>
      <li>Use multiple sections as needed.</li>
    </ul>
  `,                                 // HTML allowed
  sources: [
    { label: "Reference Name", url: "https://example.com" }
  ]                                   // at least one reputable source
}
