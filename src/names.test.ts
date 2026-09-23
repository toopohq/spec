import { expect, test } from 'vitest'
import { isAddress } from './address.ts'
import { names } from './names.ts'

// `isAddress` knows one ecosystem, `js`; a key is checked as the address it completes to.
test.each(Object.entries(names))('claims %s', (key, concept) => {
  expect(isAddress(`js/${key}`)).toBe(true)
  expect(concept).toMatch(/^[A-Z][^.!?]*\.$/)
})
