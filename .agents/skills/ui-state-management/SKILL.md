---
name: ui-state-management
description: Model catalog data, async states, search, filters, sorting, favorites, URL state, or local persistence. Use when adding/reviewing interactive catalog behavior. Do not add a state library for simple local state.
---

# UI state management

## Activate when
- Implementing loading/success/error behavior or search, filters, favorites, sorting, URL state, or persistence.

## Do not activate when
- A presentational change does not alter data or interaction state.

## Responsibilities
- Keep the source of truth explicit; derive filtered and sorted cars from data and controls.
- Do not store redundant dataset copies or derive state through effect chains.
- Keep mock data deterministic; separate data access from presentation when useful.
- Represent loading, success/empty, and error deliberately; offer retry when supported by the data flow.
- Make favorites, search, filters, and sort explicit. Persist only preferences that benefit from persistence.
- Keep URL state optional; encode useful shareable state and handle invalid values safely.
- Use `localStorage` only at browser-safe synchronization boundaries and validate parsed data.
- Avoid global state unless coordination warrants it. Zustand is installed, but its presence alone is not justification.
- Keep mock-driven UI testable without a backend.

## Workflow
1. List source data, user-controlled state, derived values, and persistence.
2. Choose one source of truth for each value and model async states.
3. Derive results predictably without mutation or duplicate result state.
4. Validate URL/storage input and distinguish empty, no-match, and error states.
5. Verify transitions and keyboard interactions with available tooling.

## Example
Compute visible cars from cars + query + filter + favorites-only + sort; do not synchronize a `visibleCars` state in an effect.

## Verification
- One source of truth per value; invalid persistence is safe; UI states are distinguishable.

## Expected output
- Brief state model, changed behaviors, and transitions actually verified.
