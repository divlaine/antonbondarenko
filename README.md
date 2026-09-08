# Anton Bondarenko — bilingual iOS engineering portfolio

A production-ready, bilingual Astro website for Anton Bondarenko, Senior iOS Developer. English is the default language and Russian pages live under `/ru`. The site is statically generated, requires no client JavaScript for navigation or localization, and uses the supplied EN/RU CVs as its professional source of truth.

## Requirements and commands

- Node.js 20 or newer
- `npm install` — install dependencies
- `npm run dev` — local development at `http://localhost:4321`
- `npm run check` — Astro and TypeScript validation
- `npm run build` — checked production build to `dist/`
- `npm run preview` — preview the production build

The default production target is `https://divlaine.github.io/antonbondarenko`. Override `SITE_URL` and `BASE_PATH` when deploying to another origin or path.

## Project structure

- `src/config/` — centralized public identity and site metadata
- `src/i18n/` — localized UI text and route helpers
- `src/data/content.ts` — localized experience, metrics, project cards, and draft article metadata
- `src/components/` — shared page implementations; no EN/RU logic duplication
- `src/layouts/BaseLayout.astro` — navigation, language switch, SEO, JSON-LD, and footer
- `src/pages/` and `src/pages/ru/` — statically generated localized routes
- `src/content/articles/` — Astro Content Collection article sources
- `src/content/projects/` — Astro Content Collection project sources
- `public/` — PDF résumés, social card, favicon, robots, and hosting headers

## Profile and contact configuration

Edit `src/config/profile.ts`. Phone numbers are intentionally absent from rendered pages; the original PDFs remain unchanged. Only publish verified profile and store URLs. The `website` value is a documented TODO until a custom domain is confirmed.

## Adding localized pages

Create a shared component that accepts `lang: 'en' | 'ru'`, then add thin route files in both `src/pages/` and `src/pages/ru/`. Pass the same logical path (without `/ru`) to `BaseLayout`; it creates localized canonical and hreflang URLs. The header language switch removes or adds `/ru` while preserving the rest of every nested path.

## Adding translated articles

Add one Markdown or MDX file under each of `src/content/articles/en/` and `src/content/articles/ru/`. Both entries must share a `translationKey`; slugs may differ if route mapping is added to `src/i18n/routing.ts`. Drafts should omit publication dates and use `draft: true`. Do not use `BlogPosting` until a real article is published. Current article pages are explicitly marked as outlines.

## Adding translated projects

Add matching collection files under `src/content/projects/en/` and `src/content/projects/ru/` with the same `translationKey`. Provide only verified facts for `company`, `role`, `period`, `technologies`, and `impact`. Keep `period` empty when the CV does not support one. Public links belong in `links` only after verification; never infer App Store or Google Play URLs.

## Images

Place optimized assets in `public/` or use Astro’s image pipeline from `src/assets/`. Always provide dimensions and meaningful alt text for content images. Replace `public/og.png` only with a 1200×630 verified social card. The layout intentionally works without a portrait.

## SEO and structured data

`BaseLayout` supplies localized titles/descriptions, self-canonical URLs, `en`, `ru`, and `x-default` hreflang, Open Graph/X metadata, and homepage Person JSON-LD. Project pages include breadcrumb JSON-LD. `@astrojs/sitemap` generates `sitemap-index.xml`. Validate the deployed result with Google Rich Results Test and Schema.org Validator. Submit the final sitemap to Google Search Console and Bing Webmaster Tools after domain verification.

## Deployment

### Cloudflare Pages

Connect the repository, choose the Astro framework preset, use `npm run build`, and publish `dist`. Configure `SITE_URL` to the final HTTPS origin. `public/_headers` documents suitable CSP, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy` headers.

### Vercel

Import the repository, select Astro (normally auto-detected), keep `npm run build`, and configure `SITE_URL`. The project is fully static and contains no vendor-specific application code.

After either deployment, connect the custom domain, update the three documented domain fallbacks, rebuild, check redirects and HTTPS, submit the sitemap, and request indexing for both homepages.

## Quality checks

Run `npm run build`, test every EN/RU route and nested language switch, verify both PDF downloads, and inspect light/dark system modes plus the résumé print preview. Run Lighthouse on mobile and desktop, aiming for 95+ in Performance, Accessibility, and Best Practices and 100 in SEO. Check keyboard focus, reduced motion, canonical/hreflang output, JSON-LD, internal links, sitemap, robots, and security headers.

## Remaining launch TODOs

- Replace `example.com` with the verified custom domain and set `SITE_URL` in hosting.
- Add verified App Store / Google Play links only when supplied.
- Add a profile photo only if a current approved asset is supplied; the design does not require one.
- Replace draft outlines with reviewed technical articles and real dates before publication.
- Expand Content Collection project files alongside the centralized display data if a CMS/content-first rendering migration is desired.
