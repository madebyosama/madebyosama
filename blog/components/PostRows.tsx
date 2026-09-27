import Link from 'next/link';
import { formatShort, isoDate, isScheduled, type Post } from '@/lib/posts';

// Rows of posts: short date in a fixed column, title beside it.
export default function PostRows({ posts }: { posts: Post[] }) {
  return (
    <ul className="rows">
      {posts.map((post) => (
        <li key={post.slug}>
          <time dateTime={isoDate(post.date)}>{formatShort(post.date)}</time>
          <span>
            <Link href={`/${post.slug}`}>{post.title}</Link>
            {post.type === 'link' && (
              <>
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
                <span className="sr-only">(link)</span>
              </>
            )}
            {post.draft && <span className="flag">draft</span>}
            {isScheduled(post) && <span className="flag">scheduled</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}
