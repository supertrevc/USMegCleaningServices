// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://megcleaning.com';

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
  integrations: [
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
