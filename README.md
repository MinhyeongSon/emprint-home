# Emprint Home

`emprint-home` is a Gatsby-based GitHub Pages site for the Emprint desktop app.

## What is included

- `Main` landing page with a warm, terminal-led Emprint identity
- `Document` page with onboarding and usage guidance
- GitHub Pages workflow via Actions
- Reused Emprint assets from `../emprint/apps/desktop/src/renderer/src/asset`

## Before publishing

Update the repository and release URLs in [`src/data/site.js`](/Users/mhson/workspace/emprint-home/src/data/site.js) or provide them as environment variables:

```bash
GATSBY_SITE_URL=https://minhyeongson.github.io/emprint-home
GATSBY_EMPRINT_REPO_URL=https://github.com/MinhyeongSon/emprint
GATSBY_EMPRINT_RELEASE_REPO_URL=https://github.com/MinhyeongSon/emprint-release
GATSBY_EMPRINT_RELEASE_BASE_URL=https://github.com/MinhyeongSon/emprint-release/releases/download/v0.2.8
GATSBY_ENABLE_RELEASE_LINKS=true
```

- `GATSBY_EMPRINT_REPO_URL` — source code (footer / GitHub links).
- `GATSBY_EMPRINT_RELEASE_REPO_URL` — installer releases (`emprint-release`). If `GATSBY_EMPRINT_RELEASE_BASE_URL` is omitted, downloads use `<release-repo>/releases/download/v<currentVersion>` (see `src/data/site.js`).
Release download buttons stay disabled until `GATSBY_ENABLE_RELEASE_LINKS=true` is set.

## Local development

```bash
npm install
npm run develop
```

## Build for GitHub Pages

```bash
npm run build
```

The production build uses `gatsby build --prefix-paths`, so the generated site works under `/emprint-home/`.
