---
name: solid-clean-code
description: Apply SOLID and clean-code principles pragmatically to React and TypeScript. Use when shaping responsibilities, interfaces, dependencies, or error paths. Do not introduce class hierarchies or layers for their own sake.
---

# SOLID and clean code

## Activate when
- Defining module boundaries, dependencies, public types, or error handling in a nontrivial change.

## Do not activate when
- A small local edit has no meaningful responsibility or dependency-design decision.

## Responsibilities
- **Single Responsibility:** keep modules cohesive around one reason to change.
- **Open/Closed:** extend behavior through composition or data where useful; avoid generic plugin systems for one feature.
- **Liskov Substitution:** preserve contracts when substitutable implementations exist.
- **Interface Segregation:** keep consumer-facing props and types focused.
- **Dependency Inversion:** use stable boundaries when a real dependency or test seam benefits from one.
- Use intent-revealing names, cohesive functions, explicit data flow, clear boundaries, and minimal side effects.
- Handle errors deliberately; use early returns where useful.
- Avoid misleading comments, dead code, broad TypeScript/ESLint suppressions, and unnecessary layers.
- Do not translate SOLID into Java-style class hierarchies in functional React code.

## Workflow
1. Identify module responsibilities and dependencies.
2. Find unclear names, implicit mutation, hidden effects, and broad interfaces.
3. Improve the smallest boundary that resolves the issue.
4. Check callers and errors; remove obsolete code and comments.

## Example
Prefer a focused `Car` type and formatter over `AbstractVehiclePresenter` classes.

## Verification
- Boundaries are cohesive, data flow is visible, and no suppression hides an error.

## Expected output
- Concise summary of boundary or clarity improvements and tradeoffs.
