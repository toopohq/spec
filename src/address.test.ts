import { expect, test } from 'vitest'
import { ecosystems, isAddress } from './address.ts'
import { domains } from './domains.ts'

const accepted = {
  'a plain name': 'js/string/truncate',
  'a kebab-case name': 'js/object/deep-equal',
  'a digit after the first character': 'js/string/base64-encode',
  'the last domain': 'js/type/deep-partial',
}

const refused = {
  'the empty string': '',
  'the short form, which the client completes': 'string/truncate',
  'an ecosystem the registry does not serve': 'ts/string/truncate',
  'an unknown domain': 'js/strings/truncate',
  'no name': 'js/string',
  'an empty name': 'js/string/',
  'a fourth segment': 'js/string/truncate/extra',
  'an uppercase letter, which case-insensitive file systems merge': 'js/string/Truncate',
  'camelCase, for the same reason': 'js/object/deepEqual',
  'a leading digit': 'js/string/2d-rotate',
  'a leading hyphen': 'js/string/-truncate',
  'a trailing hyphen': 'js/string/truncate-',
  'a double hyphen': 'js/object/deep--equal',
  'an underscore': 'js/string/snake_case',
  'a leading slash': '/js/string/truncate',
  'surrounding whitespace': ' js/string/truncate',
  'a trailing newline': 'js/string/truncate\n',
}

test.each(Object.entries(accepted))('accepts %s', (_, text) => {
  expect(isAddress(text)).toBe(true)
})

// The grammar is built from these lists, so an entry is checked where the segment rule is spelled
// out: the name.
test.each([...ecosystems, ...domains])('%s is a lowercase kebab-case segment', (segment) => {
  expect(isAddress(`js/string/${segment}`)).toBe(true)
})

test.each(Object.entries(refused))('refuses %s', (_, text) => {
  expect(isAddress(text)).toBe(false)
})
