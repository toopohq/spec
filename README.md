# spec

The shared vocabulary of the Toopo catalogues: how an address is written, which domains it may
name, and which names are claimed. Nothing here runs in your project; the catalogues and the client
are checked against it.

An address is `ecosystem/domain/name`, for example `js/string/truncate`. Every segment is lowercase
kebab-case. The grammar is [`src/address.ts`](src/address.ts), the domains are
[`src/domains.ts`](src/domains.ts), and [`src/address.test.ts`](src/address.test.ts) names every
case it accepts or refuses.

A name means one concept in every ecosystem. [`src/names.ts`](src/names.ts) claims each one, from
`domain/name` to one sentence, and a catalogue publishes only the names claimed there.

What the registry serves at an address is typed in [`src/record.ts`](src/record.ts). A catalogue
writes it and the client reads it.
