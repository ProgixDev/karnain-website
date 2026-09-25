"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/components/i18n/i18n-provider";
import { locales, switchLocaleHref } from "@/core/i18n";
import { cn } from "@/lib/utils";

/**
 * FR / EN links to the current page in the other language. Query strings are dropped on purpose:
 * the only one in use is the collection filter, whose key is language-independent anyway.
 */
export function LocaleSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const { locale, dict } = useI18n();

  return (
    <nav aria-label={dict.locale.switchLabel} className={cn("flex items-center gap-3", className)}>
      {locales.map((target) => (
        <Link
          key={target}
          href={switchLocaleHref(pathname, target)}
          hrefLang={target}
          lang={target}
          aria-label={dict.locale.names[target]}
          aria-current={target === locale ? "true" : undefined}
          className={cn(
            "label-eyebrow transition-colors",
            target === locale ? "text-foreground" : "text-foreground/45 hover:text-foreground",
          )}
        >
          {target.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
