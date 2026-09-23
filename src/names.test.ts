import { expect, test } from 'vitest'
import { isAddress } from './address.ts'
import { names } from './names.ts'

// Every ecosystem shares the domain and name grammar, so `js` stands in for all of them.
test.each(Object.entries(names))('claims %s', (key, concept) => {
  expect(isAddress(`js/${key}`)).toBe(true)
  expect(concept.trim()).not.toBe('')
})
