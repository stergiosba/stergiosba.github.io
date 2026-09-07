# Stergios Bachoumas — Personal Website

Personal portfolio site built with [Docusaurus](https://docusaurus.io/) 3.x, a modern static site generator, and deployed to GitHub Pages.

Live site: <https://stergiosba.github.io>

## Tech stack

- Docusaurus 3.10 (classic preset, Infima CSS framework)
- React 19
- npm (Node 20 in CI)

## Project layout

```
.
├── docusaurus.config.js   # Site config: navbar, footer, plugins, deployment
├── sidebars.js            # Docs sidebar definition
├── src/
│   ├── css/custom.css     # Global CSS; fonts + Infima theme variables
│   ├── pages/             # Standalone pages (home, etc.)
│   └── components/        # React components
├── blog/                  # Blog posts (Markdown/MDX, frontmatter)
├── docs/                  # Documentation content
├── static/                # Static assets served verbatim (img/)
└── .github/workflows/     # CI/CD — deploys to GitHub Pages
```

## Local development

```bash
npm install        # install dependencies
npm start          # dev server with live reload (default http://localhost:3000)
```

## Build

```bash
npm run build      # generates static site into build/
npm run serve      # serve the built site locally to preview
```

`build/` is gitignored.

## Deployment (automated — no manual steps)

Deployment runs automatically via GitHub Actions (`.github/workflows/deploy.yml`)
on every push to `main`. The workflow runs `npm ci && npm run build` and publishes
the `build/` output to GitHub Pages.

To deploy: just push to `main`:

```bash
git add -A
git commit -m "..."
git push origin main
```

Watch progress (and check for failures) at:
https://github.com/stergiosba/stergiosba.github.io/actions

> **Note:** this is a GitHub **user site** (`stergiosba.github.io`). For Pages to
> serve it, `docusaurus.config.js` must keep `baseUrl: '/'` and
> `projectName: 'stergiosba.github.io'`. The `deploymentBranch: 'gh-pages'` field
> and the `npm run deploy` script are leftovers from the old `docusaurus deploy`
> flow and are no longer used — leave the workflow as the single source of deployment.

## Customizations applied (remember these)

- **Font:** `Antic Didone` (Google Fonts) is set as the base font via
  `@import` + `--ifm-font-family-base` in `src/css/custom.css`. It only ships the
  regular (400) weight, so bold text is font-synthesized.
- **Blog:** removed from the navbar (`docusaurus.config.js`). Posts still exist
  under `blog/` and are reachable by direct URL. Re-enable by re-adding the nav item:
  `{to: '/blog', label: 'Blog', position: 'left'}`.
- **Theme colors:** Infima primary color overrides in `src/css/custom.css`
  (green in light mode, teal in dark mode). Colors chose a lighter palette in dark mode for readability.
- **gitignore:** added — `node_modules/`, `.docusaurus/`, and `build/` are excluded
  (previously ~34k build files were tracked in git).

## Useful commands

```bash
npm start           # dev server
npm run build       # production build
npm run clear       # clear the .docusaurus cache
npm run serve       # preview the built site
npm run deploy      # legacy docusaurus deploy — not needed (CI deploys)
```