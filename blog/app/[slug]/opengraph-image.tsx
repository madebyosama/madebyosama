import { SITE } from '@/site.config';
import { formatLong, getPost, getPosts } from '@/lib/posts';
import { ogImage, ogSize } from '@/lib/og';

export const size = ogSize;
export const contentType = 'image/png';
export const alt = 'Post title';

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  return ogImage(post?.title, post ? `${SITE.author} · ${formatLong(post.date)}` : undefined);
}
