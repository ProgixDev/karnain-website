import { expect, test } from "@playwright/test";
import { shot } from "./utils/shot";

// Spec 014 — the site in English (extends CUJ-A and CUJ-B).
test("@cuj CUJ-A/B in English: switch language, read a fragrance, fill the bag", async ({
  page,
}) => {
  await page.goto("/");

  // The switcher takes the visitor to the same page in English.
  await page
    .getByRole("navigation", { name: "Langue" })
    .first()
    .getByRole("link", { name: "English" })
    .click();
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("heading", { name: "The signatures" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Open the bag" })).toBeVisible();
  await shot(page, "i18n-home-en");

  // Product page: name unchanged, everything else in English, euro in English notation.
  await page.goto("/en/parfums/tobacco");
  await expect(page.getByRole("heading", { level: 1, name: "Tobacco" })).toBeVisible();
  await expect(page.getByText("Top notes")).toBeVisible();
  await expect(page.getByText("Raspberry", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("€195.00").first()).toBeVisible();
  // hreflang alternates point at both languages.
  await expect(page.locator('link[rel="alternate"][hreflang="fr"]')).toHaveAttribute(
    "href",
    /\/parfums\/tobacco$/,
  );
  await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
    "href",
    /\/en\/parfums\/tobacco$/,
  );
  await shot(page, "i18n-product-en");

  await page.getByRole("button", { name: "Add to bag" }).click();
  const drawer = page.getByRole("dialog", { name: "Your bag" });
  await expect(drawer).toBeVisible();
  await expect(drawer.getByText("Subtotal")).toBeVisible();
  await shot(page, "i18n-bag-en");
  await drawer.getByRole("link", { name: "View bag" }).click();
  await expect(page).toHaveURL(/\/en\/panier$/);

  // Back to French from the same page.
  await page
    .getByRole("navigation", { name: "Language" })
    .first()
    .getByRole("link", { name: "Français" })
    .click();
  await expect(page).toHaveURL(/\/panier$/);
  await expect(page.getByRole("heading", { name: "Votre panier" })).toBeVisible();
});

test("French stays canonical: /fr redirects, unknown prefixes are 404", async ({ page }) => {
  const response = await page.goto("/fr/collection");
  expect(response?.request().redirectedFrom()?.url()).toMatch(/\/fr\/collection$/);
  await expect(page).toHaveURL(/\/collection$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");

  const missing = await page.goto("/de/collection");
  expect(missing?.status()).toBe(404);
});
