# Dynatrace Documentation Strategy & Lifecycle — Slide Deck

This repository hosts the Slidev deck used for the **Product Manager, Information Development** workshop presentation.

🌐 **Live presentation deck:**  
https://steroman.github.io/dynatrace-deck/

---

## 📚 About this deck

This presentation was built with **[Slidev](https://sli.dev)**, a Markdown-based slide framework that enables:

- Single-file, content-focused slide authoring  
- Vue-powered components for layouts, interactions, and custom UI  
- Hot-reload editing for rapid iteration  
- Automatic speaker notes and presenter mode  
- Built-in UnoCSS for flexible styling  
- Easy deployment to GitHub Pages

The goal of this deck is to present a cohesive, end-to-end approach to:

- **Task 1:** Redesigning the Dynatrace content strategy & collaboration model  
- **Task 2:** Modernizing and operationalizing the content lifecycle  

---

## 📁 Repository structure

```txt
.
├── slides.md                  # Main presentation content (Slidev)
├── assets/                    # Static assets (images, logos, fonts)
├── theme/                     # Custom theme, layouts & components
│   ├── layouts/               # Custom presentation layouts
│   ├── components/            # Reusable Vue components (DTCard, DTWizardNav, etc.)
│   ├── styles/                # Global styles, variables, typography
│   ├── uno.custom.config.ts   # Custom UnoCSS design tokens
│   └── index.ts               # Theme entrypoint
├── uno.config.ts              # UnoCSS shortcuts & design tokens (calls custom config file in theme folder)
├── package.json
└── README.md                  # You're reading this
```

### Key pieces

- **`slides.md`** — The entire deck lives here. Slidev parses frontmatter to apply layouts, transitions, titles, and metadata.  
- **`theme/`** — Your custom theme with:
  - Layouts that control header/footer, sizing, grids, and custom Slidev slots  
  - Components used across slides  
  - Global colors and typography aligned with your brand  
- **`uno.config.ts`** — All UnoCSS shortcuts used across slides (e.g., `step`, `card`, `section`).

---

## ▶️ Run locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start the local dev server

```
npx slidev
```

Slidev will start at `http://localhost:3030` with hot-reload.

### 3. Open presenter mode

Press P while viewing the deck to open the speaker notes window.

## 🚀 Deploy

Deployment is configured via GitHub Pages through the file `.github/workflows/deploy.yml`.

## 🧩 Notes on editing

- ayouts are applied through frontmatter in Slidev, e.g.:

```
---
layout: twocols
title: Possible futures
transition: fade
---
```

- Components such as <DTCard />, <DTCardGrid />, and <DTWizardNav /> live in theme/components.

## 💡 Useful resources

- [Slidev documentation](https://sli.dev)
- [Slidev themes](https://sli.dev/themes)
- [UnoCSS documentation](https://unocss.dev)
- [Deploying Slidev to GitHub Pages](https://sli.dev/guide/exporting#github-pages)
