---
name: production-readiness
description: Assess frontend delivery using the project's real quality checks. Use before delivery or for build, performance, security, accessibility, and dependency hygiene. Do not add infrastructure without a concrete need.
---

# Production readiness

## Activate when
- Preparing a meaningful change for delivery or reviewing quality and operational concerns.

## Do not activate when
- Making a tiny isolated change with no delivery implications; use a narrower skill.

## Responsibilities
- Use existing typecheck, lint, format, test, and build commands; report missing checks.
- Keep bundles and dependencies small; optimize images and prevent layout shifts where relevant.
- Avoid expensive render work and unjustified lazy loading.
- Never expose secrets in client code or insert unsafe HTML.
- Handle errors deliberately, remove debug code, and keep configuration understandable.
- Do not weaken security/lint rules just to pass checks.
- Never claim a perfect Lighthouse score without measurement.

## Workflow
1. Inspect scripts, configuration, and changed files.
2. Run available checks in the `AGENTS.md` order.
3. Inspect relevant bundle, image, error, security, accessibility, and dependency concerns.
4. Separate actual failures from checks that could not run.
5. Report readiness with evidence and remaining work.

## Example
If no format-check script exists, report that; do not claim formatting was checked based on appearance.

## Verification
- Every reported check has an observed result; no unsupported performance claims are made.

## Expected output
- Readiness summary with check results, risks, and remaining work.
