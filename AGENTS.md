# AGENTS.md — Guidance for AI coding agents

Context for agents working in this repo. Read this before editing.

## What this is

A personal portfolio site, Docusaurus 3.x + React 19. This is the USER's personal
site — treat every change as user-facing and public.

## Environments & commands

- Package manager: **npm** (Node 20 in CI). Never use yarn.
- Dev server: `npm start` (port 3000).
- Build: `npm run build` (outputs to `build/`).
- Verification: after any significant change, run `npm run build` and confirm it
  succeeds. Fix failures before finishing.
- Do NOT commit, push, or rewrite history unless the user explicitly asks.
  Exception documented below: deploying is done by pushing `main`.

## Deployment model (read before touching config)

- Deployment is **fully automated** via GitHub Actions (`.github/workflows/deploy.yml`).
  Pushing to `main` triggers build + publish to GitHub Pages.
- User site `stergiosba.github.io` — **do not change** `baseUrl` (must be `'/'`) or
  `projectName` (`'stergiosba.github.io'`) in `docusaurus.config.js`.
- The legacy `deploy` npm script and `deploymentBranch: 'gh-pages'` are leftover
  from the old `docusaurus deploy` flow. The old `gh-pages` branch still exists but
  is NOT used for serving. Keep the workflow as the single deployment path.
- When the user says "deploy": `npm run build` to verify locally, then push `main`.
  Confirm the run turns green via the GitHub API before declaring success.

## Git hygiene

- Added a `.gitignore` covering `node_modules/`, `.docusaurus/`, `build/`.
  These directories should NEVER be tracked. If you see them in `git status` as
  newly-added or tracked, that's a regression.
- `git status` may show a large historical diff from when build artifacts were
  untracked; that's expected. Don't re-add build/generated dirs.

## Fonts & theming (customizations to respect)

- Base font: **Antic Didone** (Google Fonts), set in `src/css/custom.css` via
  `@import` and `--ifm-font-family-base`. It is a single 400-weight display serif —
  bold is synthesized by the browser. If asked about a font change, preserve this
  mechanism (edit the `@import` + `--ifm-font-family-base` variables).
- Theme colors: Infima overrides in `src/css/custom.css` — green primary in light
  mode, teal in dark mode. Dark mode uses a lighter accent for contrast.

## Structure

- Navbar + footer: `docusaurus.config.js` → `themeConfig.navbar.items`.
- Global CSS: `src/css/custom.css`.
- Blog posts: `blog/*.mdx` (MDX with frontmatter).
- Docs: `docs/` with `sidebars.js`.
- The Blog nav item is currently removed from the navbar (hidden); posts remain
  reachable by URL. Re-enable by adding `{to: '/blog', label: 'Blog', position: 'left'}`.
- Inline blog authors trigger a Docusaurus warning (prefers `authors.yml`). The
  existing inline `2026-08-03-problem-rl.mdx` author warning is a known, harmless
  build warning — do not treat it as a failure.

## Style

- Match existing conventions: single-quoted strings, no trailing semicolons in
  JS config, 2-space indent. Edit only what the task needs — no drive-by refactors.