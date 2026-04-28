# gf-codex Project Instructions

This repository is for configuring and refining Dan's Codex workflow, including migration notes from Claude Code, Codex conventions, custom skill planning, and agent-workflow documentation.

## Project Purpose

Use this repo to develop, document, and test Dan's Codex operating model:

- Global and project-level Codex instruction conventions.
- Custom Codex skills and plugin planning.
- Coding workflow plans, specs, and validation patterns.
- Research notes comparing Codex, Claude Code, CLI tools, browser automation, and related agent infrastructure.

## Documentation Layout

- `docs/codex/plans/` - Codex workflow and implementation plans.
- `docs/codex/specs/` - Specs for custom skills, plugins, or workflow conventions.
- `docs/codex/session-state.md` - Current long-running session handoff state.
- `docs/discovery/` - Research, architecture notes, product comparisons, and tool evaluations.

## Working Conventions

This repo may contain documentation, configuration examples, scripts, and small tooling. Do not assume every task here is an application build.

When making durable workflow decisions, update the relevant docs. When a session reaches a natural milestone or Dan is likely to reset context, update `docs/codex/session-state.md`.

Use `~/code/codex-skills` as the source-of-truth repository for reusable custom Codex skills. This repo can reference those skills, but should not duplicate their full source unless there is a deliberate reason.
