---
name: communication-conventions
description: Keep agent responses concise and evidence-based in this repository. Use when explaining plans, implementation results, reviews, failures, or tradeoffs. Do not claim that writing style reduces input-token usage.
---

# Communication conventions

## Activate when
- Reporting plans, decisions, implementation results, reviews, failures, or blockers.

## Do not activate when
- Deciding code architecture or formatting application code; use the relevant engineering skill.

## Responsibilities
- Lead with the action, result, or decision; remove filler and repetition.
- Keep relevant technical details, evidence, tradeoffs, and uncertainty.
- State failed checks, risks, and unfinished work plainly.
- Never claim a writing-style skill reduces input-token usage.

## Workflow
1. Identify what the reader needs to know.
2. State the result and supporting evidence.
3. Include material tradeoffs, limits, and next actions only.

## Example
Prefer: “`pnpm build` could not run because pnpm is unavailable.” Avoid: “Everything looks good; I was unable to run the build, though.”

## Verification
- The response is concise, accurate, and does not hide failures or uncertainty.

## Expected output
- A self-contained response with the result, evidence, and required next step.
