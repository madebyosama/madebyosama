// Builds the site into dist/ for Vercel (`npm run build`).
//
// - Every posts/<slug>.md becomes its own page at madebyosama.com/<slug>
// - The post lists in index.html are regenerated: the footer's latest three and the full list in "More about me"
// - sitemap.xml lists the homepage and every post
//
// Drafts (draft: true) and posts dated in the future are left out until they're due
// (they appear on the first deploy after their date).
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const SITE = 'https://www.madebyosama.com';
const AUTHOR = 'Muhammad Osama';
const EMAIL = 'hello@madebyosama.com';
const TOPICS = {
  design: 'Design',
  development: 'Development',
  product: 'Product',
  marketing: 'Marketing',
  fitness: 'Fitness',
  communication: 'Communication',
  networking: 'Networking',
};
const TYPES = ['essay', 'note', 'link'];
// Personal topics stay on the site but out of the homepage footer, which is read by clients.
const PERSONAL = ['fitness'];
const DEFAULT_IMAGE = { url: `${SITE}/assets/images/og-image.jpg`, alt: 'Muhammad Osama, website designer and developer' };

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIST = join(ROOT, 'dist');
const POSTS_DIR = join(ROOT, 'posts');

// ---------- read posts ----------

function fail(file, message) {
  console.error(`\nposts/${file}: ${message}\n`);
  process.exit(1);
}

// Just enough YAML for frontmatter: `key: value`, quoted strings, [lists], booleans.
function parseFrontmatter(file, text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!m) fail(file, 'is missing the --- frontmatter block at the top.');
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const kv = /^([A-Za-z_]+):\s*(.*)$/.exec(line);
    if (!kv) fail(file, `can't read this frontmatter line: "${line}"`);
    let value = kv[2].trim();
    if (/^\[.*\]$/.test(value)) {
      value = value.slice(1, -1).split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    } else if (value === 'true' || value === 'false') {
      value = value === 'true';
    } else {
      value = value.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
    }
    data[kv[1]] = value;
  }
  return { data, body: text.slice(m[0].length) };
}

function readPosts() {
  const reserved = new Set(
    (JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf8')).redirects || []).map((r) => r.source.replace(/^\//, '')),
  );
  ['index', '404', 'assets', 'posts', 'scripts', 'robots', 'sitemap', 'favicon'].forEach((s) => reserved.add(s));

  return readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md') && f !== 'README.md')
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail(file, 'file names must be lowercase words joined by hyphens, like my-new-post.md');
      if (reserved.has(slug)) fail(file, `"/${slug}" is already used by the site. Rename the file.`);

      const { data, body } = parseFrontmatter(file, readFileSync(join(POSTS_DIR, file), 'utf8'));
      if (!data.title) fail(file, 'needs a `title:`.');
      if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date || '')) fail(file, 'needs a `date:` like 2026-10-03.');
      const type = data.type || 'essay';
      if (!TYPES.includes(type)) fail(file, `\`type:\` must be one of ${TYPES.join(', ')}.`);
      if (type === 'link' && !/^https?:\/\//.test(data.link || '')) fail(file, 'link posts need a `link:` URL.');
      if (type !== 'note' && !data.description && data.draft !== true) fail(file, 'essays and links need a one-sentence `description:`.');
      const topics = Array.isArray(data.topics) ? data.topics : [];
      for (const t of topics) if (!TOPICS[t]) fail(file, `unknown topic "${t}". Use: ${Object.keys(TOPICS).join(', ')}.`);
      if (data.updated && !/^\d{4}-\d{2}-\d{2}$/.test(data.updated)) fail(file, '`updated:` must look like 2026-10-03.');

      const words = body.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
      return {
        slug,
        title: data.title,
        description: data.description || '',
        date: data.date,
        updated: data.updated || '',
        type,
        link: data.link || '',
        topics,
        draft: data.draft === true,
        body,
        minutes: Math.max(1, Math.round(words / 220)),
      };
    })
    .filter((p) => !p.draft && new Date(`${p.date}T00:00:00Z`) <= new Date())
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// ---------- helpers ----------

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const dateLong = (d) => new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' });
const dateShort = (d) => new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
const hostname = (url) => new URL(url).hostname.replace(/^www\./, '');
const kindLabel = (p) => p.type[0].toUpperCase() + p.type.slice(1);
const topicList = (p) => p.topics.map((t) => TOPICS[t]).join(', ');

