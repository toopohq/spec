import { domains } from './domains.ts'

// Adding an ecosystem is free. Renaming or removing one breaks every address already written with
// it. No guard watches this list: it holds one entry, and dropping it reddens every test here.
export const ecosystems = ['js']

// Lowercase only: a name becomes a folder, and Windows and macOS file systems ignore case.
const grammar = new RegExp(
  `^(?:${ecosystems.join('|')})/(?:${domains.join('|')})/[a-z][a-z0-9]*(?:-[a-z0-9]+)*$`,
)

export const isAddress = (text: string): boolean => grammar.test(text)
