# Frontend Architecture

## Direction

Build the first version as a code-owned Astro site with Tailwind CSS, deployed on Cloudflare Pages. The visual language should be calm, spacious, image-led, and editorial, using the New York Foundation site as aesthetic reference without copying its code or proprietary assets.

## Phase 1 Scope

- Establish reusable Astro components for header, footer, hero sections, interior pages, story sections, resource lists, link directories, and contact blocks.
- Migrate the current Los Angeles site content into structured local data.
- Keep content shape intentionally close to future CMS schemas.
- Defer the TinaCMS vs Sanity choice until after the prototype content model is visible.

## CMS Checkpoint

The current content in `src/data/site.ts` should be treated as a temporary adapter. At the CMS checkpoint:

- TinaCMS path: convert page/resource/link/contact data into Markdown/JSON collections stored in Git.
- Sanity path: convert the same structures into Sanity document schemas and fetch with GROQ.

Decision variables:

- Choose TinaCMS for maximum repo-owned content and easiest future migration.
- Choose Sanity for a stronger admin/editorial experience, richer media handling, and structured content growth.

## Hosting

Cloudflare Pages is the target host. The project should remain static-first and avoid platform-specific runtime features unless a later feature clearly needs them.

## Validation

- `npm run build`
- Browser review of desktop and mobile breakpoints.
- Later: add visual screenshots for design checkpoints.
