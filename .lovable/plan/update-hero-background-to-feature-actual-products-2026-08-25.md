# Update Hero Background to Feature Actual Products

## Goal
Replace the current AI-generated hero background with a premium composite that prominently features the real product packshots: **Premium Tamarind Pulp** and **Red Onion Powder**.

## Steps

1. **Create new hero image**
   - Generate a high-end, dark-navy hero background using the existing product packshots (`product-tamarind.asset.json` and `product-onion.asset.json`).
   - Composition: both pouches arranged elegantly on a dark surface with subtle tamarind pods, red onion pieces, and spice accents; preserve the premium food-industry aesthetic and brand palette (navy, gold, lotus pink).
   - Output size: 1920x1280 (same as current hero).

2. **Upload as Lovable asset**
   - Use `lovable-assets create` to upload the generated image.
   - Write the resulting pointer to `src/assets/hero-products.jpg.asset.json`.
   - Remove any temporary local image file after upload.

3. **Wire the new image into the site**
   - Update `src/data/site.ts` to import the new hero asset and replace `images.hero` with the new URL.
   - Update `src/components/Hero.tsx` alt text to describe the actual products shown.

4. **Verify**
   - Capture a desktop preview screenshot of the hero section to confirm both product pouches are visible, legible behind the gradient overlay, and match the site’s premium look.
