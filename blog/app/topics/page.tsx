import type { Metadata } from 'next';
import Link from 'next/link';
import { TOPICS, type Topic } from '@/site.config';
import { getPosts } from '@/lib/posts';

export const revalidate = 3600;
export const metadata: Metadata = { title: 'Topics', description: 'Everything on the blog, sorted by topic.' };

export default function TopicsPage() {
  const posts = getPosts();
  const topics = (Object.keys(TOPICS) as Topic[])
    .map((slug) => ({ slug, count: posts.filter((p) => p.topics.includes(slug)).length }))
    .filter((t) => t.count > 0);

  return (
    <>
      <h1 className="label">Topics</h1>
      <ul className="rows">
        {topics.map((t) => (
          <li key={t.slug} className="topic-row">
            <Link href={`/topics/${t.slug}`}>{TOPICS[t.slug]}</Link>
            <span className="count">
              {t.count} {t.count === 1 ? 'post' : 'posts'}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
