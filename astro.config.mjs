import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://divlaine.github.io',
  base: '/antonbondarenko',
  output: 'static',
  integrations: [sitemap({
    filter: (page) => !page.includes('/articles/') && !page.includes('/ru/articles/'),
  })],
  trailingSlash: 'never',
  compressHTML: true
});
