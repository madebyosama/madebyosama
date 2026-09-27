import Link from 'next/link';
import PostRows from '@/components/PostRows';
import { getPosts } from '@/lib/posts';

export default function NotFound() {
  return (
    <>
      <h1>Page not found.</h1>
      <p>
        Nothing lives at this address. <Link href="/">Go home</Link>, or try one of the latest posts.
      </p>
      <section className="year" aria-labelledby="latest">
        <h2 className="label" id="latest">
          Latest
        </h2>
        <PostRows posts={getPosts().slice(0, 5)} />
      </section>
    </>
  );
}
