# Decisions

One line per decision, newest last.

- 2026-09-23 — An address is `ecosystem/domain/name`, every segment lowercase kebab-case: a name becomes a folder, and case-insensitive file systems merge `deepEqual` and `deepequal`.
- 2026-09-23 — Only the full address is valid. A client completes the short form `string/truncate`.
- 2026-09-23 — An ecosystem is spelled the way its community writes it in a path (`js`, `rust`, `python`, `java`), never as a file extension.
- 2026-09-23 — Eight domains to start. Adding one is free; renaming or removing one breaks addresses already written.
- 2026-09-23 — `isAddress` answers yes or no. Splitting an address into parts waits for a consumer that needs the parts.
- 2026-09-23 — Biome caps a file at 150 lines and a function at 40, in the editor hook and in CI alike.
- 2026-09-23 — The root allowlist lives in `.claude/hook.mjs`; one check covers new files and new directories.
- 2026-09-23 — Copyright is held by "The Toopo contributors"; every commit is signed off under the DCO, checked by CI.
- 2026-09-23 — The name registry maps `domain/name` to one sentence naming the concept. A key carries no ecosystem: a name means one concept in all of them. The guard checks a key as the `js` address it completes to.
- 2026-09-23 — A concept sentence says what a function does, never how: units, edge cases and output format belong to each catalogue's case table.
- 2026-09-24 — Nothing leaves `domains` or `names`: a pull request step compares their keys on the base and on the merge, and refuses a removal. A rename is a removal. A concept sentence may still be reworded.
- 2026-09-24 — The ecosystem is data, `ecosystems` in `src/address.ts`, as the domains are. This repository exists so that a second ecosystem costs an edit a reader can find, and a literal buried in a template string is not one; `names.ts` was already ecosystem-free and `CLAUDE.md` already described the grammar as `ecosystem/domain/name`, so the code was the odd one out. It stays in `address.ts` rather than a file of its own: the grammar is its only consumer. No CI guard watches it for removal, unlike the domains and the names — the list holds one entry and dropping it reddens every test here. The guard arrives with the second ecosystem, when the list starts to grow.
- 2026-09-24 — `pnpm check` runs `biome ci --error-on-warnings` and CI pins Node 24, both as `js` does. Two repositories of one project running two policies, with no reason stated anywhere, is how a rule quietly stops being one.
- 2026-09-24 — The served record's type is `ServedRecord`, in `src/record.ts`: `js` recorded it would move here once a client read it, and `toopo add` is that client. One shape for the emitter that writes it and the client that reads it, so a renamed field fails `tsc` on both sides once each bumps its pin. A type and no validator: Node strips an `import type`, so the client imports it while running `spec`'s raw `.ts` from `node_modules` is still impossible, and the client checks at runtime the fields it uses, since the record comes over the network. `js` is optional: a type-only function emits `.ts` alone. `dependencies` is typed `[]`, what every record serves today; the shape of an entry is decided with the first function that imports another.
