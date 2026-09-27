# madebyosama.com/blog

Muhammad Osama's blog, built with Next.js from plain Markdown files. It lives in the `blog/` folder of the madebyosama repo and is served at `madebyosama.com/blog`. It's set in Stack Sans Headline (Google Fonts) and hosted on Vercel.

```sh
cd blog
npm install
npm run dev      # http://localhost:3000/blog (drafts and scheduled posts are shown here)
npm run build    # production build; stops with a clear message if a post's frontmatter is wrong
```

## Write a post

```sh
npm run new -- "Why I design in the browser"            # essay
npm run new -- "Walks count" --note                     # short note
npm run new -- "Practical Typography" --link https://practicaltypography.com/
```

This creates `content/posts/<slug>.md`, which becomes the page `/blog/<slug>`. The file starts as a draft. Write the post, set `draft: false`, then commit and push. Vercel publishes it in about a minute.

```yaml
---
title: "Why I design in the browser"
description: "One sentence for search engines and link previews."  # optional for notes
date: 2026-09-26
updated: 2026-10-02            # optional
type: essay                    # essay | note | link
link: https://example.com      # required when type is link
topics: [design, development]
draft: false
---
```

In the post body you can use:
- `==highlight==` for a highlighter mark
- footnotes: `text[^1]`, then `[^1]: the note`
- tables
- code blocks, with an optional filename label: ` ```ts title="app/page.tsx" `

Headings get a `#` link, and external links get a small ↗ automatically.

## Images

Put the file in `public/images/`, then reference it:

```md
![Describe the image](/images/my-post/photo.jpg "Optional caption shown below it")
```

Write paths from the blog's root (`/images/...`, `/about`); the `/blog` prefix is added automatically. Width and height are added automatically too, so the page doesn't jump while the image loads. Compress large photos before adding them (1600px wide is plenty).

## Scheduling

Give a post a future `date` and set `draft: false`. Pages refresh hourly on Vercel, so the post appears within an hour of its date. There's no cron job to maintain.

## Topics

Add a topic in **`site.config.ts`** under `TOPICS`, and also add it to `.pages.yml` if you use the CMS. That file also holds the site name, tagline, email and social links.

## Deploy on Vercel

The blog is its own Vercel project; the main site forwards `/blog` to it (see `rewrites` in the repo-root `vercel.json`).

1. At https://vercel.com/new, import the madebyosama repo **again** as a new project named `madebyosama-blog`.
2. Set **Root Directory** to `blog`. Vercel detects Next.js; leave everything else at the defaults and click **Deploy**.
3. Check that the project's production URL is `https://madebyosama-blog.vercel.app`. If Vercel gave it a different one, put that URL in the two `rewrites` in the repo-root `vercel.json`.
4. Don't add a custom domain to this project: visitors reach it through `madebyosama.com/blog`.

After that, every push to `main` redeploys the blog. The main site's project ignores the `blog/` folder (see the repo-root `.vercelignore`).

## Edit from your phone (optional)

[Pages CMS](https://pagescms.org) edits the same Markdown files through GitHub, as configured in `.pages.yml`. Sign in at https://app.pagescms.org and open this repository.

## Files

```
content/posts/        the writing (one .md file per post)
content/pages/        about.md, now.md
public/images/        images used in posts
site.config.ts        name, links, topics, base path (/blog)
app/                  pages (home, post, topics, about, now, search, RSS, sitemap, share images)
app/globals.css       the only stylesheet; colours are at the top
lib/posts.ts          reads and checks the Markdown files
lib/markdown.ts       Markdown → HTML
assets/               font files for the share images
```
