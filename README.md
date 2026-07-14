# Ingrid Valdera — Portfolio

Static HTML/CSS/JS portfolio site. No build step, no framework — deploys to Vercel as a zero-config static site.

## Structure

- `index.html` — home
- `about.html` — about page
- `contact.html` — contact page
- `case-01.html` … `case-04.html` — case studies
- `site.css`, `case-study.css`, `tokens.css` — shared styles
- `*.js` — shared behavior (nav, theme toggle, hero)
- `uploads/`, `assets/` — images
- `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png` — favicon set
- `assets/og-image.png` — social share image

## Local development

```
npm run dev
```

Serves the folder at `http://localhost:3000` via `npx serve`.

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. In Vercel: **New Project** → import the repo.
3. Framework preset: **Other** (static). Leave build command empty / `package.json`'s `build` script is a no-op.
4. Output directory: repo root (`.`).
5. Deploy.

No environment variables or dependencies are required.

## Notes

- Theme (light/dark) persists via `localStorage`.
- All internal links are relative; all images load from `uploads/`/`assets/` in this repo — nothing depends on temporary hosted URLs.
- LinkedIn links open in a new tab via `target="_blank" rel="noopener"`.
