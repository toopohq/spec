// What the registry serves at an address: a catalogue's emitter writes it, the client reads it.
export type ServedRecord = {
  address: string
  version: string
  summary: string
  // What the delivered file exports: the client prints the line importing them.
  exports: string[]
  // A type-only function emits `.ts` alone.
  emissions: { ts: Emission; js?: Emission }
  // Empty until a function imports another; a client refuses a record where it is not.
  dependencies: []
}

// `path` from the registry's root; `sha256` in lowercase hex over the served file's bytes, which
// the client verifies.
type Emission = { path: string; sha256: string }
