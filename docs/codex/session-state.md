# Session State

Last updated: 2026-04-28 11:02 PM PDT

## Current State

This repo is the Astro/Tailwind prototype for rebuilding the Gurdjieff Foundation of Los Angeles website.

The site is deployed from `master` to GitHub Pages via `.github/workflows/deploy-pages.yml`:

- Repo: `https://github.com/quodagis/gf-codex`
- Live prototype: `https://quodagis.github.io/gf-codex/`
- Alternate classic design: `https://quodagis.github.io/gf-codex/classic/`

Latest pushed commit:

- `9a1e84a Align main site headings with classic copy`

Local worktree note:

- `AGENTS.md` has an unrelated memory-context timestamp/list update.
- `.vscode/` is untracked.
- Do not include either in site commits unless Dan asks.

## Architecture

- Framework: Astro
- Styling: Tailwind CSS plus `src/styles/classic.css` for the alternate design
- Hosting target: currently GitHub Pages for prototype; Cloudflare Pages still likely for production
- Content source: structured local data in `src/data/site.ts`
- CMS decision: deferred until after visual/content prototype review; TinaCMS and Sanity remain candidates

Important content constraint: visible site copy should come from the old LA site only, except where Dan explicitly approved wording tweaks such as the classic home title `A way of inner search.`

## Implemented Pages

Main site:

- `/`
- `/gurdjieff/`
- `/foundation/`
- `/practice/`
- `/resources/`
- `/links/`
- `/contact/`

Classic alternate:

- `/classic/`
- `/classic/gurdjieff/`
- `/classic/foundation/`
- `/classic/practice/`
- `/classic/resources/`
- `/classic/links/`
- `/classic/contact/`

## Recent Decisions And Changes

Classic design:

- Built as a parallel alternate under `/classic/`, not replacing the main site.
- Warm paper background, centered masthead, serif typography, narrow reading columns, thin rules, archival grayscale image treatment.
- Classic home uses Dan-approved title: `A way of inner search.`
- Classic mobile nav is collapsed under a quiet native `Menu` toggle.
- Removed cross-links: main site no longer has `Classic`; classic site no longer has `Current`.

Copy alignment:

- Main `/foundation/` heading now matches classic: `Gurdjieff Work in LA`.
- Main `/links/` heading now matches classic: `Gurdjieff Foundations in North America`.
- Main site nav/footer label changed from `Program` to `Our Practice`.
- `/practice/` browser title changed to `The Gurdjieff Foundation of Los Angeles - Our Practice`; visible page heading still uses the old LA page title/copy: `Groups, Movements, Practical Activities`.

Image and graphic fixes:

- Classic Enneagram SVG corrected to standard geometry: outer circle, triangle `9-3-6`, and hexad `1-4-2-8-5-7-1`.
- Classic links page image changed from wide banner crop to a portrait frame so Gurdjieff's face/figure are not cut off.
- Resources video investigation found the same Vimeo video on GFNYC and California pages, but Vimeo embed privacy blocks playback outside approved domains.

## Video Investigation

GFNYC About page:

- Page: `https://www.gfnyc.org/about-us`
- Film section title: `Gurdjieff in America`
- Underlying Vimeo ID: `941428545`
- GFNYC uses Embedly wrapping `https://player.vimeo.com/video/941428545`.

California About page:

- Page: `https://www.gurdjieff-foundation-california.org/about`
- Same Vimeo ID: `941428545`
- Squarespace embed URL: `https://player.vimeo.com/video/941428545?badge=0&autopause=0&player_id=0&app_id=58479`

Test result:

- Direct Vimeo player and GFNYC Embedly wrapper both show: `Sorry. Because of its privacy settings, this video cannot be played here.`
- No video embed was shipped.

Options:

1. Ask the Vimeo owner to allow `quodagis.github.io` and the final production domain.
2. Get an unrestricted Vimeo/YouTube URL.
3. Add a styled external link to GFNYC or California instead of embedding.

## Validation

Recent validation completed successfully:

- `npm run check`
- `GITHUB_PAGES=true npm run build`
- GitHub Pages deploys completed successfully after each pushed change.
- Browser/screenshot spot checks were done for classic home, classic links, classic resources, main resources, and mobile classic nav.

One transient local build issue occurred:

- Vite cache rename error under `node_modules/.vite`.
- Resolved by deleting `node_modules/.vite` and rerunning `GITHUB_PAGES=true npm run build`.

## Useful Commands

- Install dependencies: `npm install`
- Dev server: `npm run dev`
- Astro diagnostics: `npm run check`
- Production/static build: `npm run build`
- GitHub Pages build parity: `GITHUB_PAGES=true npm run build`
- Recent deploy status: `gh run list --workflow deploy-pages.yml --limit 3`

## Next Steps

1. Review the main and classic designs side by side and decide which visual direction to refine.
2. If classic direction is favored, consider whether to make it the primary route or continue refining under `/classic/`.
3. Decide how to handle the `Gurdjieff in America` video: request Vimeo domain approval, use an unrestricted source, or add an external link.
4. Once visual direction stabilizes, revisit the CMS checkpoint: TinaCMS vs Sanity.
5. Before the next commit, keep unrelated `AGENTS.md` and `.vscode/` changes out unless intentionally requested.
