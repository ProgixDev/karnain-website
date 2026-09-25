"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCartStore } from "../provider";
import type { CartItemInput } from "../types";
import { useI18n } from "@/components/i18n/i18n-provider";

type AddToBagButtonProps = {
  item: CartItemInput;
  className?: string;
};

export function AddToBagButton({ item, className }: AddToBagButtonProps) {
  const addItem = useCartStore((state) => state.addItem);
  const { dict } = useI18n();
  const t = dict.cart;
  return (
    <Button
      type="button"
      size="lg"
      onClick={() => addItem(item)}
      className={cn("label-eyebrow h-12 px-8", className)}
    >
      {t.addToBag}
    </Button>
  );
}
