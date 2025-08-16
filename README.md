# X Parts — Landing Page

A lightweight, bilingual (AR/EN), responsive landing page for **X Parts — قطع غيار السيارات**.

## Quick start (local)
```bash
# any static server works; or just open index.html
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy (free options)

### 1) GitHub Pages
1. Create a new repo named `x-parts-landing`.
2. Upload all files from this folder.
3. In **Settings → Pages**, set **Source** to **Deploy from a branch**, select `main` and `/ (root)`.
4. Your site will be at `https://<your-username>.github.io/x-parts-landing/`.

### 2) Netlify
- Drag-and-drop this folder to https://app.netlify.com/drop (no code changes needed).

### 3) Vercel
- `vercel deploy --prod` from this folder, or import the repo in the Vercel dashboard as a static project.

## Customize
- Edit colors and spacing in `styles.css` (`:root` variables).
- Replace `assets/hero-illustration.svg` and `assets/logo.svg` with your brand.
- Connect the search form in `script.js:onSearch()` to your backend later.

## SEO & Metadata
- Open Graph tags in `<head>` ready.
- Schema.org `SoftwareApplication` JSON-LD included.
