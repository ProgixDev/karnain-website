import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary, isLocale, localizeHref } from "@/core/i18n";
import { getLocale } from "@/core/i18n/server";
import { resolveCheckoutOutcome } from "@/core/stripe/session-status";
import { ClearBag } from "@/features/cart";
import { cn } from "@/lib/utils";

type Params = { locale: string };

// The root layout applies a `%s · Karnain` template, so the brand belongs there, not here —
// spelling it out again rendered “Merci · Karnain · Karnain”. No hreflang: this page is only
// reached from Stripe with a session id, never from search.
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: getDictionary(isLocale(locale) ? locale : undefined).meta.thankYouTitle };
}

export default async function OrderThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  const locale = await getLocale();
  const outcome = await resolveCheckoutOutcome(sessionId);
  const t = getDictionary(locale).orderConfirmation[outcome];

  return (
    <Container className="flex flex-col items-center py-24 text-center md:py-32">
      <p className="label-eyebrow text-muted-foreground">{t.eyebrow}</p>
      <h1 className="mt-4 font-serif text-4xl font-light md:text-5xl">{t.title}</h1>
      <p className="text-muted-foreground mt-5 max-w-md">{t.body}</p>
      <Link
        href={localizeHref(locale, t.href)}
        className={cn(buttonVariants({ variant: "outline" }), "label-eyebrow mt-8")}
      >
        {t.cta}
      </Link>
      {/* A failed payment keeps the bag, so the buyer can simply try again. */}
      {outcome === "failed" || outcome === "unknown" ? null : <ClearBag />}
    </Container>
  );
}
