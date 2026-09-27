import type { Metadata } from 'next';
import Search from '@/components/Search';
import { TOPICS } from '@/site.config';
import { formatShort, getPosts, summary } from '@/lib/posts';

export const revalidate = 3600;
export const metadata: Metadata = { title: 'Search', description: 'Search everything on the blog.' };

export default function SearchPage() {
  const posts = getPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    date: formatShort(p.date),
    summary: summary(p),
    // What the search looks through: title, description, topics and the text itself.
    text: [p.title, p.description, ...p.topics.map((t) => TOPICS[t]), p.body].join(' ').toLowerCase(),
  }));
  return (
    <>
      <h1 className="label">Search</h1>
      <Search posts={posts} />
    </>
  );
}
