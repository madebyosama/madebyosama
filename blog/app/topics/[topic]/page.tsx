import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import YearList from '@/components/YearList';
import { TOPICS, type Topic } from '@/site.config';
import { getPosts } from '@/lib/posts';

export const revalidate = 3600;

type Props = { params: Promise<{ topic: string }> };

export function generateStaticParams() {
  const used = new Set(getPosts().flatMap((p) => p.topics));
  return [...used].map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const label = TOPICS[(await params).topic as Topic];
  return label ? { title: label, description: `Posts about ${label.toLowerCase()} by Muhammad Osama.` } : {};
}

export default async function TopicPage({ params }: Props) {
  const topic = (await params).topic as Topic;
  const posts = topic in TOPICS ? getPosts().filter((p) => p.topics.includes(topic)) : [];
  if (posts.length === 0) notFound();

  return (
    <>
      <Link className="back" href="/topics">
        ← Topics
      </Link>
      <h1>{TOPICS[topic]}</h1>
      <p className="meta">
        {posts.length} {posts.length === 1 ? 'post' : 'posts'}
      </p>
      <YearList posts={posts} />
    </>
  );
}
