---
name: component-composition
description: Design or refactor React component boundaries, APIs, and reusable UI composition. Use when a component grows, behavior is shared, or ownership is unclear. Do not extract one-off JSX only because it repeats once.
---

# Component composition

## Activate when
- Refactoring a large component, sharing meaningful UI behavior, or designing a reusable component API.

## Do not activate when
- A small local component has clear responsibilities and no useful reuse boundary.

## Responsibilities
- Prefer composition, explicit props, and `children` over inheritance or broad configuration objects.
- Keep presentational components focused on rendering and feature components coordinating feature behavior.
- Keep trivial local behavior nearby. Extract hooks for reusable or nontrivial behavior, not indirection alone.
- Give state one clear owner. Prefer local state; avoid unnecessary global state and prop drilling.
- Use controlled APIs when the parent owns value/state and uncontrolled APIs when the component should own it. Support both only for a real consumer need.
- Use compound components only when coordinated pieces form a clear repeated API.
- Separate domain logic from presentation when that clarifies responsibility or enables reuse/testing.
- Do not create a component merely because JSX repeats once.

## Workflow
1. Identify responsibilities, consumers, state, and data flow.
2. Find the smallest cohesive boundary that improves clarity or reuse.
3. Define explicit props and ownership before extraction.
4. Update consumers without speculative extension points.
5. Review the component tree and verify behavior with available checks.

## Examples
Good: `<CarCard car={car} onFavoriteChange={toggleFavorite} />`.
Bad: `<UniversalCard config={{ type, mode, actions, renderers, state }} />` hides meaning in an unbounded configuration object.

## Verification
- Components have clear responsibilities and state owners; APIs express intent.

## Expected output
- Resulting component boundaries and API, with behavior and verification changes noted.
