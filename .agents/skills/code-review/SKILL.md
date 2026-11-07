---
name: code-review
description: Review a diff or pull request for concrete frontend defects. Use when asked to review code. Do not turn a review into subjective redesign or implementation unless requested.
---

# Code review

## Activate when
- Reviewing a diff, pull request, or proposed implementation.

## Do not activate when
- Implementing a change without a review request; use implementation skills.

## Responsibilities
Prioritize: (1) correctness and requirement coverage, (2) regressions, (3) accessibility, (4) state/lifecycle, (5) type safety, (6) maintainability, (7) security, (8) performance, (9) test gaps, (10) complexity.

Report actionable findings with severity (`critical`, `high`, `medium`, `low`), file/location, actual issue, impact, and smallest practical correction. Verify findings against source/callers. Do not present hypotheses as facts. Avoid subjective nitpicks.

## Workflow
1. Inspect the complete diff and requirements.
2. Trace affected code/callers; use `graphify` only when appropriate.
3. Check behavior, accessibility, state/lifecycle, types, security, and tests in priority order.
4. Verify each candidate finding in source; discard unsubstantiated concerns.
5. Report findings first, ordered by severity; state if none were found.

## Example
“High — `src/features/catalog/CarCard.tsx`: the favorite control is a clickable `div` without keyboard behavior. Use a button with a stateful accessible name.”

## Verification
- Findings are reproducible from the diff/source and include location, impact, and correction.

## Expected output
- Severity-ordered findings and a short verification/gap note; or an explicit no-findings statement.
