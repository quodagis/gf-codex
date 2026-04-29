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

## Next Steps

1. Review the local visual prototype in browser.
2. Refine typography, imagery, spacing, and page rhythm against the New York reference aesthetic.
3. Decide whether the editable content model should move to TinaCMS or Sanity.
4. Add Cloudflare Pages deployment configuration once the prototype direction is approved.
