// What the registry serves at an address: a catalogue's emitter writes it, the client reads it.
export type ServedRecord = {
  address: string
  version: string
  summary: string
  // A type-only function emits `.ts` alone.
  emissions: { ts: Emission; js?: Emission }
  // Empty until a function imports another; the shape of an entry is decided then.
  dependencies: []
}

// `path` from the registry's root; `sha256` of the served file, which the client verifies.
type Emission = { path: string; sha256: string }
