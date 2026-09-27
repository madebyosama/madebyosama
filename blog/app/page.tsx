import Link from 'next/link';
import YearList from '@/components/YearList';
import { getPosts } from '@/lib/posts';

// Re-check hourly, so posts with a future date appear on their own.
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <div className="intro">
        <h1 className="sr-only">Writing</h1>
        <p>
          I’m Muhammad Osama, a website designer and developer. This is where I write things down: product design,
          development, marketing, and the less technical parts of the job — training, talking to people, meeting new
          ones.
        </p>
        <p className="muted">
          Essays, short notes and links, newest first. <Link href="/about">More about me</Link>.
        </p>
      </div>
      <YearList posts={getPosts()} />
    </>
  );
}
