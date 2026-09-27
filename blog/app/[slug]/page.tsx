import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE, TOPICS } from '@/site.config';
import { formatLong, getPost, getPosts, hostname, isoDate, postHtml, summary } from '@/lib/posts';

export const revalidate = 3600;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: summary(post),
    openGraph: { type: 'article', title: post.title, description: summary(post), publishedTime: post.date.toISOString() },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const posts = getPosts(); // newest first
  const index = posts.findIndex((p) => p.slug === slug);
  const post = posts[index];
  if (!post) notFound();

  const newer = posts[index - 1];
  const older = posts[index + 1];
  const html = await postHtml(post);
  const url = `${SITE.url}/${post.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: summary(post),
    datePublished: post.date.toISOString(),
    dateModified: (post.updated ?? post.date).toISOString(),
    url,
    image: `${url}/opengraph-image`,
    author: { '@type': 'Person', name: SITE.author, url: SITE.links.home },
  };

  return (
    <>
      <Link className="back" href="/">
        ← Writing
      </Link>
      <article>
        <header className="post-header">
          <h1>
            {post.type === 'link' && post.link ? (
              <a className="ext" href={post.link}>
                {post.title}
              </a>
            ) : (
              post.title
            )}
          </h1>
          <p className="meta">
            <time dateTime={isoDate(post.date)}>{formatLong(post.date)}</time>
            {post.updated && <> (updated {formatLong(post.updated)})</>}
            {` · ${post.minutes} min read`}
            {post.topics.map((t, i) => (
              <span key={t}>
                {i === 0 ? ' · ' : ', '}
                <Link href={`/topics/${t}`}>{TOPICS[t]}</Link>
              </span>
            ))}
            {post.link && (
              <>
                {' · via '}
                <a href={post.link}>{hostname(post.link)}</a>
              </>
            )}
          </p>
        </header>
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <footer className="post-end">
        <p>
          <a href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Re: ${post.title}`)}`}>Reply via email</a>
          <span className="muted"> — I read everything.</span>
        </p>
        {(older || newer) && (
          <nav className="pager" aria-label="More posts">
            <p>
              {older && (
                <>
                  <span className="small">← Previous</span>
                  <br />
                  <Link href={`/${older.slug}`}>{older.title}</Link>
                </>
              )}
            </p>
            <p>
              {newer && (
                <>
                  <span className="small">Next →</span>
                  <br />
                  <Link href={`/${newer.slug}`}>{newer.title}</Link>
                </>
              )}
            </p>
          </nav>
        )}
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
