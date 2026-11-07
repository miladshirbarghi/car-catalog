# Car Catalog

A Persian, RTL, mobile-first catalog for cars sold through installments. The repository currently contains the Vite/React starter and an app placeholder; catalog features are not implemented yet.

## Stack

- React 19, TypeScript 6, and Vite 8
- MUI 9 with Emotion and the React Compiler
- Persian IRANSansX fonts and RTL theme setup
- pnpm lockfile

## Development

Install dependencies with `just install` (or `pnpm install`). Run `just` to list
the available recipes. The recipes wrap the matching pnpm scripts:

```sh
just dev
just lint
just test
just check
just build
```

`check` runs TypeScript, ESLint, Prettier, Vitest, and the production Vite build in sequence. Git runs ESLint and Prettier on staged files before commits, then runs `pnpm check` before pushes. Node 26.13.0 is pinned in `.nvmrc`; pnpm 10.24.0 is pinned in `package.json`.

## Agent guidance

Read [AGENTS.md](AGENTS.md) for repository-wide conventions and quality gates. Focused skills are in `.agents/skills/`. See [DECISIONS.md](DECISIONS.md) for project assumptions and scope.
