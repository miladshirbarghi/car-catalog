---
name: documentation-and-delivery
description: Keep assignment-sized project docs and Git delivery reviewable. Use when changing setup/architecture, documenting assumptions, or preparing commits. Do not fabricate history or push automatically.
---

# Documentation and delivery

## Activate when
- Project setup or architecture changes, docs are needed, or a change is ready to hand off.

## Do not activate when
- A small isolated code edit has no documentation or delivery impact.

## Responsibilities
- Keep `README.md` concise and useful for running and understanding the project.
- Record meaningful assumptions/tradeoffs in `DECISIONS.md` in direct, natural language.
- Document incomplete requirements honestly; do not invent history, measurements, or results.
- Suggest small, coherent Conventional Commits; do not push automatically.
- Keep documentation proportional to the assignment.

## Workflow
1. Inspect existing documentation and project state.
2. Document actual stack, commands, assumptions, and meaningful decisions.
3. Compare the diff with the task; exclude unrelated files.
4. Suggest incremental commit boundaries and report uncommitted work accurately.

## Example
Separate `docs: add repository agent guidance` from `docs: add local engineering skills` when independently reviewable.

## Verification
- Commands match `package.json`; docs match repository state; no results/history are fabricated.

## Expected output
- Changed docs, suggested commit sequence, and unresolved assumptions or incomplete work.
