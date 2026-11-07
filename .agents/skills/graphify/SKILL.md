---
name: graphify
description: Navigate code relationships for nontrivial changes and reviews. Use Graphify only when an existing CLI, skill, or MCP integration is available; otherwise inspect targeted files and verify relationships in source. Do not use for trivial edits or require Graphify.
---

# Codebase navigation

## Activate when
- A change crosses modules, has unclear callers/dependencies, or needs impact analysis.

## Do not activate when
- The change is local and affected files are obvious, or direct inspection is sufficient.

## Responsibilities
- Detect an existing Graphify CLI, skill, or MCP integration before use.
- Do not install or execute external tooling without explicit approval.
- Never invent graph findings. Verify findings against source; refresh stale data when supported.
- Keep code knowledge graphs distinct from architecture diagrams.
- Without Graphify, use targeted search (such as `rg` or `find`) and inspect imports, exports, callers, and types.

## Workflow
1. Check available project tools and graph freshness metadata.
2. Query a current graph for dependencies, imports, and callers when available and useful.
3. Confirm relevant nodes and edges against source.
4. Otherwise search for the symbol and inspect its definition and call sites.
5. Summarize the verified impact set before broad edits.

## Example
- Graph exists: query callers of `useCatalog`, then confirm imports in source.
- No graph: search for `useCatalog`; do not imply a graph was used.

## Verification
- Every reported relationship has graph output or a source location; no tooling was installed without approval.

## Expected output
- A concise list of affected modules and verified dependencies, plus the method used.
