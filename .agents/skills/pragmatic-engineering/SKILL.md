---
name: pragmatic-engineering
description: Resolve implementation choices using DRY, KISS, and YAGNI together. Use when choosing abstractions, reuse, or scope. Do not justify speculative frameworks or broad refactors.
---

# Pragmatic engineering

## Activate when
- Deciding whether to reuse, abstract, generalize, or expand scope.

## Do not activate when
- A direct implementation is clear and no abstraction or scope tradeoff exists.

## Responsibilities
- **DRY:** centralize duplicated business rules; do not abstract coincidental similarity.
- **KISS:** choose the simplest readable implementation; minimize layers and prefer native APIs where suitable.
- **YAGNI:** implement stated needs only; avoid hypothetical extension points and speculative features.
- Resolve conflicts by correctness, then readability/maintainability, then justified reuse. Clarity wins over removing a few repeated lines.

## Workflow
1. Tie the change to an explicit requirement or maintenance problem.
2. Compare the direct solution with the proposed abstraction.
3. Keep abstractions only when they reduce real repetition or clarify a stable boundary.
4. Remove unrelated scope and explain material tradeoffs.

## Example
Similar markup in two cards does not require a generic renderer. A shared price-formatting rule likely belongs in one helper.

## Verification
- The solution meets a real requirement without speculative layers or dependencies.

## Expected output
- Brief rationale for the scope and abstractions kept or declined.
