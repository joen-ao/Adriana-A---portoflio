# Adriana Acevedo — Portfolio

Bilingual (EN/ES) static portfolio for **Adriana Acevedo — UI/UX Designer & Front-End Web Specialist**.
Built per [`update.md`](update.md) (spec v1.0).

- **Stack:** [Astro](https://astro.build) (static output, zero JS by default) + Tailwind CSS.
- **Pages:** `/` (English) and `/es/` (Spanish). All content is in the served HTML — the site is fully readable with JavaScript disabled.
- **Hosting:** Netlify (`netlify.toml` included). Build command `npm run build`, publish `dist/`.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # runs scripts/generate-assets.mjs, then astro build → dist/
npm run preview    # serve the production build locally
```

`npm run assets` (re)generates the images and CV placeholders in `public/` via
[`scripts/generate-assets.mjs`](scripts/generate-assets.mjs) using `sharp`.

## Structure

```
src/
  i18n/           site.js (contact config) · ui.js (interface copy EN/ES) · projects.js (6 cases EN/ES)
  layouts/        BaseLayout.astro — head, meta, OpenGraph, JSON-LD, hreflang, fonts, scroll-reveal
  components/     Nav · Hero · Projects (+ ProjectCard) · Process · Services · Experience · Tools · Contact · Footer · Icon
  pages/          index.astro (EN) · es/index.astro (ES)
  assets/         hero.jpg · about.jpg (optimized at build via astro:assets)
public/           favicon, og-image, apple-touch-icon, robots.txt, sitemap.xml, /images/projects/*.webp, /cv/*.pdf
```

To edit text, change `src/i18n/*.js` — components read from there. Contact details (email,
WhatsApp, LinkedIn) live in one place: `src/i18n/site.js`.

## ⚠️ Before publishing

Placeholders were generated so links never 404. Replace them and resolve the open items:

- [ ] **Project screenshots** — `public/images/projects/*.webp` are generated mockups.
      Replace each with a real desktop + mobile screenshot (same WebP filename, ~1200×750).
      Regenerate the SVG mockups from `scripts/generate-assets.mjs` if you prefer.
- [ ] **CVs** — `public/cv/adriana-acevedo-cv-en.pdf` and `-es.pdf` are placeholders. Drop in the real PDFs (same names).
- [ ] **og-image** — `public/og-image.png` is generated from the hero photo. Regenerate if the photo/role changes.
- [ ] **LinkedIn URL** — confirm the real handle in `src/i18n/site.js` (currently `in/adriana-acevedo`).
- [ ] **Domain** — update `site` in `astro.config.mjs` and the URLs in `public/sitemap.xml` / `public/robots.txt` if a custom domain is used (spec open decision #6).
- [ ] **Client permission** (spec open decision #3) — confirm the proposal owners are OK appearing.
- [ ] **Estée Lauder naming** (spec open decision #4) — the Experience section names the client.
      If the Expandya contract disallows it, change the text in `src/i18n/ui.js` → `experience.items[0].note`
      to e.g. *"a global prestige beauty group"*.
- [ ] **Proposal placeholders** (spec open decision #2) — all six cards link out (per decision).
      Clean the placeholder content on the proposal sites before sharing widely.

Resolved decisions: email `acevedoadriana219@gmail.com` (#1) · WhatsApp included, +57 302 218 2841 (#5).
