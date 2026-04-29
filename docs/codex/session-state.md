# Session State

Last updated: 2026-04-28

## Current State

This repo is now the prototype project for rebuilding the Gurdjieff Foundation of Los Angeles website.

Dan chose a frontend-first architecture using Astro + Tailwind, with Cloudflare Pages as the likely host. The CMS decision is intentionally deferred until after the first visual/content prototype, with TinaCMS and Sanity still under consideration.

## Project Status

Initial Astro/Tailwind scaffold is in place. The old LA site content has been migrated into structured local data in `src/data/site.ts`, and first-pass pages exist for:

- Home
- G.I. Gurdjieff
- The Foundation in Los Angeles
- Practice
- Resources
- Links
- Contact

Architecture notes are in `docs/codex/specs/frontend-architecture.md`.

Validation completed:

- `npm run build`
- `npm run check`

Latest content decision: visible site copy should come from the old LA site only. The prototype was revised to remove invented hero blurbs, summary card descriptions, footer descriptive copy, and adapted page headings.

GitHub status:

- Repo: `https://github.com/quodagis/gf-codex`
- GitHub Pages: `https://quodagis.github.io/gf-codex/`
- Pages deploy is workflow-based via `.github/workflows/deploy-pages.yml`.
- Current branch: `master`.

## In Progress: Classic Alternate Design

Dan provided a Claude mockup URL and asked for an alternate version of the site that keeps the same old-site copy but uses the mockup's classical style. He specifically likes the home page title/header "A way of inner search."

Mockup style notes:

- Warm paper background: approximately `#f6f2ea`.
- Centered masthead: "The Gurdjieff Foundation" / "of Los Angeles".
- Letter-spaced uppercase nav with thin active underline.
- Thin horizontal rules, generous whitespace, narrow reading column.
- Serif-led typography using Cormorant Garamond / Source Serif-like pairing.
- Home page hero title: "A way of inner search."
- Meta text/eyebrows in small uppercase Inter-like sans.
- Wide archival-style image placeholder block on home page.
- Drop cap on the first prose paragraph.
- Enneagram line figure between prose sections.
- Footer with foundation name, "A branch established 1959", phone/email, and city lineage text.

Files already added for this WIP:

- `src/styles/classic.css`
- `src/layouts/ClassicLayout.astro`
- `src/components/classic/ClassicHeader.astro`
- `src/components/classic/ClassicFooter.astro`
- `src/components/classic/Enneagram.astro`

Important: no `/classic/` pages have been created yet, and the current site pages have not yet been wired to the alternate design. Existing published pages should be unaffected by this partial scaffold.

## Next Steps

1. Create `/classic/` page routes for home, biography, foundation, practice, resources, links, and contact using `ClassicLayout`.
2. Reuse existing content from `src/data/site.ts`; allow the classic home title "A way of inner search." per Dan's instruction.
3. Add a comparison link from the current header to `/classic/`, and keep the Classic header's "Current" link back to `/`.
4. Run `npm run check`, `npm run build`, and `GITHUB_PAGES=true npm run build`.
5. Capture screenshots for `/classic/` and at least one interior page.
6. Commit and push when the alternate design is usable.
