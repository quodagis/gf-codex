# Codex Workflow Migration Plan

## Goal

Create a Codex-native environment that preserves Dan's effective Claude Code conventions while using Codex's own instruction, skill, plugin, memory, browser, and Git workflows.

## Conventions

- Global instructions: `~/.codex/AGENTS.md`
- Project instructions: `<repo>/AGENTS.md`
- Codex memory: `~/.codex/memories/`
- Repo-local session handoff: `docs/codex/session-state.md`
- Coding workflow artifacts: `docs/codex/plans/` and `docs/codex/specs/`
- Discovery/research artifacts: `docs/discovery/`
- Custom skill source repo: `~/code/codex-skills`
- Installed custom skills: `~/.codex/skills/<skill-name>/`

## Migration Steps

1. Port global Claude preferences into `~/.codex/AGENTS.md`.
2. Establish this repo as the Codex workflow configuration/control repo.
3. Initialize Git for this repo and commit baseline workflow files.
4. Create `~/code/codex-skills` as the source-of-truth repo for custom Codex skills.
5. Copy high-priority Claude skills into the Codex skill repo and update tool paths from `~/.claude/skills` to `~/.codex/skills`.
6. Install copied skills into `~/.codex/skills`.
7. Verify each CLI-backed skill has its external command available and document missing dependencies.
8. Decide how to handle sound notifications in Codex, likely through external app/shell hooks if Codex does not expose equivalent hook settings.

## Skill Priority

Highest priority:

- `firecrawl-cli` for JS-rendered scraping, crawling, mapping, search, and structured extraction.
- `tavily-cli` for higher-quality search, deep research, extraction, and crawling.
- `playwright-cli` for browser automation and screenshots when Codex's browser-use plugin is not enough or when deterministic scripts are preferable.

Next:

- `yt-search` for YouTube source discovery.
- `notebooklm` for NotebookLM automation and artifact workflows.

## Notes

Codex already provides built-in web access, local command execution, plugins for browser/document/spreadsheet/presentation workflows, and support for skills. The external CLI-backed skills remain useful when they add coverage, repeatability, richer extraction, or access to authenticated/specialized tools.
