# 0007 — Route locales by URL prefix, French unprefixed

- **Status:** Accepted
- **Date:** 2026-09-25
- **Deciders:** Achraf Arabi (dev), Karnain (client request via Ilyes)

## Context

The site launched French-only on an i18n scaffold (ADR 0001, spec 001). The client asked for
English, then Italian, Spanish and German (spec 014). Every public page is statically generated
and revalidated, and French URLs are already indexed and shared. Whatever carries the locale must
keep those URLs, keep pages static (no per-request cookies or headers), reach deeply nested server
components without prop drilling, and make each additional language purely additive.

## Decision

Public routes live under `src/app/[locale]/(site)`. French is the default and stays unprefixed:
`src/proxy.ts` rewrites bare paths to `/fr/...` internally and redirects `/fr/...` to the bare
path; other locales are served under their prefix (`/en/...`). Server components read the locale
through `next/root-params` (`getLocale()` in `src/core/i18n/server.ts`); client components get
the active dictionary from `I18nProvider`. Product copy is localized in data: a `translations`
jsonb column on `fragrances` and `collections` holds per-locale overrides merged over the French
row on read, with field-by-field fallback to French. Routes are prefixed, never translated.

## Alternatives considered

| Option                                        | Why not                                                                                        |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Locale in a cookie, same URLs                 | Pages become dynamic (cookie read), one URL cannot be shared in a given language, no hreflang. |
| `[locale]` prefix for every language incl. fr | Breaks every indexed French URL or needs a permanent redirect of the whole site.               |
| Accept-Language auto-redirect on first visit  | Surprises returning visitors and crawlers; can be added later as a soft banner if wanted.      |
| Translated route slugs (`/en/perfumes/...`)   | Doubles the routing surface for marginal SEO gain on a six-product catalog.                    |
| Per-locale columns (`description_en`, …)      | One migration per language per field; jsonb keeps new languages schema-free.                   |
| next-intl or similar                          | The dictionary layer already exists; a dependency would add its own routing conventions.       |

## Consequences

- Positive: existing URLs untouched; pages stay static per locale; adding a language is a
  dictionary + a translations object + one line in `locales.ts`.
- Negative / accepted trade-offs: two root layouts (locale tree and admin) share fonts via
  `src/app/fonts.ts`; `next/root-params` requires Next ≥ 16.3 (bumped); the collection filter
  keeps the French family name as its URL key in every language.
- Follow-ups required: admin editing of translations (spec 014 phase 2); a sitemap listing
  both locales when SEO work starts; Italian/Spanish/German after the client validates English.
