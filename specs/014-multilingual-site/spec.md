# Spec 014 — Multilingual site (English first)

- **Status:** active
- **Type:** feature
- **Requested by / owner:** Karnain (client, via Ilyes) / Achraf Arabi
- **Date:** 2026-09-25
- **Slice / areas touched:** `src/core/i18n`, `src/app/[locale]` (public routes move under a
  locale segment), `src/proxy.ts` (new), `src/features/catalog` (localized content),
  `src/features/cart` (localized chrome), `src/app/api/checkout`, `supabase/migrations`,
  `src/components/layout` (language switcher)

## Problem (the why)

The site is French only. The client sells to visitors outside France and asked (25 Sept 2026)
for the site “aussi en anglais (et si possible, italien, espagnol, allemand)”. Today a non-French
visitor cannot read the fragrance descriptions, the bag, or the order confirmation. The i18n
scaffold was built for this (“French only at launch, i18n-ready”) but was never exercised with a
second locale.

## Desired behavior (the what)

A visitor can read the whole public site in English: navigation, homepage, collection, fragrance
pages (mood, description, notes, scent family), the bag and cart page, the order confirmation, and
the Stripe checkout page. French stays the default and keeps its current URLs, so nothing already
indexed or shared breaks. English lives under its own URL prefix so a page can be shared in a
given language. A language switcher in the header (and in the mobile menu) swaps the current
page to the other language. Search engines are told which URL is which language. Prices stay in
euros in every language. The back office stays French. Adding Italian, Spanish and German later
must be additive: a dictionary and a set of product translations, no structural change.

## Acceptance criteria

- **AC-1:** Given a visitor on any public page in French, when they choose “EN” in the switcher,
  then the same page renders in English under the `/en` prefix (home, collection, fragrance, cart,
  maison, order confirmation), and choosing “FR” brings them back to the unprefixed French URL.
- **AC-2:** Every French URL that exists today still serves French at the same path, and
  `/fr/...` redirects permanently to the unprefixed path (no duplicate French URLs).
- **AC-3:** On `/en/parfums/<slug>` the fragrance name is unchanged but the scent family, mood,
  description and the head/heart/base notes are in English, sourced from the catalog data (not
  hardcoded in components). A fragrance with no English translation falls back to French rather
  than rendering empty.
- **AC-4:** The `<html lang>`, page titles, descriptions and Open Graph locale follow the
  language, and each public page declares its alternate-language URLs (hreflang) for both
  languages.
- **AC-5:** Prices display as euros in both languages using the locale's number convention
  (`195,00 €` in French, `€195.00` in English); the Stripe checkout page opens in the visitor's
  language and returns to the localized thank-you and cart pages.
- **AC-6:** Unknown prefixes (e.g. `/de/collection`) do not render an English or French page by
  accident: they are treated as ordinary French paths and 404 as before.
- **AC-7:** `pnpm verify` green; existing CUJ-A/B/C e2e pass unchanged in French; a new e2e
  covers the English journey (AC-1, AC-3, AC-5) with screenshots.

## Out of scope

- Italian, Spanish and German content (structure supports them; delivered after the client
  validates the English).
- Editing product translations from the admin (phase 2; translations are seeded by migration).
- Translating admin screens, the shop notification email, or product names/slugs (brand names
  and URLs stay the same in every language).
- Automatic language detection from the browser (no redirect on first visit; the visitor picks).
- Currency conversion.

## CUJ impact

- Extends CUJ-A (Discover the house): “switch to English and keep reading”. Extends CUJ-B: the
  bag and checkout are readable in English. Registered at ship in
  `docs/product/critical-user-journeys.md`.

## Open questions

Resolved with the owner on 2026-09-25 (assumptions stated, owner said “start”):

- URL scheme: French unprefixed, English under `/en`. Chosen to keep every indexed URL stable.
- Translations are AI-drafted and reviewed by the client before the Italian/Spanish/German round.
