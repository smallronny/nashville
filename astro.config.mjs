import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * GitHub Pages configuration
 * --------------------------
 * Local development uses the production domain by default. The deploy workflow
 * overrides both values at build time so a project page works automatically:
 *
 *   SITE_URL=https://<user>.github.io
 *   BASE_PATH=/<repository>
 *
 * For a custom domain, set SITE_URL=https://nashvillecraftingclub.com and
 * BASE_PATH=/ (or simply remove those env vars from the workflow).
 */
const site = process.env.SITE_URL ?? 'https://nashvillecraftingclub.com';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
  site: 'https://nashvillecraftingclub.com',
  base: '/astro',
});


 

 