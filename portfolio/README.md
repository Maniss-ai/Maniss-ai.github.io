# Manish Soni — Portfolio

A responsive portfolio with selected engineering work, an experience timeline, project detail dialogs, a downloadable resume, and direct email, LinkedIn and GitHub links.

## Run locally

Requires Node.js 22.13 or newer and pnpm (the version is pinned in package.json).

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by the development server.

## Update your content

| What to change | File |
| --- | --- |
| Contact email and social links | `lib/portfolio.ts` → `profile` |
| Experience, dates and highlights | `lib/portfolio.ts` → `experience` |
| Project summaries and details | `lib/portfolio.ts` → `projects` |
| Skills | `lib/portfolio.ts` → `skills` |
| Introduction, current company and About text | `app/page.tsx` |
| Project visuals and their metrics | `ProjectVisual` in `app/page.tsx` |
| Colors, spacing, typography and responsive layouts | `app/globals.css` |
| Page title and description | `app/layout.tsx` |
| Resume | Replace `public/Manish-Soni-Resume.pdf` |
| Photo and illustration | Replace the corresponding files in `public/` |

To add a role or project, add an entry to the corresponding array. For a new project visual, add a matching `kind` in `ProjectVisual`; ensure its metrics match the project. The first experience is marked current. Employment dates and achievements follow the supplied resume.

## Build a static website

```sh
pnpm build
```

The ready-to-host website is in `dist/client/`. It contains HTML, CSS, JavaScript and image assets. The resume download appears only if `/Manish-Soni-Resume.pdf` exists and is served as a PDF. The original resume PDF is included with your approval. Serve it from the root of a domain. No database, API keys or paid backend is required.

```sh
python3 -m http.server 8080 --directory dist/client
```

Open http://localhost:8080 for a local production preview.

## Free hosting: GitHub Pages

The GitHub handoff uses the existing `Maniss-ai/Maniss-ai.github.io` repository, on the `portfolio-2026` branch. The complete source is in `portfolio/`; the ready-to-host output is in `docs/`. The old master branch is preserved.

After reviewing the portfolio:

1. Open the repository on GitHub and choose **Settings → Pages**.
2. Under **Build and deployment**, set **Source → Deploy from a branch**.
3. Select **portfolio-2026**, then **/docs**, and click **Save**.
4. Wait for GitHub's Pages deployment to finish. Use the URL shown on that page to share the site.
5. Add that URL to your LinkedIn contact information, GitHub profile and resume.

GitHub Pages supports public repositories on GitHub Free. This account's user-site repository publishes at the domain root, which matches the site's asset paths.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

### Publish later edits

From the cloned repository's `portfolio-2026` branch:

```sh
cd portfolio
pnpm install --frozen-lockfile
pnpm build
node scripts/export-pages.mjs ../docs
cd ..
git add portfolio docs
git commit -m "Update portfolio"
git push origin portfolio-2026
```

GitHub Pages republishes when its configured branch changes. Keep the `.nojekyll` file in the output. The export script replaces only the named output directory, so run it with the documented `../docs` target.

## Contact behavior

**Email me** opens the visitor's email application with the recipient filled in. **Copy email** uses the browser clipboard on HTTPS and shows instructions if the browser denies access. These actions do not pretend to send a message. LinkedIn and GitHub open the verified profiles in a new tab.

## Motion and accessibility

Native scrolling, passive scroll listeners, one animation frame per scroll update, transform/opacity transitions, one-time section reveals, keyboard-accessible dialogs, focus outlines and a skip link. Reduced-motion preferences disable decorative motion. The desktop scroll companion stays out of the phone layout. Content remains visible if JavaScript has not loaded.

## Verification

- TypeScript check passed.
- Desktop rendering and project dialog interaction checked in a browser.
- Responsive layouts inspected at 320px, 390px and 768px iframe widths; horizontal overflow fixed and rechecked.
- Mobile project dialog and Escape dismissal checked.
- Supplied images loaded; email fallback, social destinations and resume path checked.
- Actual device frame rates and email delivery are not measured by these checks.

See `CREDITS.md` for assets.


## Public asset privacy

The original portrait photograph and resume PDF are included with your explicit approval for public GitHub publication. The About section displays the original portrait; the hero keeps the generated illustration.
