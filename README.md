# Laxmikant Worldlink website

React + TanStack Start + Tailwind CSS (v4) + motion.

## Run locally
```bash
npm install
cp .env.example .env   # then paste your Web3Forms access key into .env
npm run dev            # http://localhost:5173
```
The enquiry form needs `VITE_WEB3FORMS_KEY` (free key from https://web3forms.com). Restart `npm run dev` after editing `.env`.
On Vercel add the same variable under Project Settings > Environment Variables.

## Production build
```bash
npm run build
npm run preview
```

## Hosting
`vite.config.ts` builds for **Vercel** (`nitro: { preset: "vercel" }`). Connect the GitHub repo to Vercel and it deploys automatically.
For another host change the preset (for example `node-server` or `netlify`).

## Where things are
- `src/data/site.ts`: company details, products, contact info, form endpoint
- `src/components/`: page sections
- `public/images/`: images (hero.jpg and trust.jpg must be real image files)
