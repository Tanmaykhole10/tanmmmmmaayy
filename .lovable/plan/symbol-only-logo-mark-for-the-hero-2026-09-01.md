# Symbol-Only Logo Mark for the Hero

## Goal
Replace the full logo (lotus + wordmark + tagline) currently shown at the top of the hero with a clean, symbol-only brand mark.

## Steps

1. **Create the symbol mark**
   - Derive a symbol-only version from the existing official logo: the pink lotus mark alone, no text, no tagline, on a transparent background.
   - Square, crisp edges, sized for both large hero display and small icon use.

2. **Add it as a project asset**
   - Upload the transparent PNG and store the pointer at `src/assets/logo_symbol.png.asset.json`.
   - Register it in `src/data/site.ts` as `images.logoSymbol`.

3. **Use it in the hero**
   - `src/components/Hero.tsx` swaps the full `logoDark` image for the new symbol mark, sized appropriately (roughly h-20 / sm:h-24, square) with alt text "Laxmikant Worldlink lotus emblem".
   - Keep the existing entrance animation and spacing; the "Laxmikant Worldlink" headline below already carries the name, so the symbol reads as an emblem rather than a duplicate.

4. **Favicon**
   - Refresh `public/favicon.png` from the same symbol so the browser tab matches the emblem.

5. **Verify**
   - Screenshot the hero on desktop and mobile to confirm the mark is sharp, transparent, and balanced against the headline.

## Notes
Navbar, footer, and trust section keep the full logo with wordmark — only the hero changes to the symbol.