/** The description, or the start of the text for notes without one. */
function summary(post, max = 160) {
  if (post.description) return post.description;
  const text = post.body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[\^[^\]]+\]/g, '')
    .replace(/[*_`>#=~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > max ? `${text.slice(0, max).replace(/\s+\S*$/, '')}…` : text;
}

/** The post's first image, for link previews; the site card if it has none. */
function shareImage(post) {
  const m = /!\[([^\]]*)\]\((\/[^)\s]+)/.exec(post.body);
  return m ? { url: `${SITE}${m[2]}`, alt: m[1] || post.title } : DEFAULT_IMAGE;
}

// ---------- markdown ----------

marked.use({
  gfm: true,
  extensions: [
    {
      // ==highlight== becomes <mark>highlight</mark>
      name: 'mark',
      level: 'inline',
      start: (src) => {
        const i = src.indexOf('==');
        return i < 0 ? undefined : i;
      },
      tokenizer(src) {
        const m = /^==(?=\S)([\s\S]*?\S)==/.exec(src);
        if (m) return { type: 'mark', raw: m[0], tokens: this.lexer.inlineTokens(m[1]) };
      },
      renderer(token) {
        return `<mark>${this.parser.parseInline(token.tokens)}</mark>`;
      },
    },
  ],
});

function renderMarkdown(md) {
  // Footnotes: "text[^1]" in the post, "[^1]: the note" on its own line.
  const notes = [];
  md = md.replace(/^\[\^([^\]]+)\]:[ \t]+(.+)$/gm, (_, id, text) => {
    notes.push({ id, text });
    return '';
  });
  md = md.replace(/\[\^([^\]]+)\]/g, (ref, id) => {
    const n = notes.findIndex((note) => note.id === id) + 1;
    return n ? `<sup><a href="#fn-${esc(id)}" id="fnref-${esc(id)}">${n}</a></sup>` : ref;
  });

  let html = marked.parse(md);
  if (notes.length) {
    html += `<section class="footnotes" aria-label="Footnotes"><ol>${notes
      .map((n) => `<li id="fn-${esc(n.id)}">${marked.parseInline(n.text)} <a href="#fnref-${esc(n.id)}" aria-label="Back to text">&#8617;</a></li>`)
      .join('')}</ol></section>`;
  }

  const used = new Set();
  return (
    html
      // ![alt](src "caption") on its own line becomes a figure with a caption.
      .replace(/<p><img src="([^"]+)" alt="([^"]*)" title="([^"]*)"\s*\/?><\/p>/g, '<figure><img src="$1" alt="$2"><figcaption>$3</figcaption></figure>')
      // Relative image paths are relative to the site root.
      .replace(/<img src="(?!https?:|\/)([^"]+)"/g, '<img src="/$1"')
      .replace(/<img /g, '<img loading="lazy" decoding="async" ')
      .replace(/<table>/g, '<div class="post-table"><table>')
      .replace(/<\/table>/g, '</table></div>')
      .replace(/<a href="(https?:[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"')
      // Headings get ids, so sections can be linked to.
      .replace(/<(h[23])>([\s\S]*?)<\/\1>/g, (_, tag, inner) => {
        let id = inner.replace(/<[^>]+>/g, '').toLowerCase().replace(/&[a-z]+;|&#\d+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        while (used.has(id)) id += '-2';
        used.add(id);
        return `<${tag} id="${id}">${inner}</${tag}>`;
      })
  );
}

// ---------- templates ----------

// "More about me": every post, with its summary.
function allPostRows(posts) {
  return posts
    .map(
      (p) => `            <li>
              <a class="post-row" href="/${p.slug}">
                <span class="post-main">
                  <span class="post-title">${esc(p.title)}</span>
                  <span class="post-sub">${esc(summary(p, 120))}</span>
                  <span class="post-kind">${[kindLabel(p), topicList(p)].filter(Boolean).join(' &middot; ')}</span>
                </span>
                <span class="post-date">${dateShort(p.date)}</span>
              </a>
            </li>`,
    )
    .join('\n');
}

// Homepage footer: the latest three posts.
function blogRows(posts) {
  return posts
    .filter((p) => !p.topics.some((t) => PERSONAL.includes(t)))
    .slice(0, 3)
    .map((p) => `        <li><a href="/${p.slug}">${esc(p.title)}</a><span>${dateShort(p.date)}</span></li>`)
    .join('\n');
}

function postPage(post, older, newer) {
  const url = `${SITE}/${post.slug}`;
  const description = summary(post);
  const image = shareImage(post);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description,
        url,
        mainEntityOfPage: url,
        datePublished: post.date,
        dateModified: post.updated || post.date,
        image: image.url,
        keywords: post.topics.map((t) => TOPICS[t]),
        author: { '@type': 'Person', '@id': `${SITE}/#person`, name: AUTHOR, url: `${SITE}/` },
        publisher: { '@type': 'Person', '@id': `${SITE}/#person`, name: AUTHOR, url: `${SITE}/` },
        isPartOf: { '@id': `${SITE}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: post.title, item: url },
        ],
      },
    ],
  };
  const meta = [`<time datetime="${post.date}">${dateLong(post.date)}</time>`];
  if (post.updated) meta.push(`Updated <time datetime="${post.updated}">${dateLong(post.updated)}</time>`);
  meta.push(`${post.minutes} min read`);
  if (post.topics.length) meta.push(esc(topicList(post)));

  const pager = older || newer
    ? `<nav class="pager" aria-label="More posts">
        <div>${older ? `<span class="pager-label">Previous</span><a href="/${older.slug}">${esc(older.title)}</a>` : ''}</div>
        <div>${newer ? `<span class="pager-label">Next</span><a href="/${newer.slug}">${esc(newer.title)}</a>` : ''}</div>
      </nav>`
    : '';

  return TEMPLATE.replaceAll('{{title}}', esc(post.title))
    .replaceAll('{{description}}', esc(description))
    .replaceAll('{{url}}', url)
    .replaceAll('{{date}}', post.date)
    .replace('{{modified}}', post.updated || post.date)
    .replaceAll('{{image}}', image.url)
    .replaceAll('{{imageAlt}}', esc(image.alt))
    .replace('{{jsonld}}', JSON.stringify(jsonLd, null, 2).replace(/</g, '\\u003c'))
    .replace('{{meta}}', meta.join(' <span aria-hidden="true">&middot;</span> '))
    .replace(
      '{{source}}',
      post.link
        ? `<a class="post-source" href="${esc(post.link)}" target="_blank" rel="noopener noreferrer">Visit ${esc(hostname(post.link))} <svg class="icon" aria-hidden="true"><use href="#i-arrow-up-right-from-square"/></svg></a>`
        : '',
    )
    .replace('{{body}}', renderMarkdown(post.body))
    .replace('{{reply}}', `mailto:${EMAIL}?subject=${encodeURIComponent(`Re: ${post.title}`)}`)
    .replace('{{pager}}', pager);
}

const TEMPLATE = readFileSync(join(ROOT, 'scripts/post-template.html'), 'utf8');

// ---------- build ----------

const posts = readPosts();

// 1. Post lists in index.html (also written back, so the repo stays current):
//    posts:start/end is the footer's latest three, all-posts:start/end the full list.
let html = readFileSync(join(ROOT, 'index.html'), 'utf8');
for (const [name, rows] of [['posts', blogRows(posts)], ['all-posts', allPostRows(posts)]]) {
  const markers = new RegExp(`(<!-- ${name}:start -->)[\\s\\S]*?(\\n[ \\t]*<!-- ${name}:end -->)`);
  if (!markers.test(html)) {
    console.error(`index.html is missing the <!-- ${name}:start --> / <!-- ${name}:end --> markers.`);
    process.exit(1);
  }
  html = html.replace(markers, (_, start, end) => `${start}\n${rows}${end}`);
}
writeFileSync(join(ROOT, 'index.html'), html);

// 2. Sitemap: homepage + posts.
const latest = [...posts.map((p) => p.updated || p.date), readFileSync(join(ROOT, 'sitemap.xml'), 'utf8').match(/<lastmod>([\d-]+)<\/lastmod>/)?.[1] || '']
  .sort()
  .pop();
writeFileSync(
  join(ROOT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE}/</loc>
    <lastmod>${latest}</lastmod>
  </url>
${posts
  .map(
    (p) => `  <url>
    <loc>${SITE}/${p.slug}</loc>
    <lastmod>${p.updated || p.date}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`,
);

// 3. dist/: the static site plus one page per post.
rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST);
for (const f of ['index.html', '404.html', 'robots.txt', 'sitemap.xml', 'favicon.ico']) cpSync(join(ROOT, f), join(DIST, f));
cpSync(join(ROOT, 'assets'), join(DIST, 'assets'), { recursive: true });
posts.forEach((post, i) => writeFileSync(join(DIST, `${post.slug}.html`), postPage(post, posts[i + 1], posts[i - 1])));

console.log(`Built ${posts.length} post${posts.length === 1 ? '' : 's'}: ${posts.map((p) => `/${p.slug}`).join(', ') || 'none'}`);
if (!existsSync(join(DIST, 'index.html'))) process.exit(1);
