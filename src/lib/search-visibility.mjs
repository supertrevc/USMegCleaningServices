/**
 * Search-engine visibility for this deployment — the single switch that decides
 * whether this site is allowed to appear in Google.
 *
 * This is a Lamb & Lyon prospect site: a sales concept, not the client's live
 * website. It must stay reachable by direct URL so it can be opened on a Zoom
 * call or sent to the prospect, but it must never be search-indexable until the
 * client buys it and we deliberately launch it. So the default is "invisible",
 * and turning indexing on takes a deliberate environment variable.
 *
 * Plain `.mjs` on purpose: the Next config cannot import TypeScript, and the
 * X-Robots-Tag header lives there while the `<meta name="robots">` tag lives in
 * the root layout. One module keeps those two from drifting apart.
 *
 * Set SITE_SEARCH_VISIBILITY in the Vercel project settings (or .env.local):
 *
 *   unset / anything else  ->  "noindex"  DEFAULT. Crawlers may fetch the site,
 *                              but every page and asset carries noindex,
 *                              nofollow. No sitemap is published. This is the
 *                              configuration that actually keeps a site out of
 *                              search results, and the one that lets Google
 *                              *remove* a URL it has already indexed.
 *
 *   "blocked"              ->  Everything above, plus robots.txt refuses all
 *                              crawling. Only use this once Google has already
 *                              dropped the site. Blocking the crawl too early
 *                              backfires: Googlebot can no longer fetch the
 *                              page, so it never sees the noindex, and the URL
 *                              can sit in the index indefinitely as a bare link.
 *
 *   "public"               ->  index, follow, sitemap published. Set this ONLY
 *                              when a client has purchased the site and we are
 *                              intentionally launching it on a real domain.
 *
 * The value is read at build time, so changing it requires a redeploy.
 */

/** @typedef {"noindex" | "blocked" | "public"} SearchVisibility */

const raw = (process.env.SITE_SEARCH_VISIBILITY ?? "").trim().toLowerCase();

/**
 * Unrecognised values fall back to "noindex" rather than throwing: the failure
 * mode of a typo must be "stays hidden", never "accidentally goes live".
 * @type {SearchVisibility}
 */
export const SEARCH_VISIBILITY =
  raw === "public" || raw === "blocked" ? raw : "noindex";

/**
 * Vercel sets this to "production", "preview", or "development"; it is absent
 * when running outside Vercel. Preview deployments get their own public URL per
 * branch and per commit, so even a launched client site must never let those be
 * indexed — they would compete with the real domain as duplicate content.
 */
const isPreviewDeployment = process.env.VERCEL_ENV === "preview";

/** True only on the production deployment of a launched, purchased site. */
export const IS_INDEXABLE = SEARCH_VISIBILITY === "public" && !isPreviewDeployment;

/**
 * Value for the X-Robots-Tag response header, or null when the site is public.
 *
 * This backstops the meta tag: it covers responses that cannot carry HTML
 * <meta> — API routes, sitemap.xml, optimized images, PDFs, and any file served
 * out of /public — so the whole origin is covered, not just rendered pages.
 * @type {string | null}
 */
export const ROBOTS_TAG = IS_INDEXABLE
  ? null
  : "noindex, nofollow, noarchive, noimageindex";
