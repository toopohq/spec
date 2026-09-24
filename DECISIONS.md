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
