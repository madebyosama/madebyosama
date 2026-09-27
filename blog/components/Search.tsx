'use client';
// Search runs in the browser over every post's text. No index, no service.
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Item = { slug: string; title: string; date: string; summary: string; text: string };

export default function Search({ posts }: { posts: Item[] }) {
  const [q, setQ] = useState('');

  // Support links like /search?q=typography
  useEffect(() => setQ(new URLSearchParams(location.search).get('q') ?? ''), []);

  const words = q.toLowerCase().split(/\s+/).filter(Boolean);
  const results = words.length ? posts.filter((p) => words.every((w) => p.text.includes(w))) : [];

  return (
    <>
      <form className="inline" role="search" onSubmit={(e) => e.preventDefault()}>
        <label className="sr-only" htmlFor="q">
          Search posts
        </label>
        <input
          id="q"
          type="search"
          placeholder="Search posts…"
          autoComplete="off"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            history.replaceState(null, '', e.target.value ? `?q=${encodeURIComponent(e.target.value)}` : location.pathname);
          }}
        />
      </form>
      <p className="small" role="status">
        {words.length > 0 && `${results.length} ${results.length === 1 ? 'result' : 'results'}`}
      </p>
      <ul className="results">
        {results.map((p) => (
          <li key={p.slug}>
            <Link href={`/${p.slug}`}>{p.title}</Link> <span className="small">{p.date}</span>
            <p className="small">{p.summary}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
