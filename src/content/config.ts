import { defineCollection, z } from 'astro:content'

const poems = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		language: z.enum(['en', 'hi']),
		tags: z.array(z.string()).optional(),
		excerpt: z.string().optional(),
	}),
})

export const collections = { poems }
