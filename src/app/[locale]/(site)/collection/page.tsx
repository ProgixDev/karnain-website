import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { getDictionary, isLocale, localizeHref, pageAlternates } from "@/core/i18n";
import { getLocale } from "@/core/i18n/server";
import { FragranceGrid, getFamilies, getFragrances } from "@/features/catalog";
import { cn } from "@/lib/utils";

type Params = { locale: string };
type SearchParams = { famille?: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : undefined);
  return {
    title: dict.collectionPage.title,
    description: dict.collectionPage.intro,
    alternates: pageAlternates("/collection"),
  };
}

const chip = "label-eyebrow rounded-full border px-4 py-2 transition-colors";
const chipActive = "border-foreground bg-foreground text-background";
const chipIdle = "text-foreground/70 hover:text-foreground";

export default async function CollectionPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { famille } = await searchParams;
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const t = dict.collectionPage;
  const [all, families] = await Promise.all([getFragrances(locale), getFamilies(locale)]);

  // The filter value is the canonical (French) family key, so a filtered URL means the same
  // thing in every language; only the chip label is translated.
  const active = famille && families.some((family) => family.key === famille) ? famille : null;
  const fragrances = active ? all.filter((fragrance) => fragrance.family === active) : all;
  const collectionHref = localizeHref(locale, "/collection");

  return (
    <Container className="py-16 md:py-24">
      <header className="max-w-xl">
        <p className="label-eyebrow text-muted-foreground">{t.eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl font-light md:text-5xl">{t.title}</h1>
        <p className="text-muted-foreground mt-4">{t.intro}</p>
      </header>

      <div className="mt-10 flex flex-wrap gap-3" role="group" aria-label={t.filterLabel}>
        <Link
          href={collectionHref}
          aria-current={active === null}
          className={cn(chip, active === null ? chipActive : chipIdle)}
        >
          {t.filterAll}
        </Link>
        {families.map((family) => (
          <Link
            key={family.key}
            href={`${collectionHref}?famille=${encodeURIComponent(family.key)}`}
            aria-current={active === family.key}
            className={cn(chip, active === family.key ? chipActive : chipIdle)}
          >
            {family.label}
          </Link>
        ))}
      </div>

      <FragranceGrid
        fragrances={fragrances}
        comingSoonLabel={dict.collection.imageComingSoon}
        className="mt-12"
      />
    </Container>
  );
}
