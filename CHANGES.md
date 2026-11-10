# Upgrade notes

## Changed
- Footer: removed "[Additional Product]" placeholder.
- data/site.ts: removed "[Business Hours]" and "[Google Maps Location]" placeholders; added whatsappLink, formEndpoint, mapEmbed.
- New Enquiry form (components/EnquiryForm.tsx) in Contact. "Enquire Now" pre-selects the product.
  Delivered to laxmikantwl09@gmail.com via FormSubmit. FIRST submission sends an activation email to that inbox:
  click the confirm link once, then enquiries arrive normally.
- Google Map embed in Contact.
- Floating WhatsApp button with pulse (components/WhatsAppButton.tsx).
- Animations: gold scroll-progress bar, word-by-word hero heading reveal, 3D tilt on product images. All respect reduced-motion.
- Images: 6 product images + about image converted to WebP (about 10 MB down to about 0.8 MB). Originals still in public/images; delete once happy.
- Organization schema now has url + logo; products have sku.

## Not touched
- hero.jpg and trust.jpg were empty in the export, so new artwork was generated for both (see Round 6).
- Certifications / process sections: need your real certificate details first.

## Not tested
Could not run npm install / build in the sandbox. Run: npm install && npm run build

## Round 2: animations (all transform/opacity, all respect prefers-reduced-motion)
- Loader (components/Loader.tsx + CSS in styles.css): lotus outline draws itself, then fades (~1.7 s, first visit per session only). Pure CSS: it also hides itself with no JavaScript.
- Hero: parallax background (scroll-linked), floating onion / ginger / tamarind SVGs (components/FloatingIngredients.tsx, paused when off-screen, fewer on mobile).
- Product cards: pointer glow, pack image lifts on hover, magnetic "Enquire Now" (components/Magnetic.tsx, desktop mouse only).
- New "Our Process" section (components/Process.tsx) with a line that draws while scrolling.
  !! The step wording is GENERIC. Edit the `steps` array so it matches how you really work.
- No-JS fallback: a <noscript> style in routes/__root.tsx makes animated content visible without JavaScript.
- Already present and left alone: scroll reveals with stagger on every section, word-by-word hero heading, WhatsApp pulse, CSS smooth scrolling.
- No GSAP: the project's existing `motion` library does everything, so nothing new is added to the bundle.

## Round 3: logo, About visual, better loader
- Navbar logo: no more boxed image with a cream background. Now the transparent lotus (public/images/logo-symbol.webp) plus a real-text "LAXMIKANT / WORLDLINK" wordmark that switches colour on scroll. Navbar bar is also more solid when scrolled.
- About image: replaced the single photo with components/AboutShowcase.tsx. It is a navy brand panel with your real product packs (tamarind, red onion, ginger) floating gently, a slow rotating ring, and two badges (Hygienic processing, White label available) that sit on the right and left edges. Edit the packs or badge text in that file.
- Lotus loader: the gold outline draws, the real pink lotus fades in with a glow, then the LAXMIKANT / WORLDLINK name appears, then it fades out (about 2.3 s, once per session).

## Round 4: product popup + effects
- Powder particles (components/PowderParticles.tsx + CSS): fine powder in the product's colour rises from the pack while a card is hovered. CSS only, hidden for reduced motion.
- Product popup (components/ProductModal.tsx): grows out of the "View Details" button you clicked; swipe the pack image left/right, use the arrow buttons, or press the left/right arrow keys to move between products (1 / 6 counter).
- Page-style transition: moving between products slides and fades the whole detail view (direction-aware).
- Hover lift: all main buttons (hero, product cards, popup, form, navbar, CTA) lift with a soft shadow (.lift-btn in styles.css); "Why us", About, contact and trust cards also lift.
- Products.tsx now builds the product order once and shares it with the popup.

