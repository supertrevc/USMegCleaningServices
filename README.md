# US Meg Cleaning Services — Website

Production-ready, **bilingual (EN/ES)** marketing site for US Meg Cleaning Services
(Tampa Bay, FL). Built with **Astro + Tailwind CSS v4**, static-first with progressively
enhanced vanilla-JS islands, deployed to **Vercel**.

## Commands

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Dev server at `localhost:4321`                |
| `npm run build`   | Build the static site to `./dist/`            |
| `npm run preview` | Preview the production build locally          |

## Project structure

```
public/
  fonts/            Self-hosted Plus Jakarta Sans + Inter (latin woff2, variable)
  img/              Optimized WebP imagery + PWA icons (originals fetched from megcleaning.com)
  robots.txt, manifest.webmanifest, favicon.svg, favicon-32.png
api/
  contact.js        Vercel serverless function — emails quote/job form submissions
src/
  data/business.ts  NAP, payments, neighborhoods (language-neutral facts)
  data/legal.ts     Privacy / Terms / Cookie / Accessibility copy (EN + ES)
  i18n/utils.ts     Locale detection + localized route map + hreflang helpers
  i18n/content.ts   ALL bilingual UI/marketing copy (single source of truth)
  lib/schema.ts     JSON-LD builders (LocalBusiness, Service, FAQPage, Review)
  layouts/          BaseLayout (SEO/meta/JSON-LD) + PageLayout (sub-pages)
  components/       Header, Footer, HomeSections, Calculator, Faq, ContactForm,
                    ServicesContent, CookieBanner, Analytics, LegalArticle
  pages/            /en/* and /es/* routes + root redirect + 404
```

## Editing content

- **All copy** lives in [`src/i18n/content.ts`](src/i18n/content.ts) under `content.en` / `content.es`.
- **Business facts** (phone, email, areas, payments) live in [`src/data/business.ts`](src/data/business.ts).
- **Legal pages** live in [`src/data/legal.ts`](src/data/legal.ts).
- Section anchor IDs (`#about-us`, `#our-services`, …) are defined once in `SECTION_IDS`.

## Design tokens (Tailwind v4 `@theme` in `src/styles/global.css`)

| Token            | Value     | Use                                  |
| :--------------- | :-------- | :----------------------------------- |
| `--color-deep`   | `#0F4C5C` | Dark sections, footer, headings      |
| `--color-brand`  | `#147E78` | Links, accents, icons, eyebrows      |
| `--color-accent` | `#F2A541` | Primary/CTA buttons (with ink text)  |
| `--color-accent-hover` | `#E0902C` | CTA hover                      |
| `--color-surface`| `#F7FAFA` | Page background                      |
| `--color-ink`    | `#1E2A2E` | Body text on light                   |
| `--color-on-dark`| `#F2F7F7` | Body text on deep-teal               |
| `--color-muted`  | `#5B6B70` | Secondary text                       |
| `--color-divider`| `#E1E9E9` | Borders                              |

Fonts: **Plus Jakarta Sans** (display, 600/700) + **Inter** (body, 400/500), self-hosted,
`font-display: swap`, only the display font is preloaded. Type scale + helpers (`.btn`,
`.eyebrow`, `.section`, `.card`, `.container-page`, `.skip-link`) are in `global.css`.

## Deployment (Vercel)

1. Import the repo into Vercel. Framework preset: **Astro** (static). The `api/` folder is
   auto-detected as a Node serverless function — no adapter needed.
2. The production domain is hardcoded to `https://megcleaning.com` in
   [`astro.config.mjs`](astro.config.mjs) and [`public/robots.txt`](public/robots.txt).
   Only change these if the live domain ends up being different.
3. Security headers (HSTS, CSP, X-Frame-Options, Permissions-Policy, etc.) ship via
   [`vercel.json`](vercel.json).

### Environment variables

All keys are **optional** — the site builds and runs without them, and each feature stays
dormant (degrading gracefully) until its key is set. See [`.env.example`](.env.example).

| Variable             | Purpose                                                                 |
| :------------------- | :--------------------------------------------------------------------- |
| `RESEND_API_KEY`     | Sends form submissions via [Resend](https://resend.com). If unset, submissions are logged and the form still returns success. |
| `FROM_EMAIL`         | Sender address. Defaults to Resend's test sender `onboarding@resend.dev`. |
| `TO_EMAIL`           | Destination inbox. Defaults to `usmegcleaningservices@gmail.com`.       |
| `PUBLIC_GA_ID`       | GA4 Measurement ID. If unset, GA isn't loaded.                          |
| `PUBLIC_CLARITY_ID`  | Microsoft Clarity project ID. If unset, Clarity isn't loaded.          |

### Analytics (consent-gated)

IDs are read from `PUBLIC_GA_ID` / `PUBLIC_CLARITY_ID` in
[`src/components/Analytics.astro`](src/components/Analytics.astro) — no hardcoded IDs. A
script is only injected when its id is set, and **never loads until** the visitor accepts
analytics cookies. If **both** ids are empty the cookie banner stays hidden (nothing to
gate); it lights up automatically once an id is added. The footer "Cookie Preferences" link
stays wired regardless. Tracked Key Events: `sms_click`, `phone_click`,
`estimate_calculated`, `estimate_text_click`, `quote_form_submit`.

## Before launch

The build is complete and the domain + contact destination are wired. The only remaining
steps are:

1. **Paste `RESEND_API_KEY`** into Vercel env vars so the contact form emails
   `usmegcleaningservices@gmail.com` (until then, submissions are logged but not sent).
2. **Verify the `megcleaning.com` sender domain in Resend**, then change `FROM_EMAIL` to
   `noreply@megcleaning.com` (currently defaults to Resend's test sender).
3. *(Optional)* Add `PUBLIC_GA_ID` and/or `PUBLIC_CLARITY_ID` to enable analytics + the
   cookie banner.
4. *(Optional)* Drop the real Google rating + review count into the commented
   `aggregateRating` stub in [`src/lib/schema.ts`](src/lib/schema.ts) to enable that schema.
5. *(Optional)* Verify Search Console + Bing and submit `sitemap-index.xml`.
