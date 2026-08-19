import type { APIRoute } from 'astro';
import { SEARCH_VISIBILITY } from '../lib/search-visibility.mjs';

/**
 * robots.txt, driven by SITE_SEARCH_VISIBILITY — see
 * src/lib/search-visibility.mjs for the three modes. Replaces the old static
 * public/robots.txt, which always said "Allow: /" and advertised the sitemap.
 *
 * Note that robots.txt is deliberately NOT the thing keeping this site out of
 * search. Blocking the crawl and asking to be de-indexed are opposite requests:
 * a crawler that is refused the page can never read the noindex on it, so a URL
 * Google already knows about stays listed. The noindex meta tag plus the
 * X-Robots-Tag header do the real work; robots.txt only stops the crawl traffic
 * once there is nothing left to remove.
 */
export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const base = site?.href.replace(/\/$/, '') ?? '';
  const extra = '';

  let body: string;
  if (SEARCH_VISIBILITY === 'public') {
    body = `User-agent: *\nAllow: /\n${extra}\nSitemap: ${base}/sitemap-index.xml\n`;
  } else if (SEARCH_VISIBILITY === 'blocked') {
    // Only once search engines have already dropped the site.
    body = 'User-agent: *\nDisallow: /\n';
  } else {
    // Default: crawlable so the noindex is actually read. No sitemap advertised.
    body = `User-agent: *\nAllow: /\n${extra}`;
  }

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
