# WNY Renovations & Repairs LLC — Website (Next.js + Tailwind)

Modern-luxury dark theme with copper accent, optimized for local services (Buffalo + suburbs).

## Quick start
1) Install Node.js (18+)
2) In this folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Lead form (important)
The contact form submits to `/api/lead`.

Recommended setup (fast):
1) Create a Formspree form
2) Copy the endpoint (looks like `https://formspree.io/f/xxxxxx`)
3) Create `.env.local`:

```bash
FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx
```

Restart `npm run dev`. Now submissions will arrive in your Formspree inbox.

## Add your real photos
Replace:
- `public/brand/hero.jpg`
- `public/brand/about.jpg`
- `public/gallery/sample-1.jpg` ... `sample-6.jpg`

Tip: keep images ~1500px wide, JPG or WEBP.

## Add real reviews
Edit `components/TestimonialGrid.jsx` and paste your Google/Thumbtack review text.

## Branding
Your extracted logo files:
- `public/brand/logo-mark.png`
- `public/brand/logo-full.png`

## Deploy (Vercel)
1) Push this folder to GitHub
2) Import the repo on Vercel
3) Add Environment Variable:
   - `FORMSPREE_ENDPOINT`
4) Deploy

## Update the website URL
In `app/layout.jsx` and `components/LocalBusinessJsonLd.jsx`, replace `https://example.com` with your real domain.
