// RSS feed for notes at /notes/rss.xml
import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'
import { site } from '../../data/site'

export async function GET(context: APIContext) {
  const notes = (await getCollection('notes')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  return rss({
    title: `${site.name}: Notes`,
    description: 'What building things actually taught me: real test results, mistakes I caught, and what I would do next.',
    site: `${site.url}/notes/`,
    items: notes.map((n) => ({
      title: n.data.title,
      description: n.data.summary,
      pubDate: n.data.date,
      link: `/notes/${n.id}/`,
    })),
    customData: '<language>en-us</language>',
  })
}
