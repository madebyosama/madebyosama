import type { MetadataRoute } from 'next';
import { SITE, TOPICS } from '@/site.config';
import { getPosts } from '@/lib/posts';

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  const topics = Object.keys(TOPICS).filter((t) => posts.some((p) => p.topics.includes(t as keyof typeof TOPICS)));
  return [
    ...['', '/topics', '/about', '/now', '/search'].map((path) => ({ url: `${SITE.url}${path}` })),
    ...topics.map((t) => ({ url: `${SITE.url}/topics/${t}` })),
    ...posts.map((p) => ({ url: `${SITE.url}/${p.slug}`, lastModified: p.updated ?? p.date })),
  ];
}
