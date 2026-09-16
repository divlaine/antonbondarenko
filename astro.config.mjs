import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://divlaine.github.io',
  base: '/antonbondarenko',
  output: 'static',
  integrations: [sitemap({
    filter: (page) => !page.includes('/articles/') && !page.includes('/ru/articles/'),
  })],
  // GitHub Pages serves these routes from */index.html and canonicalizes them
  // with a trailing slash. Generate the same URL shape everywhere so crawlers
  // never have to follow a redirect from sitemap, canonical, or internal links.
  trailingSlash: 'always',
  compressHTML: true
});
