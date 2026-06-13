# Costa Rica Catamaran Tours

Marketing and inquiry website for catamaran tours along Costa Rica's Gold Coast (Flamingo & Tamarindo). Visitors browse tours and send booking inquiries; you manage content and assign internal providers from a password-protected admin area.

**Repository:** [github.com/Cboethius/costa-rica-catamaran-tours](https://github.com/Cboethius/costa-rica-catamaran-tours)

## Stack

- Next.js 15 (App Router)
- Tailwind CSS 4
- JSON file storage (local `data/` in dev, Vercel Blob in production)
- Vercel Blob for image uploads in admin (production)

## Getting started

```bash
cd CostaRicaCatamaranTours
cp .env.example .env.local
npm install
npm run dev
```

Open **[http://localhost:3020](http://localhost:3020)** in your browser.

> **Note:** `npm run dev` clears the `.next` cache and always starts on port **3020** (via `scripts/start-dev.mjs`).

### Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ADMIN_PASSWORD` | Yes | Password for `/admin` CMS |
| `BLOB_READ_WRITE_TOKEN` | Production | Vercel Blob for persistent JSON + image uploads |

Copy `.env.example` to `.env.local` and set `ADMIN_PASSWORD` before using admin.

### Seed data

Initial content is loaded from `data/*.json`. To reset from defaults:

```bash
npm run seed
```

Or manually:

```bash
npx tsx -e "
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { defaultSiteContent } from './src/lib/seed-content';
import { defaultTours } from './src/lib/seed-tours';
const dir = join(process.cwd(), 'data');
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'site-content.json'), JSON.stringify(defaultSiteContent, null, 2));
writeFileSync(join(dir, 'tours.json'), JSON.stringify(defaultTours, null, 2));
"
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all marketing sections |
| `/tours/[slug]` | Individual tour detail |
| `/book` | Inquiry form (no payment) |
| `/faq` | Frequently asked questions |
| `/success` | Inquiry confirmation |
| `/admin` | CMS (not linked in navigation) |

## Admin CMS

1. Set `ADMIN_PASSWORD` in `.env.local`
2. Visit `/admin` and sign in
3. Manage:
   - **Inquiries** — view requests, update status, assign internal providers
   - **Site Content** — edit hero text, images, contact copy
   - **Tours** — edit descriptions, images, active flag
   - **Providers (internal)** — operator registry never shown on public site

## Deploy to Vercel

1. Push repo to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `ADMIN_PASSWORD`
   - `BLOB_READ_WRITE_TOKEN` (create a Blob store in Vercel dashboard)
4. Deploy

Without `BLOB_READ_WRITE_TOKEN` on Vercel, JSON data is ephemeral (`/tmp`) and resets on cold starts.

## Phase 2 — Stripe payments

When you have tour prices:

1. Add Stripe env vars (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`)
2. Set `priceUsd` on tours in admin
3. Enable checkout flow on `/book`

Not implemented in phase 1 — inquiries only.

## Project location

`/Users/christianboethius/CostaRicaCatamaranTours`

Standalone project — not connected to any other website.
