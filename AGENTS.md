# gf-codex Project Instructions

This repository is reserved for the specific coding project Dan wants to explore with Codex.

Global Codex preferences, Claude-to-Codex migration notes, and general workflow documentation live outside this repo:

- Global instructions: `~/.codex/AGENTS.md`
- Global memory: `~/.codex/memories/`
- Workflow reference repo: `~/code/codex-workflow`
- Custom skill source repo: `~/code/codex-skills`

## Project Documentation

Use this repo's `docs/` tree only for project-specific artifacts:

- `docs/codex/plans/` - Project implementation plans.
- `docs/codex/specs/` - Project specs and design notes.
- `docs/codex/session-state.md` - Current project handoff state.
- `docs/discovery/` - Project research, codebase analysis, and source notes.

Once Dan defines the project goal, update this file with the project's purpose, commands, architecture notes, and validation workflow.

## Project Purpose

Rebuild the Gurdjieff Foundation of Los Angeles website as a modern, calm, image-led content site. The first phase migrates the content from the existing simple LA website into a new Astro/Tailwind frontend inspired by the style and pacing of the Gurdjieff Foundation of New York site, without copying proprietary code or assets.

## Architecture

- Framework: Astro
- Styling: Tailwind CSS
- Hosting target: Cloudflare Pages
- Current content source: structured local data in `src/data/site.ts`
- CMS checkpoint: choose TinaCMS or Sanity after the first visual/content prototype is reviewed

The current local data structure should stay simple and portable so it can become either Tina-managed Markdown/JSON or Sanity document schemas later.

## Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build static site: `npm run build`
- Run Astro diagnostics: `npm run check`

## Validation Workflow

For frontend changes, run `npm run check` and `npm run build`. For design-sensitive changes, also review the site in browser across desktop and mobile widths before handoff.


<claude-mem-context>
# Memory Context

# [gf-codex] recent context, 2026-04-28 8:46pm PDT

Legend: 🎯session 🔴bugfix 🟣feature 🔄refactor ✅change 🔵discovery ⚖️decision
Format: ID TIME TYPE TITLE
Fetch details: get_observations([IDs]) | Search: mem-search skill

Stats: 29 obs (11,064t read) | 422,375t work | 97% savings

### Apr 28, 2026
161 2:47p 🔵 Codex vs Claude Code Config Structure Compared
163 " 🔵 Claude Code settings.json Full Config Inventoried
164 " 🔵 Codex config.toml — Minimal Config with Bundled Plugins Only
165 " 🔵 Skills Inventory — Claude Code Has 5 Custom, Codex Has 5 System-Only
169 3:13p 🔵 Claude Custom Skills Structure — firecrawl-cli, tavily-cli, playwright-cli, yt-search Confirmed
170 " 🔵 Codex System Skills Confirmed — skill-creator, plugin-creator, skill-installer, openai-docs, imagegen
171 " 🔵 claude-skills Repo Has 7 Unpushed Commits and Untracked Workflow Files
173 3:15p 🟣 Global Codex AGENTS.md Created — Full Workflow Preferences Ported from Claude Code
174 " 🟣 gf-codex Repo Initialized — Codex Workflow Config Repo Bootstrapped
175 " 🟣 codex-skills Repo Scaffolded and Five Claude Skills Copied In
176 3:44p 🔵 Codex Config Confirmed — gpt-5.5 with Medium Reasoning, No Auto-Compact Setting
177 4:20p ✅ Codex Workflow Reorganization Plan Created
178 " 🔵 gf-codex Repo Structure Confirmed Before Reorganization
181 " 🔵 Codex Workflow Setup Current State — Full Inventory
182 4:22p 🟣 codex-workflow Repo Created — Workflow Docs Separated from gf-codex
185 4:37p 🔵 Codex /reset Command — No VS Code Extension Docs Found
186 " ✅ gf-codex AGENTS.md Rewritten as Project-Placeholder File
188 " 🔵 Codex VS Code Extension — Registered Commands and New Thread Mechanism
189 4:45p ⚖️ Gurdjieff LA Website Rebuild — Project Scope and Approach Defined
191 5:04p ⚖️ Gurdjieff LA Website — CMS Stack Evaluation Criteria Expanded
194 5:10p 🔵 gf-codex Repo Has No Site Code Yet — Current Site Unreachable via curl
197 5:13p 🔵 gurdjiefflosangeles.org Live Site — Full Content and Structure Mapped via HTTP
198 " 🟣 gf-codex Astro Project Directory Structure Initialized
199 8:25p ⚖️ Gurdjieff LA Site Redesign — Copy-Faithful Constraint Established
200 8:26p 🔵 gf-codex Astro Site — Invented Copy Identified in index.astro
202 8:27p 🟣 gf-codex Astro Site — Authentic Copy Pass Complete Across All Components
205 8:28p 🟣 gf-codex Interior Pages — Invented Copy Purged, Images Added, Layout Upgraded
207 8:29p 🟣 gf-codex Authentic-Copy Pass — Build Passes Clean, All 7 Pages Generated
208 8:35p ✅ gf-codex StorySection Title Repetition Fixed — Build Clean

Access 422k tokens of past work via get_observations([IDs]) or mem-search skill.
</claude-mem-context>