## Round 5: Lovable removed
- Deleted: .lovable/, src/assets/*.asset.json, AGENTS.md, src/lib/lovable-error-reporting.ts (and its use in __root.tsx).
- vite.config.ts no longer uses @lovable.dev/vite-tanstack-config. It lists the same plugins directly (TanStack Start, React, Tailwind, tsconfig paths, Nitro for Vercel).
- Removed the @lovable.dev package from package.json / package-lock.json. Run `npm install` once.
- README rewritten.
- Deleted bun.lock (it still listed the Lovable package). npm + package-lock.json is the lockfile now.
- Hero and Trust background images now hide themselves if the file is missing/empty (the navy background shows instead of a broken icon).

## Round 6: new hero + trust artwork
- public/images/hero.jpg (1920x1280, ~190 KB): dotted globe with gold export routes from Mumbai. Globe sits on the right so the heading stays readable.
- public/images/trust.jpg (1600x1100, ~60 KB): subtle network of nodes for the "Built On Trust" section.
- Both are original artwork made for this site. Swap in your own photos any time by replacing the files (keep the names).

## Round 7: globe, intro, About label
- public/images/hero.jpg: globe now shows hand-drawn continent outlines as glowing dots, India highlighted in gold and centred, with gold export routes from Mumbai spreading out. Shapes are simplified (stylised), not survey-accurate. The hero image is positioned so India stays visible on phones (object-[69%_50%]), and the overlay on the right was lightened so the globe stays bright.
- Loader (components/Loader.tsx + CSS): neon pink lotus (redrawn from your reference) draws petal by petal, blooms with a glow and a twinkling star, then the LAXMIKANT / WORLDLINK name appears and the whole screen dissolves slowly (about 3.2 s, first visit per session only).
- Smooth hand-off: src/lib/intro.ts. The hero text, hero image and WhatsApp button now wait for the intro, so they appear as it dissolves instead of before it.
- About panel label "From Navi Mumbai, India" is now "Pure · Natural · Trusted" (components/AboutShowcase.tsx).

## Round 8: review fixes (A-G, I; H and J-L not done on purpose)
- A. New --gold-ink (darker gold, 5:1+ contrast) for small gold labels on light backgrounds; .eyebrow-dark keeps the bright gold on navy sections. Removed an empty hero paragraph.
- B. Enquiry form: visible labels on every field, aria-live status, consent line under the button.
- C. Meta description now covers all 6 products; added og:image / twitter:image (public/images/og-image.jpg, 1200x630).
- D. Product schema: absolute image URLs, a separate link per product (cards now have id="product-<id>").
- E. Deleted 14 unused image files from public/images (20 MB down to 2.6 MB).
- F. Product popup: focus moves into it, Tab stays inside, focus returns to the button when it closes.
- G. Phone, email, WhatsApp and address in the Contact cards are now links.
- I. "Process" added to the menu (tighter spacing between menu links on desktop).

## Round 9: map from real data, intro fixes, form, speed
- Hero globe (public/images/hero.jpg): outline only. Coastlines come from Natural Earth data (your countries-50m.json). India is drawn in gold from the outline traced off your WorldAtlas image and fitted to real coordinates, so it keeps the official northern shape; Andaman, Nicobar and Lakshadweep come from the data. Routes start from India.
- Product cards: the pack is 18% shorter in its box with less hover lift, so its top is no longer clipped.
- Intro: star removed; "LAXMIKANT / WORLDLINK" rises from further below; the intro is marked "seen" when it FINISHES (not when it starts), decided by a tiny script in the page head before the first paint. This stops the intro being cut by refreshes or React dev mode.
- Enquiry form: now sends through Web3Forms. Put your key in a .env file (see .env.example). The real error text is shown if sending fails.
- Speed: home page is pre-built (vite.config.ts `prerender`), images are cached for 30 days, hero image is preloaded, fonts are self-hosted with @fontsource (run `npm install` once).
- .env and .env.* are now git-ignored; .env.example shows the key name.

## Round 10: logo card + branded 404/error pages
- "Built On Trust" card: the boxed cream logo picture (with the stray line) is replaced by the transparent lotus plus the name as real text, about 3x larger. The card is now a deep navy glass panel with a thin gold border and cream/gold text.
- New components/BrandedMessage.tsx: 404 and error pages use the site's navy/gold style, serif gold "404", lotus and wordmark, gold "Go to homepage" / "Try again" buttons and a secondary link.
- Deleted the unused public/images/logo_light.png and its import in data/site.ts.
- Added .env with the Web3Forms key (git-ignored). Restart npm run dev after unzipping.
