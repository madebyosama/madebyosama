import { SITE, TOPICS } from '@/site.config';
import { getPosts, postHtml, summary } from '@/lib/posts';

// Full-content RSS feed at /rss.xml.
export const revalidate = 3600;

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const cdata = (s: string) => `<![CDATA[${s.replaceAll(']]>', ']]]]><![CDATA[>')}]]>`;

const origin = new URL(SITE.url).origin;

export async function GET() {
  const items = await Promise.all(
    getPosts().map(async (post) => {
      const url = `${SITE.url}/${post.slug}`;
      const html = (await postHtml(post))
        .replace(/<a[^>]*class="anchor"[^>]*>#<\/a>/g, '') // heading "#" links
        .replace(/(href|src)="\/(?!\/)/g, `$1="${origin}/`); // absolute URLs for feed readers
      const via = post.link ? `<p>↗ <a href="${post.link}">${post.link}</a></p>` : '';
      return `<item>
  <title>${esc(post.type === 'link' ? `↗ ${post.title}` : post.title)}</title>
  <link>${url}</link>
  <guid isPermaLink="true">${url}</guid>
  <pubDate>${post.date.toUTCString()}</pubDate>
  <description>${esc(summary(post))}</description>
  ${post.topics.map((t) => `<category>${TOPICS[t]}</category>`).join('')}
  <content:encoded>${cdata(via + html)}</content:encoded>
</item>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${esc(SITE.title)}</title>
  <link>${SITE.url}</link>
  <description>${esc(SITE.description)}</description>
  <language>en</language>
  <atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml"/>
${items.join('\n')}
</channel>
</rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
