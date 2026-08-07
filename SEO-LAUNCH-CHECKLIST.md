# SEO launch checklist

## 1. Blocking information

- [ ] Confirm the final canonical production domain and set `SITE_URL` to its HTTPS origin.
- [ ] Add the confirmed custom domain to the existing Vercel project. At audit time it had only Vercel aliases and was not marked live, so no alias has been adopted as the business canonical.
- [ ] On non-Vercel hosting, set `SITE_ENV=production`. Vercel uses `VERCEL_ENV=production` automatically.
- [ ] Choose the preferred hostname (`www` or non-`www`) and redirect the other hostname, HTTP, and any trailing-slash duplicate to it at the host/CDN.
- [ ] Confirm whether every project photograph shows Mike's work. Supply accurate project title, service, description, and location only where known and approved.
- [ ] Replace the raised-bed about image if it is stock or is not Mike's work.
- [ ] Supply genuine testimonials and permission for the displayed attribution and any location/service detail.
- [ ] Confirm any additional towns or villages genuinely served, then add them to `confirmedAdditionalServiceAreas` in `src/config/site.ts`.
- [ ] Confirm whether a public business address exists and whether Mike explicitly permits publication. Never expose a private residential address by default.
- [ ] Confirm the final logo and approve the generated Open Graph sharing image.
- [ ] Provide a privacy-policy URL and confirm Formspree processing, photograph handling, retention, and deletion practices.
- [ ] Confirm the Formspree form ID and configure server-side spam controls. If using a paid plan with file uploads, set `FORMSPREE_FILE_UPLOADS=true` and configure accepted file types/limits in Formspree.

## 2. Search verification

### Google Search Console

- [ ] Add and verify the canonical **Domain property**.
- [ ] Set `GOOGLE_SITE_VERIFICATION` if an HTML verification token is used.
- [ ] Submit `https://[canonical-domain]/sitemap.xml`.
- [ ] Inspect the homepage, request indexing, and confirm Google's selected canonical.
- [ ] Review indexing, mobile usability, queries, Core Web Vitals, and structured-data reports after data appears.

### Bing Webmaster Tools

- [ ] Add/import the site and verify ownership.
- [ ] Set `BING_SITE_VERIFICATION` if a meta verification token is used.
- [ ] Submit/import the sitemap and run Bing Site Scan.
- [ ] Review crawl and SEO reports.

IndexNow is optional and is not implemented because this is a small, rarely changing single-page site.

## 3. Google Business Profile

- [ ] Point the website field to the canonical production URL.
- [ ] Use the exact name **Mike Hamer Gardens**.
- [ ] Keep phone, hours, and service-area wording consistent with the website.
- [ ] Confirm service-area-business status; hide a residential address unless Mike has chosen to display it.
- [ ] Add only confirmed services and genuinely served areas.
- [ ] Upload genuine project photographs, collect genuine reviews, and respond to reviews.

## 4. Migration from a previous site

- [ ] Export indexed URLs from Search Console, Bing, analytics, the old sitemap, and a crawl of the old site.
- [ ] Map each valuable old URL to the closest relevant new destination; do not redirect unrelated URLs blindly.
- [ ] Add single-hop permanent redirects at the host and preserve the existing primary domain where appropriate.
- [ ] Test HTTP/HTTPS, `www`/non-`www`, `/home`, old paths, query-string variants, 404s, and redirect chains.
- [ ] Update important directory listings and backlinks where practical.

No legacy paths or confirmed previous public domain were present in this repository, so redirects have not been guessed.

## 5. Final photography checklist

- **Hero — `hero-stone-wall.jpg`:** use a strong, genuine completed project in a wide crop (about 16:9). Alt text should state only what is visibly shown; add a location only if confirmed.
- **Services — `service-stone-path.jpg`:** use a genuine paving or landscaping detail in a landscape crop (about 4:3). Confirm the visible materials and feature.
- **Projects — `project-garden.jpg`:** use a confirmed completed project in a portrait crop (about 4:5). Confirm the main visible work and service.
- **Projects — `project-stone-path.jpg`:** use a confirmed completed paving project in a square or portrait crop. Confirm the paving type and setting.
- **Projects — `project-gate.jpg`:** use a confirmed fencing or turf project in a portrait crop. Confirm the main visible work.
- **About — `about-mike.jpg`:** use Mike at work or a genuine garden detail in a crop that tolerates the current narrow column. Identify a person/action only with consent; otherwise describe the visible garden feature.
- **Service area — `stroud-aerial.jpg`:** use a licensed, accurate Stroud context image in a wide crop (about 16:9). Confirm the place shown and image licence.

## 6. Post-deployment validation

- [ ] Confirm `/`, `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, icons, and all images return 200.
- [ ] View source and confirm title, description, canonical, index/follow, Open Graph, Twitter, one H1, contact details, anchor links, and JSON-LD.
- [ ] Confirm preview/staging responses contain `noindex, nofollow` and their robots file disallows crawling.
- [ ] Keep Vercel Authentication enabled for non-custom-domain deployments where practical; it was enabled for all deployments except custom domains at audit time.
- [ ] Test the form with email only, phone only, neither, invalid files, server errors, and successful submission on mobile and keyboard.
- [ ] Run Google Rich Results Test, Schema Markup Validator, Google URL Inspection, PageSpeed Insights/Lighthouse, and Bing Site Scan.
- [ ] Test the social card in Facebook Sharing Debugger and another Open Graph preview tool.

## 7. Monitoring after launch

- [ ] Watch Search Console Pages, canonical selection, queries, Core Web Vitals, and manual/security actions.
- [ ] Watch Bing crawl/site-scan reports.
- [ ] Monitor form delivery, spam, upload failures, and mobile conversion friction.
- [ ] Track uptime, 404s, redirects, and image errors.
- [ ] Re-test metadata and structured data after domain, business details, testimonials, or services change.
