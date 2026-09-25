import type { Metadata } from "next";
import { MotionProvider } from "@/components/motion";
import { bodyClassName } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

/**
 * Admin root layout — the back office stays French and lives outside the `[locale]` tree, so it
 * owns its own `<html>`. Intentionally minimal: no public header/footer/cart.
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={bodyClassName} suppressHydrationWarning>
        <MotionProvider>
          <div className="min-h-dvh">{children}</div>
        </MotionProvider>
      </body>
    </html>
  );
}
