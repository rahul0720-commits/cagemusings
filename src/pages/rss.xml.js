import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
	const poems = await getCollection('poems')
	return rss({
		title: 'Cage Musings',
		description: 'Poetry in English & Hindi by Hemani Sehgal',
		site: context.site,
		items: poems.map((poem) => ({
			title: poem.data.title,
			pubDate: poem.data.pubDate,
			description: poem.data.excerpt || '',
			link: `/poems/${poem.slug}/`,
		})),
	})
}
