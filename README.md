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
GATSBY_SITE_URL=https://<your-account>.github.io/emprint-home
GATSBY_EMPRINT_REPO_URL=https://github.com/<your-account>/emprint
GATSBY_EMPRINT_RELEASE_BASE_URL=https://github.com/<your-account>/emprint/releases/download/v0.1.0
```

If `GATSBY_EMPRINT_RELEASE_BASE_URL` is omitted, it falls back to `<repo>/releases/download/v0.1.0`.

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
