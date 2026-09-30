import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update `site` to the final production domain before publishing (see spec open decision #6).
// sitemap.xml is authored by hand in /public (only two URLs, with hreflang alternates).
export default defineConfig({
  site: 'https://adrianaacevedo.netlify.app',
  trailingSlash: 'ignore',
  integrations: [tailwind({ applyBaseStyles: false })],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
});
