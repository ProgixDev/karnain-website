"use client";

import { MinusIcon, PlusIcon, TrashIcon } from "@/components/ui/icons";
import { formatEur } from "@/lib/format";
import { useCartStore } from "../provider";
import type { CartLine } from "../types";
import { useI18n } from "@/components/i18n/i18n-provider";

const stepButton =
  "focus-visible:ring-ring hover:bg-accent inline-flex size-7 items-center justify-center rounded-md border outline-none transition-colors focus-visible:ring-2";

export function CartLineRow({ line }: { line: CartLine }) {
  const setQuantity = useCartStore((state) => state.setQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const { dict, locale } = useI18n();
  const t = dict.cart;

  return (
    <li className="flex gap-4 py-5">
      <div
        aria-hidden
        className="from-secondary to-card text-foreground/15 flex size-20 shrink-0 items-center justify-center rounded-md border bg-linear-to-b font-serif text-2xl"
      >
        {line.name.charAt(0)}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <p className="font-serif text-lg">{line.name}</p>
          <p className="text-sm">{formatEur(line.priceEur * line.quantity, locale)}</p>
        </div>
        <p className="text-muted-foreground text-sm">{formatEur(line.priceEur, locale)}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={t.decrease}
              onClick={() => setQuantity(line.slug, line.quantity - 1)}
              className={stepButton}
            >
              <MinusIcon className="size-3.5" />
            </button>
            <span aria-live="polite" className="w-6 text-center text-sm">
              {line.quantity}
            </span>
            <button
              type="button"
              aria-label={t.increase}
              onClick={() => setQuantity(line.slug, line.quantity + 1)}
              className={stepButton}
            >
              <PlusIcon className="size-3.5" />
            </button>
          </div>
          <button
            type="button"
            aria-label={t.remove}
            onClick={() => removeItem(line.slug)}
            className="text-muted-foreground hover:text-foreground focus-visible:ring-ring inline-flex size-7 items-center justify-center rounded-md transition-colors outline-none focus-visible:ring-2"
          >
            <TrashIcon className="size-4" />
          </button>
        </div>
      </div>
    </li>
  );
}
