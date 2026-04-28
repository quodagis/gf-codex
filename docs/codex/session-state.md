# Session State

Last updated: 2026-04-28

## Current State

Dan is migrating Claude Code workflow conventions into a Codex-native setup.

Completed so far:

- Created global Codex instructions at `~/.codex/AGENTS.md`.
- Created Codex workflow memory at `~/.codex/memories/dan-workflow.md`.
- Replaced this repo's `AGENTS.md` with Codex-specific project instructions.
- Established project documentation folders:
  - `docs/codex/plans/`
  - `docs/codex/specs/`
  - `docs/discovery/`
- Added a starter `.gitignore`.
- Initialized this repo as Git and committed baseline workflow files.
- Created `~/code/codex-skills` as a Git repo and committed the first custom Codex skills port.
- Installed custom Codex skills under `~/.codex/skills`.
- Installed Playwright runtime dependencies in `~/.codex/skills/playwright-cli/scripts`.
- Verified `gh` is authenticated as `quodagis` with private repo-capable scopes.

## Key Decisions

- Codex persistent cross-project memory should use the default Codex memory location: `~/.codex/memories/`.
- Long-running repo-local handoff state should use `docs/codex/session-state.md`.
- Claude's `docs/superpowers/` convention should become `docs/codex/` for Codex workflows.
- `docs/discovery/` remains the place for research, architecture analysis, source briefings, and external discovery.
- Custom Codex skills should have a source-of-truth repo at `~/code/codex-skills`, with installed runtime copies under `~/.codex/skills`.
- For substantial coding projects, Dan prefers a master-session/subagent workflow: the main high-caliber session handles research, planning, architecture, and integration, while lower-level worker subagents execute bounded implementation and verification tasks in separate contexts.

## Ported Skills

Ported into `~/code/codex-skills/skills` and installed under `~/.codex/skills`:

  - `firecrawl-cli`
  - `tavily-cli`
  - `playwright-cli`
  - `yt-search`
  - `notebooklm`

Verified local CLI availability:

- `firecrawl` 1.12.2
- `tvly` 0.1.0
- `node` v25.9.0 and `npm` 11.12.1
- `uv` 0.11.2
- `yt-dlp` 2026.03.17
- `notebooklm` 0.3.4

## Open Items

- Decide which notification/sound behavior can be handled directly by Codex versus external shell/editor automation.
- Configure GitHub remotes when Dan chooses repo names and destinations.
- Optionally test each custom skill on a real task and refine the mode instructions for Codex.
- Refine Codex workflow docs with a concrete multi-agent planning/execution pattern.

## Next Steps

1. Choose whether to create private GitHub remotes for `gf-codex` and `codex-skills`.
2. Test the highest-priority skills (`firecrawl-cli`, `tavily-cli`, `playwright-cli`) on real tasks.
3. Decide whether Codex notification sounds should be handled through native hooks if available or through an external wrapper.
