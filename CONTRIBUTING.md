# Contributing

Every catalogue depends on what this repository says, so it changes rarely and on purpose.

- **A new domain** is welcome when a function fits none of the existing ones. Open an issue first,
  naming the function.
- **A new name** is claimed with one line in `src/names.ts`: `domain/name` and one sentence that
  pins the concept down closely enough for every ecosystem to implement the same thing.
- **Renaming or removing a domain or a name** is not accepted: it breaks addresses already written
  into other projects.

## Before a pull request

```sh
pnpm install
pnpm check
```

- The title follows [Conventional Commits](https://www.conventionalcommits.org), for example
  `feat(domains): add url`. It becomes the commit on `main`.
- Every commit is signed off (`git commit -s`), certifying the
  [Developer Certificate of Origin](https://developercertificate.org).
- No assistant attribution in the title, the body or any commit.

CI refuses a pull request that breaks any of these.
