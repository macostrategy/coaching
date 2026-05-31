# Maco Strategy Coaching (Website)

This repo contains the coaching website built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Local development

Prereqs: Node.js 20+.

```bash
npm install
npm run dev
```

## Zoho setup

- **Discovery call booking:** already linked via Zoho Bookings on the homepage.
- **Paid sessions:** create two Zoho Checkout links (single session, 6-session bundle) and paste them into
  `src/lib/siteConfig.ts` under `checkout`.
- **Lead capture → Zoho CRM:** easiest static-site option is a Zoho Forms form that is integrated to Zoho CRM; paste the
  Zoho Forms embed URL into `src/lib/siteConfig.ts` under `leadCapture`.

## Deploy (GitHub Pages)

Deployment runs via GitHub Actions on every push to `main`.

In GitHub:
- **Settings → Pages**
- **Build and deployment → Source:** GitHub Actions
