import { expect, test } from 'vitest'
import { isAddress } from './address.ts'
import { names } from './names.ts'

// A key is checked as the `js` address it completes to; the ecosystem in front changes nothing.
test.each(Object.entries(names))('claims %s', (key, concept) => {
  expect(isAddress(`js/${key}`)).toBe(true)
  expect(concept).toMatch(/^[A-Z][^.!?]*\.$/)
})
