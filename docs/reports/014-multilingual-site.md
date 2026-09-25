# Feature report — 014 Multilingual site (English first)

- **Spec:** [specs/014-multilingual-site/spec.md](../../specs/014-multilingual-site/spec.md)
- **Branch / PR:** `feat/014-multilingual-site`
- **Date:** 2026-09-25
- **Evidence:** `artifacts/screenshots/014-multilingual-site/` (`i18n-home-en`, `i18n-product-en`,
  `i18n-bag-en`, plus the unchanged French CUJ shots)

## What shipped

The public site is available in English under `/en`, with French unchanged at its existing URLs.
Visitors switch with a FR / EN control in the header, the mobile menu and the footer. Fragrance
pages show translated family, mood, description and notes from the database; names, slugs and
prices are the same in both languages, with euros in each language's notation. Titles,
descriptions, `<html lang>`, Open Graph locale and hreflang alternates follow the language.
Stripe Checkout opens in the visitor's language and returns to the localized pages.

## Acceptance criteria

| AC   | Status | Evidence                                                                                                                                                   |
| ---- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AC-1 | Pass   | e2e `i18n.spec.ts` switches FR→EN on the home, EN→FR on the cart; `i18n-home-en.png`                                                                       |
| AC-2 | Pass   | e2e: `/fr/collection` → 308 → `/collection`; French CUJ-A/B/C specs pass unchanged                                                                         |
| AC-3 | Pass   | unit `localize.test.ts` + `data.test.ts`; `i18n-product-en.png` shows English notes/description                                                            |
| AC-4 | Pass   | e2e asserts `html[lang=en]` and both hreflang links; view-source shows `og:locale en_GB`                                                                   |
| AC-5 | Pass   | `€195.00` in `i18n-bag-en.png`; checkout POST carries `locale` → Stripe `locale` + localized URLs (manual Stripe test-mode run pending on production keys) |
| AC-6 | Pass   | e2e: `/de/collection` is 404                                                                                                                               |
| AC-7 | Pass   | `pnpm verify` green; `pnpm e2e` 8/8 (run with `PORT=3210`, see below)                                                                                      |

## Changes worth knowing

- **Next 16.2 → 16.3.6** for stable `next/root-params`; `pnpm typecheck` now runs `next typegen`
  first so a fresh clone can type-check the generated root-param types.
- **Two root layouts.** `src/app/[locale]/layout.tsx` (site) and `src/app/(admin)/layout.tsx`
  (admin, French) each own `<html>`; fonts are shared through `src/app/fonts.ts`.
- **Product translations live in data.** New `translations` jsonb column on `fragrances` and
  `collections`, seeded from `src/features/catalog/translations.ts` via
  `scripts/catalog-translations-sql.mjs`. Applied to the production project on 2026-09-25.
- **Family filter keys stay French** (`?famille=Floraux`) in every language; only the chip label
  is translated, so filtered URLs mean the same thing everywhere.
- **Playwright honours `PORT`.** Port 3000 was occupied by an unrelated local service and
  Playwright silently reused it, failing every test; `PORT=3210 pnpm e2e` sidesteps that.

## Addendum — Italian, Spanish, German (same PR)

Added on the owner's request the same day: three more dictionaries, product translations for
the six fragrances and the collection, a second generated migration (applied to production),
`formatEur` notations, and an e2e case per language (`i18n-home-de.png`). The switcher shows
FR / EN / IT / ES / DE. All non-French copy is AI-drafted and awaits the client's review.

## Not in this PR

- Admin editing of translations (the product form edits French only).
- A sitemap with both locales; browser-language auto-redirect.

## Follow-ups

- Client review of the English, Italian, Spanish and German copy (AI-drafted).
- Manual Stripe test-mode checkout from `/en/panier` once run against the live keys.
- Phase 2 spec: translations tab in the admin product form.
