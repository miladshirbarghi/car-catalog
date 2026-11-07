# Car Catalog

A Persian, RTL, mobile-first catalog for cars sold through installments. The repository currently contains the Vite/React starter and an app placeholder; catalog features are not implemented yet.

## Stack

- React 19, TypeScript 6, and Vite 8
- MUI 9 with Emotion and the React Compiler
- Persian IRANSansX fonts and RTL theme setup
- pnpm lockfile

## Development

Install dependencies with pnpm, then run:

```sh
pnpm dev
pnpm lint
pnpm build
```

`build` runs TypeScript project checks and the Vite production build. No test or format-check script is configured yet.

## Agent guidance

Read [AGENTS.md](AGENTS.md) for repository-wide conventions and quality gates. Focused skills are in `.agents/skills/`. See [DECISIONS.md](DECISIONS.md) for project assumptions and scope.
