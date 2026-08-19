// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { IS_INDEXABLE } from './src/lib/search-visibility.mjs';

// Demo/preview domain so link previews resolve. Revert to https://megcleaning.com at client handoff.
const SITE = 'https://us-meg-cleaning-services.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true, // both /en/ and /es/ are explicit
      redirectToDefaultLocale: false,
    },
  },
  // A sitemap is a direct request to index every URL in it, so a prospect
  // demo ships without one. See src/lib/search-visibility.mjs.
  integrations: !IS_INDEXABLE ? [] : [
    sitemap({
      // Drop the bare root redirect (noindex) from the sitemap.
      filter: (page) => {
        const path = new URL(page).pathname;
        return path !== '/';
      },
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es-US' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
