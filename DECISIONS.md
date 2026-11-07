# Decisions

## Keep the starter stack

The repository already has React, TypeScript, Vite, MUI with Emotion, RTL theme setup, and IRANSansX fonts. Keep those conventions while implementing the catalog; there is no reason to replace the initialized app or add another UI stack.

## Keep catalog architecture proportional

The assignment is a small client-side catalog with deterministic mock data. Start with focused feature modules and derived UI state. Add a global store, persistence, URL synchronization, or extra abstraction only when a concrete requirement makes it useful.

## Keep engineering guidance local and focused

No project `AGENTS.md` or skills were present. Caveman and Graphify were not found in the inspected local skill/CLI locations, so this repository uses its own concise communication conventions and a Graphify-optional navigation workflow. The latter falls back to source inspection and does not claim graph results.

## Record existing tooling gaps without expanding this phase

The TypeScript configs do not set `strict: true`. `.prettierrc` names `@trivago/prettier-plugin-sort-imports`, but neither Prettier nor that plugin is declared in `package.json` or the lockfile; there is also no format-check script. This phase documents those facts and does not install packages or change compiler/formatter configuration.

## Current implementation status

The application is still a placeholder screen. The catalog behavior, mock cars, search, filters, favorites, details, loading/error states, responsive catalog UI, and tests have not been implemented as part of this engineering-guidance phase.
