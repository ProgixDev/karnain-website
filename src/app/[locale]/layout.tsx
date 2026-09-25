import type { Metadata } from "next";
import { I18nProvider } from "@/components/i18n/i18n-provider";
import { MotionProvider } from "@/components/motion";
import {
  getDictionary,
  isLocale,
  localeAlternates,
  locales,
  ogLocales,
  type Locale,
} from "@/core/i18n";
import { site } from "@/core/site";
import { bodyClassName } from "../fonts";
import "../globals.css";

type Params = { locale: string };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : undefined);
  const title = `${site.name} — ${dict.meta.baseline}`;
  return {
    title: { default: title, template: `%s · ${site.name}` },
    description: dict.meta.description,
    metadataBase: new URL(site.url),
    alternates: { languages: localeAlternates("/", locales) },
    openGraph: {
      title,
      description: dict.meta.description,
      locale: isLocale(locale) ? ogLocales[locale] : ogLocales.fr,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  params,
  children,
}: Readonly<{ params: Promise<Params>; children: React.ReactNode }>) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const dict = getDictionary(locale);

  return (
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={bodyClassName} suppressHydrationWarning>
        <I18nProvider locale={locale} dict={dict}>
          <MotionProvider>{children}</MotionProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
