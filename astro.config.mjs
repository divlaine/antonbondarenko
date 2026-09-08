import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://divlaine.github.io',
  base: '/antonbondarenko',
  output: 'static',
  integrations: [sitemap()],
  trailingSlash: 'never',
  compressHTML: true
});
