# Hero bottle reference prompts — 2026-09-26

Generated with the built-in `image_gen` tool, one call per supplied reference. The outputs are
reconstructions of the references, not a guarantee of pixel-identical packaging reproduction.
Only transparent framing, proportional resizing and WebP encoding (quality 94, lossless alpha)
were applied afterward. Original PNGs and lossless WebPs are retained in
`artifacts/hero-bottle-refresh/`; the smaller WebPs are served by the site.

## Verification

- `pnpm verify`: lint, types, formatting, docs, typography, 58 unit tests and production build pass.
- `PORT=3100 FEATURE=hero-bottle-refresh pnpm e2e`: all 9 tests pass.
- All six fragrance selections load the corresponding new sprite on desktop (1440 × 1000)
  and mobile (390 × 844); screenshots are in `artifacts/screenshots/hero-bottle-refresh/`.
- Visual inspection confirms complete central bottles, readable labels and clean transparent
  backgrounds. The established mobile carousel intentionally crops the neighbouring bottles.
- Fresh reduced-motion page loads use the matching still poster.
- Six served assets total approximately 1.26 MiB; full-resolution PNGs remain available locally.

## Shared prompt

```text
Use case: background-extraction.
Asset type: transparent perfume bottle cutout for the existing website hero.
Input image 1: authoritative client product reference. Extract/recreate ONLY this bottle with very high fidelity, removing all surrounding scenery and props.
Keep EXACTLY the reference bottle shape and proportions, broad clear cylindrical glass body, beveled rounded shoulder, thick transparent base, polished gold narrow neck and wide low cylindrical polished gold cap. Keep the cream rectangular paper label, its exact placement and proportions, black classic high-contrast serif letterforms, line spacing and alignment. Keep the exact liquid color, saturation and fill height of the reference. Do not redesign packaging.
One single upright bottle, straight front view, full cap-to-base visible, centered, occupying 92% of height in a tight portrait frame. Sharp readable label. Photoreal glass and gold. Real transparent alpha background; no scenery, no props, no surface, no cast shadow or reflection beneath bottle, no painted checkerboard. Remove scenery visible through glass. Retain clean translucent glass and natural reflective highlights. No extra text.
```

## Per-bottle prompt additions

### Tobacco

Reference: WhatsApp Image 2026-09-26 at 11.36.18 (4).jpeg.

Final asset: [Tobacco_center-reference-v2.webp](../../public/images/hero/sprites/Tobacco_center-reference-v2.webp).

```text
Liquid: dark amber-brown, exact reference hue.
Label text verbatim, centered: small top "EXTRAIT DE PARFUM", large middle "TOBACCO", medium bottom "KARNAIN".
```

### CherryJeTaime

Reference: WhatsApp Image 2026-09-26 at 11.36.18 (1).jpeg.

Final asset: [CherryJeTaime_center-reference-v2.webp](../../public/images/hero/sprites/CherryJeTaime_center-reference-v2.webp).

```text
Liquid: deep ruby cherry red, exact reference hue.
Label text verbatim, centered: small top "EXTRAIT DE PARFUM", large middle "CHERRY" then next line "JE T’AIME", medium bottom "KARNAIN". Keep the small top line very small exactly as reference.
```

### RoseDesIles

Reference: WhatsApp Image 2026-09-26 at 11.36.18.jpeg.

Final asset: [RoseDesIles_center-reference-v2.webp](../../public/images/hero/sprites/RoseDesIles_center-reference-v2.webp).

```text
Liquid: rose pink, exact reference hue.
Label text verbatim, centered: small top "EXTRAIT DE PARFUM", large middle "ROSE" then next line "DES ILES", medium bottom "KARNAIN". Keep the small top line very small exactly as reference.
```

### Cuir90

Reference: WhatsApp Image 2026-09-26 at 11.36.18 (3).jpeg.

Final asset: [Cuir90_center-reference-v2.webp](../../public/images/hero/sprites/Cuir90_center-reference-v2.webp).

```text
Liquid: dark brown cognac amber, exact reference hue.
Label text verbatim, centered: small top "EXTRAIT DE PARFUM", large middle "CUIR 90", medium bottom "KARNAIN". Keep the small top line very small exactly as reference.
```

### Tentation

Reference: WhatsApp Image 2026-09-26 at 11.36.18 (5).jpeg.

Final asset: [Tentation_center-reference-v2.webp](../../public/images/hero/sprites/Tentation_center-reference-v2.webp).

```text
Liquid: rich warm brown amber, exact reference hue.
Label text verbatim, centered: small top "EXTRAIT DE PARFUM", large middle "TENTATION", medium bottom "KARNAIN". Keep the small top line very small exactly as reference.
```

### SucreAddict

Reference: WhatsApp Image 2026-09-26 at 11.36.18 (2).jpeg.

Final asset: [SucreAddict_center-reference-v2.webp](../../public/images/hero/sprites/SucreAddict_center-reference-v2.webp).

```text
Liquid: bright golden yellow amber, exact reference hue.
Label text verbatim, centered: small top "EXTRAIT DE PARFUM", large middle "SUCRE" then next line "ADDICTE", medium bottom "KARNAIN". Keep the small top line very small exactly as reference.
```
