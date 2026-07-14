# Ingrid Valdera — Portfolio

Static HTML/CSS/JS portfolio site. No build step, no framework — deploys to Vercel as a zero-config static site.

## Structure

- `index.html` — home
- `about.html` — about page
- `contact.html` — contact page
- `case-01.html` … `case-04.html` — case studies
- `site.css`, `case-study.css`, `tokens.css` — shared styles
- `*.js` — shared behavior (nav, theme toggle, hero)
- `assets/images/<project>/` — all case-study, home, and about images
- `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png` — favicon set
- `assets/og-image.png` — social share image

## Local development

Open `index.html` directly, or serve the folder with any static file server:

```
npx serve .
```

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. In Vercel: **New Project** → import the repo.
3. Framework preset: **Other** (static). No build command, no install command.
4. Output directory: repo root (`.`).
5. Deploy.

No environment variables, dependencies, or build step are required — this is plain HTML/CSS/JS.

## Notes

- Theme (light/dark) persists via `localStorage`.
- All internal links are relative; all images load from `assets/` in this repo (organized under `assets/images/<project>/`) — nothing depends on temporary hosted URLs. Filenames are lowercase and space-free for case-sensitive Linux/Vercel hosting.
- LinkedIn links open in a new tab via `target="_blank" rel="noopener"`.
