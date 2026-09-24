import { expect, test } from 'vitest'
import { ecosystems, isAddress } from './address.ts'
import { names } from './names.ts'

// A key carries no ecosystem, so it completes to an address under every one of them.
test.each(Object.entries(names))('claims %s', (key, concept) => {
  for (const ecosystem of ecosystems) expect(isAddress(`${ecosystem}/${key}`)).toBe(true)
  expect(concept).toMatch(/^[A-Z][^.!?]*\.$/)
})
