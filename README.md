# spec

The shared vocabulary of the Toopo catalogues: how an address is written, and which domains it may
name. Nothing here runs in your project; the catalogues and the client are checked against it.

An address is `ecosystem/domain/name`, for example `js/string/truncate`. Every segment is lowercase
kebab-case. The grammar is [`src/address.ts`](src/address.ts), the domains are
[`src/domains.ts`](src/domains.ts), and [`src/address.test.ts`](src/address.test.ts) names every
case it accepts or refuses.
