import PostRows from './PostRows';
import { groupByYear, type Post } from '@/lib/posts';

export default function YearList({ posts }: { posts: Post[] }) {
  return groupByYear(posts).map(([year, list]) => (
    <section className="year" key={year} aria-labelledby={`y${year}`}>
      <h2 className="label" id={`y${year}`}>
        {year}
      </h2>
      <PostRows posts={list} />
    </section>
  ));
}
