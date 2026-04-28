# Codex vs Claude Workflow Notes

## Direct Mappings

- Claude global `CLAUDE.md` maps to Codex global `~/.codex/AGENTS.md`.
- Claude project `CLAUDE.md` maps to Codex project `AGENTS.md`.
- Claude skills map closely to Codex skills: each skill is a folder with a required `SKILL.md` and optional scripts, references, assets, or mode files.
- CLI-backed Claude skills can usually be ported by copying the skill folder, updating paths, and verifying external dependencies.
- Claude's `docs/superpowers/` convention maps to `docs/codex/` for Codex workflow artifacts.
- `docs/discovery/` remains tool-neutral and should continue to store research and analysis.

## Differences To Respect

- Codex has native plugins available in this environment for browser use, documents, spreadsheets, and presentations.
- Codex subagents are best used when Dan explicitly asks for delegation, parallel agents, or subagent-driven work.
- Codex automatic compaction exists, but public OpenAI material describes it as happening when `auto_compact_limit` is exceeded without publishing a stable numeric threshold. Manual session-state saves around 50% context usage remain a good practice.
- Claude sound hooks/status line settings do not directly map to the observed Codex `config.toml`; notification sounds may require a Codex-supported hook mechanism if available, or external app/shell automation.

## External CLI Tool Guidance

Use built-in Codex web/search first for ordinary source discovery. Use CLI-backed skills when the specialized tool adds meaningful capability:

- Firecrawl: JS-rendered pages, crawling, mapping, proxy/anti-bot handling, structured extraction.
- Tavily: AI-oriented search, deep research, clean extraction, site crawling.
- Playwright: deterministic browser automation, screenshots, PDFs, local web-app testing, scripted interactions.
- yt-dlp/YouTube search: video source discovery and metadata extraction.
- NotebookLM CLI: notebook creation, source loading, artifact generation, and downloads.
