# lucasbianco.com

Lucas Bianco's personal site. Astro + MDX, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Run it locally
```
npm install
npm run dev      # http://localhost:4330
```

## Add things
- **A project:** make `src/content/projects/<name>/index.mdx` (copy an existing one) and put its photos in the same folder.
- **A note (blog post):** add `src/content/notes/<name>.mdx`.
- **Replace a placeholder photo:** save your real photo over the placeholder file with the same name.
- **Timeline / gallery / certifications:** edit `src/data/timeline.ts`, `src/data/gallery.ts`, `src/data/certs.ts`.

All styles: `src/styles/global.css` (shared) and `src/styles/pages/<page>.css` (one per page).
