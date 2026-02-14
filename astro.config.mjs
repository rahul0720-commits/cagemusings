import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import rehypeFigureTitle from 'rehype-figure-title'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'

// https://astro.build/config
export default defineConfig({
	site: 'https://cagemusings.com',
	integrations: [
		mdx(),
		sitemap(),
		icon(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		rehypePlugins: [rehypeFigureTitle, rehypeAccessibleEmojis],
	},
})
