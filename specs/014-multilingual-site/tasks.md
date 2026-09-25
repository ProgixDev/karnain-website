# Tasks 014 — Multilingual site (English first)

## Phase 0 — setup

- [ ] T0 Branch `feat/014-multilingual-site`; bump `next`/`eslint-config-next` to 16.3.x · done: `pnpm verify` green before any feature code

## Phase 1 — locale plumbing (AC-1, AC-2, AC-6)

- [ ] T1 `src/core/i18n`: `locales = ["fr","en"]`, `getLocale()` (root params, fallback fr), `getDictionary(locale)`, `localizeHref`, `I18nProvider`/`useI18n`, `en.ts` typed as `Dictionary` · done: `i18n.test.ts` green
- [ ] T2 Move `src/app/(site)` → `src/app/[locale]/(site)`; locale root layout with fonts/metadata/provider; admin root layout · done: build serves `/`, `/en`, `/admin/login`
- [ ] T3 `src/proxy.ts`: rewrite unprefixed → `/fr`, redirect `/fr/*` → `/*`, pass `/en/*`, skip admin/api/assets · done: curl checks
- [ ] T4 Server components use `getLocale()`; client components use `useI18n()`; all internal links go through `localizeHref` · done: no `getDictionary()` without a locale
- [ ] T5 `LocaleSwitcher` in header + mobile nav · done: switching keeps the path

## Phase 2 — localized content (AC-3, AC-4, AC-5)

- [ ] T6 Catalog: `translations` in types/seed/repo, selectors take `locale`, `familyLabel` · done: `data.test.ts` green
- [ ] T7 Migration `catalog_translations.sql`: add columns + seed EN for 6 fragrances + collection; apply to Supabase · done: `/en/parfums/tobacco` shows EN description from DB
- [ ] T8 Metadata: `<html lang>`, titles/descriptions from dictionary, OG locale, `alternates.languages` on every public page · done: view-source check
- [ ] T9 `formatEur(value, locale)`; checkout passes `locale` to Stripe + localized return URLs · done: unit test + manual test-mode checkout

## Phase 3 — verification

- [ ] T10 `e2e/i18n.spec.ts` (EN journey + redirects + 404) with shots; existing FR specs still green · done: `FEATURE=014-multilingual-site pnpm e2e:shots`
- [ ] T11 Inspect screenshots against ACs; `pnpm verify` green

## Phase 4 — ship

- [ ] T12 ADR 0007 locale routing; docs: overview, feature doc `docs/product/features/i18n.md`, CUJ table, specs index
- [ ] T13 Report `docs/reports/014-multilingual-site.md`; open PR

## AC coverage

- [ ] AC-1 → T1–T5, T10 · [ ] AC-2 → T3, T10 · [ ] AC-3 → T6, T7, T10 · [ ] AC-4 → T8 · [ ] AC-5 → T9 · [ ] AC-6 → T3, T10 · [ ] AC-7 → T11
