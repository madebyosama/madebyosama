# Blog posts

Each post is one Markdown file in this folder, and becomes its own page: `posts/walks-count.md` is published at **madebyosama.com/walks-count**. The homepage's Blog section lists every post automatically, newest first.

## Add a post

Create `posts/my-new-post.md` (lowercase words joined by hyphens), start it with this block, and write the post underneath:

```yaml
---
title: "My new post"
description: "One sentence for the homepage list, Google and link previews."
date: 2026-10-03
type: essay                    # essay | note | link
topics: [design, development]  # design, development, product, marketing, fitness, communication, networking
draft: false
---
```

Commit and push. Vercel rebuilds the site, and the post is live in about a minute.

- `description` is optional for notes (the start of the text is used instead).
- For a post about a link, set `type: link` and add `link: https://…`. The page shows a "Visit …" button.
- `updated: 2026-10-10` shows an "Updated" date.
- `draft: true` keeps a post off the site. A post with a future `date` goes live on the first deploy after that date.

If something in the block is wrong (a missing title, an unknown topic), the build stops with a message saying which file and what to fix, and the live site stays as it was.

## Writing

- Standard Markdown: headings (`##`), lists, links, quotes, code blocks, tables.
- `==highlight==` for a highlighter mark.
- Footnotes: `text[^1]`, then `[^1]: the note` on its own line.
- Images: put the file in `assets/images/posts/<post-name>/`, then
  `![Describe the image](/assets/images/posts/<post-name>/photo.jpg "Optional caption")`.
  Compress photos first (1600px wide is plenty).

## Preview locally

```sh
npm install
npm run build      # writes the site to dist/
npx serve dist     # http://localhost:3000
```
