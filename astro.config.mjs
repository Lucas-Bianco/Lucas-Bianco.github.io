// Astro config for lucasbianco.com
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://lucasbianco.com',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  image: {
    // responsive images by default: Astro makes several sizes + modern formats
    layout: 'constrained',
  },
})
