import { formatLong, getPage, isoDate } from '@/lib/posts';

// About, Now: a Markdown file from content/pages/.
export default async function MarkdownPage({ name }: { name: string }) {
  const page = await getPage(name);
  return (
    <article>
      <header className="post-header">
        <h1>{page.title}</h1>
        {page.updated && (
          <p className="meta">
            Updated <time dateTime={isoDate(page.updated)}>{formatLong(page.updated)}</time>
          </p>
        )}
      </header>
      <div className="prose" dangerouslySetInnerHTML={{ __html: page.html }} />
    </article>
  );
}
