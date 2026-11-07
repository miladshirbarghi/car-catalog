# Repository agent guide

## Context

Persian, RTL, mobile-first installment-car catalog. The current app is a Vite React + TypeScript starter with only a placeholder screen; catalog requirements remain future work. Preserve existing work and keep this assignment small.

## Technology and architecture

- Preserve React 19, TypeScript, Vite, MUI/Emotion, the React Compiler, IRANSansX, and current RTL setup.
- Follow the compiler options that exist; `strict: true` is not currently set, so do not describe the project as strict-mode checked.
- Prefer a small feature-oriented structure only as features are added. Keep dependencies flowing simply; no service/repository layers, global state, or new dependencies without a concrete need and user approval.
- No backend, authentication, database, or infrastructure is in scope.
- Do not implement speculative features or the entire app during a task scoped to engineering guidance.

## Skill discovery and selection

- Local skills live in `.agents/skills/<name>/SKILL.md`. Read the focused skill when its description matches the task; combine only skills that add distinct guidance.
- For a component refactor, start with `component-composition`; add `react-typescript` for hook/type/state changes and `ui-ux-accessibility` for user-facing behavior.
- For interactive catalog state, use `ui-state-management` and `react-typescript`; add `ui-ux-accessibility` and `testing-and-quality` when relevant.
- For a pull request affecting search and filters, use `code-review`, `ui-state-management`, and `react-typescript`; add accessibility/testing skills if the diff touches those concerns.
- Use `graphify` only for cross-module impact analysis; it documents an optional tool and has a source-inspection fallback.
- Use `pragmatic-engineering` or `solid-clean-code` only when an actual abstraction/boundary decision benefits from them. `communication-conventions` applies to reports, not code.

## Quality gate

Git hooks enforce the quality gates:

- Pre-commit runs `lint-staged`: ESLint with zero warnings and Prettier on staged JS/TS, plus Prettier on staged supported text files.
- Pre-push runs `pnpm check`, which stops on the first failure and runs TypeScript (`pnpm exec tsc -b --pretty false`), `pnpm lint`, `pnpm format:check`, `pnpm test`, and the Vite production build.
- Run `pnpm check` before delivery. `pnpm build` remains available for a standalone production build and includes TypeScript project checks.

Run checks relevant to the change. Report exact commands, results, and blockers. Never claim unrun checks passed.

## Definition of Done

- Requirements and existing conventions are respected; no unrelated source/config changes.
- Types, states, accessible behavior, and error/empty paths are handled where applicable.
- Relevant available quality checks run and results are reported honestly.
- README/DECISIONS stay concise and accurate when project setup or decisions change.
- Diff is reviewable; propose small Conventional Commits and never push automatically.

## Dependency and scope policy

- Inspect existing packages/scripts first. Do not install packages, run remote scripts, or modify global agent settings without explicit approval.
- Prefer native APIs and installed tooling. Avoid speculative abstractions, infrastructure, or quality metrics.
- Preserve user changes, including pre-existing unstaged changes and deletions.
