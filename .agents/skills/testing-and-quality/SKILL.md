---
name: testing-and-quality
description: Plan, add, or run meaningful automated checks for user behavior. Use when changing important catalog interactions or assessing test coverage. Inspect tooling first; do not install dependencies without approval.
---

# Testing and quality

## Activate when
- Adding/changing user-visible behavior, selecting test tooling, or reporting verification.

## Do not activate when
- A documentation-only edit has no executable behavior to verify.

## Responsibilities
- Inspect scripts, installed test packages, and conventions before choosing tools.
- Prefer behavior tests over implementation details.
- For catalog features, cover render, search/no matches, filters, favorite toggle/favorites-only, details, loading/error, and important keyboard use as applicable.
- Use lightweight tooling such as Vitest and React Testing Library only if none exists and installation is approved.
- Avoid snapshot-only tests, unnecessary mocks, and arbitrary coverage targets.
- Never claim a check passed unless it ran; give exact blockers.

## Workflow
1. Inspect test config, scripts, package manager, and dependencies.
2. Choose the smallest meaningful behavior test set.
3. Test accessible roles/names and visible outcomes where possible.
4. Run existing targeted checks and report command, result, and gaps.

## Example
Assert that a model query shows matching cars and an unmatched query shows a no-results state; avoid asserting private hook details.

## Verification
- Tests cover user behavior and actually run; limitations are explicit.

## Expected output
- Scenarios, test command/results, and meaningful uncovered behavior.
