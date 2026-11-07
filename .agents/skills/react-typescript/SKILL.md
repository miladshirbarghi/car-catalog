---
name: react-typescript
description: Implement or review React and TypeScript behavior using installed versions and repository conventions. Use for components, hooks, types, state, and effects. Do not impose another React version or speculative patterns.
---

# React and TypeScript

## Activate when
- Adding or changing React components, hooks, state, domain types, or TypeScript modules.

## Do not activate when
- Editing documentation or styles without changing React behavior or types.

## Responsibilities
- Preserve installed React/TypeScript versions, JSX conventions, and React Compiler setup.
- Avoid `any`; prefer `unknown` with narrowing for unknown input.
- Model domain data explicitly; separate data contracts from presentation when useful.
- Use discriminated unions for meaningful mutually exclusive UI states; use readonly types where helpful.
- Derive values instead of synchronizing duplicate state.
- Use effects only to synchronize with external systems; respect hook rules.
- Never mutate React state; use stable data-based list keys.
- Avoid unnecessary `useMemo`, `useCallback`, and `memo`; consider the configured React Compiler.
- Avoid unstable derived state and effect chains.

## Workflow
1. Inspect nearby code, versions, TypeScript settings, lint rules, and compiler configuration.
2. Define domain and UI state shapes.
3. Implement explicit data flow and minimal state; keep effects at external boundaries.
4. Review keys, typing, dependencies, and consumer impact.
5. Run available typecheck, lint, and build commands; report blockers.

## Example
Prefer a `loading | success | error` discriminated union over unrelated booleans that allow contradictory states.

## Verification
- Types narrow correctly, state is immutable, hooks obey React rules, and effects synchronize externally.

## Expected output
- Changed components/types and actual checks run, including failures or blockers.
