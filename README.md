# Mobile Counter Web App

A clean, smartphone-first counter app that works as a static site and is ready for GitHub Pages.

## Features

- Counter displayed in the center of the screen
- `+` button to increment
- `Reset` button to clear the count
- Counter value persisted in `localStorage`
- Responsive modern design optimized for mobile
- Includes `manifest.webmanifest` for installable PWA metadata

## Files

- `index.html` – app structure and UI
- `styles.css` – responsive design and layout
- `app.js` – counter logic and persistence
- `manifest.webmanifest` – web app manifest metadata

## Run locally

Open `index.html` directly in your browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (or your default branch), folder `/ (root)`
4. Save and wait for deployment.

Your app will be live at:

`https://<your-username>.github.io/<your-repo-name>/`
