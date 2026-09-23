import { domains } from './domains.ts'

// Lowercase only: a name becomes a folder, and Windows and macOS file systems ignore case.
const grammar = new RegExp(`^js/(?:${domains.join('|')})/[a-z][a-z0-9]*(?:-[a-z0-9]+)*$`)

export const isAddress = (text: string): boolean => grammar.test(text)
