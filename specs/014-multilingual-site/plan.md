# Plan 014 — Multilingual site (English first)

- **Spec:** [spec.md](spec.md) (all open questions resolved: yes)
- **Author:** Claude (agent) with Achraf Arabi · **Date:** 2026-09-25

## Approach

Move the public route tree under a dynamic root segment `src/app/[locale]/(site)/…` and read the
locale anywhere on the server with `next/root-params` (stable since Next 16.3, so the plan starts
with a Next bump). A `proxy.ts` keeps French unprefixed: paths without a known locale prefix are
rewritten internally to `/fr/…`, `/fr/…` redirects to the bare path, `/en/…` is served as is, and
`/admin`, `/api` and assets are untouched. Server components call `getLocale()` + `getDictionary(locale)`;
client components get `{ locale, dict }` from an `I18nProvider` mounted in the locale layout, so
only the active dictionary ships to the browser. Product content is localized in data, not code:
a `translations jsonb` column on `fragrances` and `collections` holds per-locale overrides, the
repo merges them over the French row, and the seed mirrors that. Key trade-off: the file move is
noisy in the diff, but it is the only shape that keeps pages static (no cookies/headers) and lets
later locales be purely additive. ADR: `docs/architecture/decisions/0007-locale-routing.md`.

## Placement (per `docs/architecture/module-boundaries.md`)

| What               | Where                                                | Notes                                                                  |
| ------------------ | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| Locale root layout | `src/app/[locale]/layout.tsx`                        | html/body/fonts/metadata + `I18nProvider`; replaces root               |
| Admin root layout  | `src/app/(admin)/layout.tsx`                         | becomes its own root layout (html/body, `lang="fr"`)                   |
| Public pages       | `src/app/[locale]/(site)/…`                          | moved verbatim, then localized                                         |
| Locale routing     | `src/proxy.ts`                                       | rewrite/redirect only; no cookies                                      |
| Locale primitives  | `src/core/i18n/`                                     | `locales`, `getLocale`, `getDictionary`, `localizeHref`, provider/hook |
| English dictionary | `src/core/i18n/messages/en.ts`                       | same shape as `fr` (typed against it)                                  |
| Language switcher  | `src/components/layout/locale-switcher.tsx`          | client; uses `usePathname`                                             |
| Localized catalog  | `src/features/catalog/{types,data,supabase-repo}.ts` | selectors take `locale`; `family` stays the canonical key              |
| Migration          | `supabase/migrations/…_catalog_translations.sql`     | add column + seed English                                              |
| Checkout locale    | `src/app/api/checkout/route.ts`                      | `locale` in body → Stripe `locale`, localized return URLs              |

## Data & state

- Server data: `fetchFragrances(locale)` selects `*` and merges `translations[locale]` over the
  French columns; unchanged caching (sessionless client, `revalidate = 300`, static params for
  `locale × slug`).
- Client state: none new. `I18nProvider` is a plain React context (no store).
- Actions: checkout POST body gains `locale`, validated against the locale list (falls back to
  `fr`). No server actions.

## Acceptance criteria → verification mapping

| AC   | Proven by                                                                                            |
| ---- | ---------------------------------------------------------------------------------------------------- |
| AC-1 | e2e `e2e/i18n.spec.ts`: switch FR→EN→FR on home and product; shots `i18n-home-en`, `i18n-product-en` |
| AC-2 | e2e: `/fr/collection` → 308 → `/collection`; existing FR specs unchanged                             |
| AC-3 | unit `catalog/data.test.ts`: EN merge + FR fallback; e2e product EN notes                            |
| AC-4 | unit `i18n.test.ts`: alternates helper; e2e asserts `html[lang=en]` and hreflang links               |
| AC-5 | unit `format.test.ts`; e2e `€195.00` on EN product; manual Stripe test-mode run in EN                |
| AC-6 | e2e: `/de/collection` is 404                                                                         |
| AC-7 | `pnpm verify` + `pnpm e2e` green                                                                     |

## Risks & unknowns

- Next 16.2 → 16.3 bump: `next/root-params` is experimental in 16.2. Bump first, run the full gate
  before any i18n change, so a regression is attributable.
- Two root layouts (locale + admin): both must import `globals.css` and fonts; verified by building
  and opening `/admin/login`.
- Static generation must still hold: no `headers()`/`cookies()` on public pages. Verified by the
  build output (`○`/`●` markers on public routes).
- Typography gate scans JSX text only, so English dictionary strings must still use curly quotes.

## Overlap check

Active specs touching the same areas: none (012 shipped). The hero bottle regeneration is an
asset task handled outside this spec.
