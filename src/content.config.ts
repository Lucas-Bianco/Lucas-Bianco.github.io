// Content collections: projects and notes are Markdown/MDX files.
// Add a project = add a folder in src/content/projects/<slug>/ with index.mdx + photos.
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/index.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),                 // one sentence, shown on cards + meta description
      category: z.enum(['engineering', 'robotics', 'software', 'making']),
      order: z.number(),                   // lower = earlier in lists (engineering first)
      featured: z.boolean().default(false),
      status: z.enum(['done', 'ongoing', 'early']),
      started: z.string(),                 // "2026-03" style
      ended: z.string().optional(),
      role: z.string(),
      team: z.string(),                    // "Solo" or "Team of 6 (first names only)"
      tools: z.array(z.string()),
      cover: image(),
      coverAlt: z.string(),
      links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
      results: z.array(z.string()).default([]),  // short measured facts for the title block
    }),
})

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    project: z.string().optional(),        // slug of a related project
  }),
})

export const collections = { projects, notes }
