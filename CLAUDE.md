# spec

The shared vocabulary of the Toopo catalogues: the address grammar, the domain list and the name
registry. The catalogues and the client are checked against it; it depends on none of them.

## Structure

- `src/address.ts` — `isAddress`: `ecosystem/domain/name`, every segment lowercase kebab-case.
- `src/domains.ts` — the domains an address may name.
- `src/address.test.ts` — the named case table. Each case says why it is accepted or refused.
- `src/names.ts` — the name registry: `domain/name`, ecosystem-free, to the one concept it means.
- `src/names.test.ts` — the guard: every key is a valid address once an ecosystem precedes it.
- `.claude/hook.mjs` — refuses a root entry outside its allowlist and a `CLAUDE.md` past 150 lines;
  formats and lints every file written.
- `DECISIONS.md` — one line per decision. Read it before changing the grammar.

## Commands

- `pnpm install`
- `pnpm check` — Biome, `tsc`, Vitest, knip. CI runs the same, plus the pull request checks.

## Non-negotiables

- Zero runtime dependencies.
- Lowercase addresses: a name becomes a folder, and Windows and macOS file systems ignore case.
- A domain is never renamed or removed. Adding one is free.
- A source file is at most 150 lines, a function at most 40. Biome enforces both.
- A pull request title is a Conventional Commit, every commit is signed off (DCO), and no title,
  body or commit carries assistant attribution. CI refuses otherwise.
- `main` takes squash merges of green pull requests, nothing else.
