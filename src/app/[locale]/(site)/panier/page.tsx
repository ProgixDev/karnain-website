import type { Metadata } from "next";
import { getDictionary, isLocale, pageAlternates } from "@/core/i18n";
import { CartView } from "@/features/cart";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : undefined);
  return { title: dict.meta.cartTitle, alternates: pageAlternates("/panier") };
}

export default function CartPage() {
  return <CartView />;
}
