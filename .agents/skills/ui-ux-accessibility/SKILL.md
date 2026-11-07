---
name: ui-ux-accessibility
description: Build or review responsive, accessible UI for this Persian RTL catalog. Use for layout, controls, forms, dialogs, and loading/empty/error views. Do not add ARIA where native semantics suffice.
---

# UI, responsive design, and accessibility

## Activate when
- Creating or changing user-facing markup, styles, controls, navigation, or interaction states.

## Do not activate when
- Changing internal data logic with no visible behavior or accessible output impact.

## Responsibilities
- Design mobile-first and check narrow and wide layouts.
- Preserve Persian content, RTL direction, IRANSansX typography, and MUI theme conventions.
- Prefer semantic HTML, native controls, correct labels/names, logical keyboard order, and visible focus.
- Do not use color alone for state. Provide meaningful loading announcements and empty, error, and no-results messages.
- Use responsive grids and predictable navigation. Make dialogs keyboard accessible if used.
- Give car imagery meaningful alt text and a graceful fallback.
- Format prices/numbers with `Intl` and an explicit locale/currency decision.
- Respect `prefers-reduced-motion` for nonessential motion.
- Avoid redundant or conflicting ARIA.

## Workflow
1. Identify the user task and visible states.
2. Choose semantic elements and accessible names first.
3. Apply mobile-first layout and existing theme conventions.
4. Check keyboard operation, focus, state communication, RTL, and image fallbacks.
5. Confirm responsiveness with available tooling; do not claim unperformed visual checks.

## Example
Use a labeled search input and a real favorite button with a stateful accessible name, not an unlabeled clickable `div`.

## Verification
- Controls are keyboard operable and named; RTL/mobile states are coherent; motion and images degrade gracefully.

## Expected output
- User-visible changes and accessibility/responsive checks actually performed.
