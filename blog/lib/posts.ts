// Reads posts from content/posts/*.md. One file = one post, URL = /file-name.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { z } from 'zod';
import { TOPICS, type Topic } from '@/site.config';
import { renderMarkdown } from './markdown';

const POSTS_DIR = join(process.cwd(), 'content/posts');
const PAGES_DIR = join(process.cwd(), 'content/pages');

// Empty CMS fields ('' or null) count as missing.
const blank = (v: unknown) => (v === '' || v === null ? undefined : v);

const schema = z
  .object({
    title: z.string().min(1),
    description: z.preprocess(blank, z.string().optional()),
    date: z.coerce.date(),
    updated: z.preprocess(blank, z.coerce.date().optional()),
    type: z.enum(['essay', 'note', 'link']),
    link: z.preprocess(blank, z.url().optional()),
    topics: z.array(z.enum(Object.keys(TOPICS) as [Topic, ...Topic[]])).default([]),
    draft: z.boolean().default(false),
  })
  .refine((p) => p.type !== 'link' || p.link, { path: ['link'], message: 'Link posts need a `link:` URL.' })
  .refine((p) => p.draft || p.type === 'note' || p.description, {
    path: ['description'],
    message: 'Essays and links need a one-sentence `description` (notes may skip it).',
  });

export type Post = z.infer<typeof schema> & { slug: string; body: string; minutes: number };

let cache: Post[] | undefined;

function loadAll(): Post[] {
  if (cache && process.env.NODE_ENV === 'production') return cache;
  cache = readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const { data, content } = matter(readFileSync(join(POSTS_DIR, file), 'utf8'));
      const parsed = schema.safeParse(data);
      if (!parsed.success) {
        const problems = parsed.error.issues.map((i) => `  - ${i.path.join('.') || 'frontmatter'}: ${i.message}`);
        throw new Error(`content/posts/${file} has invalid frontmatter:\n${problems.join('\n')}`);
      }
      return {
        ...parsed.data,
        slug: file.replace(/\.md$/, ''),
        body: content,
        minutes: Math.max(1, Math.round(readingTime(content).minutes)),
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
  return cache;
}

/** Drafts show only in `npm run dev`. Future-dated posts appear once their date arrives. */
export const isScheduled = (post: Post) => post.date.getTime() > Date.now();

export function getPosts(): Post[] {
  const dev = process.env.NODE_ENV === 'development';
  return loadAll().filter((p) => dev || (!p.draft && !isScheduled(p)));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function postHtml(post: Post): Promise<string> {
  return renderMarkdown(post.body);
}

export function groupByYear(posts: Post[]): [number, Post[]][] {
  const years = new Map<number, Post[]>();
  for (const p of posts) {
    const y = p.date.getUTCFullYear();
    years.set(y, [...(years.get(y) ?? []), p]);
  }
  return [...years];
}

/** The description, or the start of the text for notes without one. */
export function summary(post: Post, max = 160): string {
  if (post.description) return post.description;
  const text = post.body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>#=~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > max ? `${text.slice(0, max).replace(/\s+\S*$/, '')}…` : text;
}

/** About, Now: content/pages/<name>.md */
export async function getPage(name: string) {
  const { data, content } = matter(readFileSync(join(PAGES_DIR, `${name}.md`), 'utf8'));
  return {
    title: String(data.title),
    description: String(data.description ?? ''),
    updated: data.updated ? new Date(data.updated) : undefined,
    html: await renderMarkdown(content),
  };
}

// Frontmatter dates are calendar dates: format in UTC so the 26th never shows as the 25th.
const short = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
const long = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' });
export const formatShort = (d: Date) => short.format(d); // Sep 26
export const formatLong = (d: Date) => long.format(d); // September 26, 2026
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
export const hostname = (url: string) => new URL(url).hostname.replace(/^www\./, '');
