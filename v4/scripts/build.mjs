// Builds the site into dist/ for Vercel (`npm run build`).
//
// - templates/layout.html wraps every page (header, footer, contact form, CSS, scripts).
// - templates/home.html is the homepage; its work cards are filled in here.
// - Every posts/<slug>.md becomes madebyosama.com/<slug>, and /blog lists them all.
// - Every work/<slug>.md becomes a homepage card. With a body, it also gets a case study at /work/<slug>.
// - Each page gets its own link-preview image (dist/og/*.png), structured data and a sitemap entry.
//
// Drafts (draft: true) and posts dated in the future are left out until they're due
// (they appear on the first deploy after their date).
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import { marked } from 'marked';
import { Resvg } from '@resvg/resvg-js';

const SITE = 'https://www.madebyosama.com';
const AUTHOR = 'Muhammad Osama';
const EMAIL = 'hello@madebyosama.com';
const PHONE = '+923352522522';
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
const SAME_AS = [
  'https://www.linkedin.com/in/madebyosama/',
  'https://www.instagram.com/madebyosama/',
  'https://www.facebook.com/madebyosama/',
  'https://x.com/madebyosama',
  'https://www.threads.net/@madebyosama',
  'https://www.youtube.com/@madebyosama',
  'https://github.com/madebyosama',
  'https://www.figma.com/@madebyosama',
  'https://fiverr.com/madebyosama',
];

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIST = join(ROOT, 'dist');
const read = (...p) => readFileSync(join(ROOT, ...p), 'utf8');

// ---------- content ----------

function fail(file, message) {
  console.error(`\n${file}: ${message}\n`);
  process.exit(1);
}

// Just enough YAML for frontmatter: `key: value`, quoted strings, [lists] (items may be quoted), booleans.
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
      value = [...value.slice(1, -1).matchAll(/\s*(?:"([^"]*)"|'([^']*)'|([^,]+))/g)].map((x) => (x[1] ?? x[2] ?? x[3]).trim()).filter(Boolean);
    } else if (value === 'true' || value === 'false') {
      value = value === 'true';
    } else {
      value = value.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
    }
    data[kv[1]] = value;
  }
  return { data, body: text.slice(m[0].length) };
}

const mdFiles = (dir) => readdirSync(join(ROOT, dir)).filter((f) => f.endsWith('.md') && f !== 'README.md');
const slugOk = (s) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(s);

function readPosts() {
  const reserved = new Set((JSON.parse(read('vercel.json')).redirects || []).map((r) => r.source.replace(/^\//, '')));
  ['index', '404', 'assets', 'posts', 'scripts', 'templates', 'work', 'blog', 'og', 'rss', 'sitemap', 'robots', 'favicon'].forEach((s) => reserved.add(s));

  return mdFiles('posts')
    .map((file) => {
      const where = `posts/${file}`;
      const slug = file.replace(/\.md$/, '');
      if (!slugOk(slug)) fail(where, 'file names must be lowercase words joined by hyphens, like my-new-post.md');
      if (reserved.has(slug)) fail(where, `"/${slug}" is already used by the site. Rename the file.`);

      const { data, body } = parseFrontmatter(where, read('posts', file));
      if (!data.title) fail(where, 'needs a `title:`.');
      if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date || '')) fail(where, 'needs a `date:` like 2026-10-03.');
      const type = data.type || 'essay';
      if (!TYPES.includes(type)) fail(where, `\`type:\` must be one of ${TYPES.join(', ')}.`);
      if (type === 'link' && !/^https?:\/\//.test(data.link || '')) fail(where, 'link posts need a `link:` URL.');
      if (type !== 'note' && !data.description && data.draft !== true) fail(where, 'essays and links need a one-sentence `description:`.');
      const topics = Array.isArray(data.topics) ? data.topics : [];
      for (const t of topics) if (!TOPICS[t]) fail(where, `unknown topic "${t}". Use: ${Object.keys(TOPICS).join(', ')}.`);
      if (data.updated && !/^\d{4}-\d{2}-\d{2}$/.test(data.updated)) fail(where, '`updated:` must look like 2026-10-03.');

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

function readWork() {
  return mdFiles('work')
    .map((file) => {
      const where = `work/${file}`;
      const slug = file.replace(/\.md$/, '');
      if (!slugOk(slug)) fail(where, 'file names must be lowercase words joined by hyphens.');
      const { data, body } = parseFrontmatter(where, read('work', file));
      for (const key of ['title', 'url', 'image', 'summary', 'industry']) if (!data[key]) fail(where, `needs a \`${key}:\`.`);
      if (!existsSync(join(ROOT, data.image))) fail(where, `image ${data.image} doesn't exist.`);
      if (data.cover && !existsSync(join(ROOT, data.cover))) fail(where, `cover ${data.cover} doesn't exist.`);
      const results = (Array.isArray(data.results) ? data.results : []).map((r) => {
        const [value, label] = r.split('|').map((s) => s.trim());
        if (!label) fail(where, `results look like "1.4s | Load time", not "${r}".`);
        return { value, label };
      });
      return {
        ...data,
        slug,
        order: Number(data.order) || 99,
        services: Array.isArray(data.services) ? data.services : [],
        results,
        body: body.trim(),
        page: body.trim() ? `/work/${slug}` : '',
      };
    })
    .sort((a, b) => a.order - b.order);
}

// ---------- helpers ----------

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const dateLong = (d) => new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' });
const dateShort = (d) => new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const hostname = (url) => new URL(url).hostname.replace(/^www\./, '');
const kindLabel = (p) => p.type[0].toUpperCase() + p.type.slice(1);
const topicList = (p) => p.topics.map((t) => TOPICS[t]).join(', ');
const today = new Date().toISOString().slice(0, 10);
// "Load time" reads as "load time" mid-sentence, but "PageSpeed" stays as it is.
const lowerFirst = (s) => (/^[A-Z][a-z]*[A-Z]/.test(s) ? s : s[0].toLowerCase() + s.slice(1));
const icon = (id) => `<svg class="icon"><use href="#${id}"/></svg>`;

/** Date of the last commit touching these paths (the build date if git isn't available). */
function lastChanged(...paths) {
  try {
    return execSync(`git log -1 --format=%cs -- ${paths.join(' ')}`, { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim() || today;
  } catch {
    return today;
  }
}

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

/** Width and height of a WebP, PNG or JPEG, so every <img> reserves its space. */
function imageSize(path) {
  const b = readFileSync(join(ROOT, path));
  if (b.toString('ascii', 0, 4) === 'RIFF') {
    const chunk = b.toString('ascii', 12, 16);
    if (chunk === 'VP8X') return { width: 1 + b.readUIntLE(24, 3), height: 1 + b.readUIntLE(27, 3) };
    if (chunk === 'VP8 ') return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
    if (chunk === 'VP8L') {
      const bits = b.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
  }
  if (b.readUInt32BE(0) === 0x89504e47) return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  for (let i = 2; i < b.length; ) {
    const marker = b[i + 1];
    if (marker >= 0xc0 && marker <= 0xc3) return { width: b.readUInt16BE(i + 7), height: b.readUInt16BE(i + 5) };
    i += 2 + b.readUInt16BE(i + 2);
  }
  throw new Error(`Can't read the size of ${path}`);
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
      // Local images get their real size, so the text doesn't jump as they load.
      .replace(/<img src="(\/[^"]+)"/g, (m, src) => {
        if (!existsSync(join(ROOT, src))) return m;
        const { width, height } = imageSize(src);
        return `<img src="${src}" width="${width}" height="${height}"`;
      })
      .replace(/<img /g, '<img loading="lazy" decoding="async" ')
      .replace(/<table>/g, '<div class="table"><table>')
      .replace(/<\/table>/g, '</table></div>')
      .replace(/<a href="(https?:[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener"')
      // Headings get ids, so sections can be linked to.
      .replace(/<(h[23])>([\s\S]*?)<\/\1>/g, (_, tag, inner) => {
        let id = inner.replace(/<[^>]+>/g, '').toLowerCase().replace(/&[a-z]+;|&#\d+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        while (used.has(id)) id += '-2';
        used.add(id);
        return `<${tag} id="${id}">${inner}</${tag}>`;
      })
  );
}

// ---------- link-preview images ----------

const FONTS = ['Satoshi-Medium.ttf', 'Satoshi-Black.ttf'].map((f) => join(ROOT, 'scripts/fonts', f));
const AVATAR = `data:image/png;base64,${readFileSync(join(ROOT, 'assets/images/profile-pic.png')).toString('base64')}`;
const xml = (s) => esc(s).replace(/'/g, '&apos;');

/** Greedy word wrap by character count; good enough for one typeface at a known size. */
function wrap(text, perLine, maxLines) {
  const lines = [];
  for (const word of text.split(/\s+/)) {
    const last = lines[lines.length - 1];
    if (last && (last + ' ' + word).length <= perLine) lines[lines.length - 1] = `${last} ${word}`;
    else lines.push(word);
  }
  if (lines.length > maxLines) {
    lines.length = maxLines;
    lines[maxLines - 1] = lines[maxLines - 1].replace(/\s*\S*$/, '') + '…';
  }
  return lines;
}

/** 1200×630 card in the site's style: blue, big Satoshi Black title, author underneath. */
function ogImage(name, { eyebrow, title, subtitle = '' }) {
  let size = 84;
  let lines = wrap(title, 22, 3);
  if (lines.length > 2) {
    size = 64;
    lines = wrap(title, 29, 3);
  }
  const lineHeight = size * 1.08;
  const top = 250 - ((lines.length - 1) * lineHeight) / 2;
  const sub = subtitle ? wrap(subtitle, 62, 2) : [];
  const subTop = top + (lines.length - 1) * lineHeight + 64;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0025e8"/>
  <circle cx="1080" cy="40" r="260" fill="#fff" fill-opacity="0.06"/>
  <circle cx="90" cy="620" r="170" fill="#fff" fill-opacity="0.04"/>
  <g transform="translate(64 56) scale(1.5)" fill="#fff"><rect x="26" y="0" width="21.8" height="21.8" rx="10.9"/><rect x="32.6" y="6.6" width="8.7" height="8.7" rx="4.4" fill="#0025e8"/><rect x="0" y="0" width="7" height="22" rx="3.5"/><rect x="8" y="0" width="7" height="22" rx="3.5"/><rect x="16" y="0" width="7" height="22" rx="3.5"/></g>
  <text x="1136" y="84" text-anchor="end" font-family="Satoshi" font-weight="500" font-size="26" fill="#ffb5ea">${xml(eyebrow)}</text>
  ${lines.map((l, i) => `<text x="72" y="${top + i * lineHeight}" font-family="Satoshi" font-weight="900" font-size="${size}" letter-spacing="-2" fill="#fff">${xml(l)}</text>`).join('\n  ')}
  ${sub.map((l, i) => `<text x="72" y="${subTop + i * 40}" font-family="Satoshi" font-weight="500" font-size="30" fill="#fff" fill-opacity="0.82">${xml(l)}</text>`).join('\n  ')}
  <clipPath id="c"><circle cx="104" cy="538" r="32"/></clipPath>
  <image href="${AVATAR}" x="72" y="506" width="64" height="64" clip-path="url(#c)"/>
  <text x="156" y="532" font-family="Satoshi" font-weight="900" font-size="26" fill="#fff">Muhammad Osama</text>
  <text x="156" y="564" font-family="Satoshi" font-weight="500" font-size="22" fill="#fff" fill-opacity="0.75">Website designer &amp; developer</text>
  <text x="1136" y="548" text-anchor="end" font-family="Satoshi" font-weight="500" font-size="24" fill="#fff" fill-opacity="0.75">madebyosama.com</text>
</svg>`;
  const png = new Resvg(svg, { font: { fontFiles: FONTS, loadSystemFonts: false, defaultFontFamily: 'Satoshi' } }).render().asPng();
  mkdirSync(join(DIST, 'og'), { recursive: true });
  writeFileSync(join(DIST, 'og', `${name}.png`), png);
  return `${SITE}/og/${name}.png`;
}

// ---------- layout ----------

const LAYOUT = read('templates/layout.html');
const CSS = read('templates/site.css')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s*\n\s*/g, '\n')
  .trim();
const SYMBOLS = new Map(
  [...read('templates/icons.svg').matchAll(/<symbol id="([^"]+)"[\s\S]*?<\/symbol>/g)].map((m) => [m[1], m[0]]),
);
const BANNER = read('templates/banner.html');
const banner = (label, heading) => BANNER.replace('{{label}}', label).replace('{{heading}}', heading);

/** Only the icons a page uses (including icons used inside other icons) go into it. */
function iconsFor(html) {
  const used = new Set();
  const visit = (text) => {
    for (const [, id] of text.matchAll(/href="#([\w-]+)"/g)) {
      if (SYMBOLS.has(id) && !used.has(id)) {
        used.add(id);
        visit(SYMBOLS.get(id));
      }
    }
  };
  visit(html);
  return [...used].map((id) => SYMBOLS.get(id)).join('');
}

/**
 * One finished page. `title` is the full <title>; `ogTitle` (optional) is the shorter
 * one for link previews. `jsonld` is an array of schema.org nodes.
 */
function page({ path, title, ogTitle, description, ogType = 'website', image, imageAlt, jsonld, content, scripts = '', headExtra = '', robots = 'index, follow, max-image-preview:large' }) {
  const body = LAYOUT.replace('{{content}}', () => content);
  const graph = JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonld }).replace(/</g, '\\u003c');
  const html = body
    .replace('{{icons}}', () => iconsFor(body))
    .replace('{{css}}', () => CSS)
    .replace('{{jsonld}}', () => graph)
    .replace('{{headExtra}}', () => headExtra)
    .replace('{{scripts}}', () => scripts)
    .replaceAll('{{title}}', esc(title))
    .replaceAll('{{ogTitle}}', esc(ogTitle || title))
    .replaceAll('{{description}}', esc(description))
    .replaceAll('{{url}}', `${SITE}${path}`)
    .replaceAll('{{ogType}}', ogType)
    .replaceAll('{{image}}', image)
    .replaceAll('{{imageAlt}}', esc(imageAlt))
    .replaceAll('{{robots}}', robots)
    .replaceAll('{{year}}', String(new Date().getFullYear()));
  const leftover = /\{\{\w+\}\}/.exec(html);
  if (leftover) throw new Error(`${path}: ${leftover[0]} was never filled in.`);
  const file = path === '/' ? 'index.html' : `${path.slice(1)}.html`;
  mkdirSync(join(DIST, file, '..'), { recursive: true });
  writeFileSync(join(DIST, file), html);
}

const person = { '@type': 'Person', '@id': `${SITE}/#person`, name: AUTHOR, url: `${SITE}/` };
const breadcrumbs = (...items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE}${item}` })),
});

// ---------- fragments ----------

function postRow(p) {
  const kind = [kindLabel(p), topicList(p), `${p.minutes} min read`].filter(Boolean).join(' &middot; ');
  return `          <li><a class="post-row" href="/${p.slug}"><span><h2>${esc(p.title)}</h2><p>${esc(summary(p, 140))}</p><span class="post-kind">${kind}</span></span><time datetime="${p.date}">${dateShort(p.date)}</time></a></li>`;
}

/** The 600px copy of a work image (<name>-600.webp, cropped to the top of the page), if there is one. */
function small(image) {
  const path = image.replace(/\.webp$/, '-600.webp');
  return existsSync(join(ROOT, path)) ? path : '';
}

function workCard(w) {
  const src = small(w.image) || w.image;
  const { width, height } = imageSize(src);
  const external = !w.page;
  const href = external ? w.url : w.page;
  const label = external ? `Visit site${icon('i-arrow-up-right')}` : `Read case study${icon('i-arrow-right')}`;
  const results = w.results.length
    ? `<span class="results">${w.results.slice(0, 2).map((r) => `<span><strong>${esc(r.value)}</strong> ${esc(lowerFirst(r.label))}</span>`).join('')}</span>`
    : '';
  return `        <a class="work-card" href="${esc(href)}"${external ? ' target="_blank" rel="noopener"' : ''}>
          <span class="work-shot"><img src="${src}" alt="The ${esc(w.title)} website" width="${width}" height="${height}" loading="lazy" decoding="async" /><span class="work-label">${label}</span></span>
          <span class="work-info"><span><h3>${esc(w.title)}</h3><p>${esc(w.industry)}</p></span>${w.build ? `<span class="tag">${esc(w.build)}</span>` : ''}</span>
          ${results}
        </a>`;
}

function pager(prev, next, prefix = '/') {
  if (!prev && !next) return '';
  const link = (item, cls, text) => `<a class="${cls}" href="${prefix}${item.slug}"><span>${text}</span><strong>${esc(item.title)}</strong></a>`;
  return `<nav class="pager" aria-label="More">${prev ? link(prev, 'prev', 'Previous') : ''}${next ? link(next, 'next', 'Next') : ''}</nav>`;
}

// ---------- build ----------

const posts = readPosts();
const work = readWork();
const caseStudies = work.filter((w) => w.page);
const sitemap = [];

rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST);
for (const f of ['robots.txt', 'favicon.ico']) cpSync(join(ROOT, f), join(DIST, f));
cpSync(join(ROOT, 'assets'), join(DIST, 'assets'), { recursive: true });

// Homepage
{
  const siteChanged = lastChanged('templates', 'work');
  // The About video and its play button only appear once the file is there; until then, the green "available" dot.
  const hasVideo = existsSync(join(ROOT, 'assets/videos/intro.mp4'));
  const content = read('templates/home.html')
    .replace(/[ \t]*<!-- video:start -->[\s\S]*?<!-- video:end -->\n/, (m) => (hasVideo ? m : ''))
    .replace(/[ \t]*<!-- novideo:start -->[\s\S]*?<!-- novideo:end -->\n/, (m) => (hasVideo ? '' : m))
    .replace('{{work}}', () => work.map(workCard).join('\n'));

  // Structured data comes from the page itself, so it can't drift from what visitors see.
  const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').replace(/&amp;/g, '&').trim();
  const faqs = [...content.matchAll(/<summary>([\s\S]*?)<span class="plus"[\s\S]*?<div class="faq-answer">([\s\S]*?)<\/div>/g)].map((m) => ({
    '@type': 'Question',
    name: strip(m[1]),
    acceptedAnswer: { '@type': 'Answer', text: strip(m[2]) },
  }));
  const reviews = [...content.matchAll(/<blockquote>([\s\S]*?)<\/blockquote>[\s\S]*?<cite>([\s\S]*?)<\/cite>/g)].map((m) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: strip(m[2]) },
    reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    reviewBody: strip(m[1]),
  }));
  if (!faqs.length || !reviews.length) throw new Error('Could not find the FAQ or the reviews in templates/home.html.');

  const description = 'I design and build fast, custom websites for small businesses and agencies. Landing pages from $1,300, live in two weeks. 25+ five-star reviews.';
  const image = ogImage('home', { eyebrow: 'Freelance web design', title: 'Your website, built right.', subtitle: 'Fast, custom websites for small businesses and agencies. Landing pages from $1,300.' });
  const address = { '@type': 'PostalAddress', addressLocality: 'Wah Cantt', addressRegion: 'Punjab', addressCountry: 'PK' };
  page({
    path: '/',
    title: 'Freelance Website Designer & Developer | Muhammad Osama',
    ogTitle: 'Muhammad Osama | Website Designer & Developer',
    description,
    image,
    imageAlt: 'Your website, built right. Muhammad Osama, website designer and developer.',
    content,
    scripts: `<script>${read('templates/home.js')}</script>`,
    headExtra: '  <link rel="preload" as="image" href="/assets/images/hero/start-900.webp" imagesrcset="/assets/images/hero/start-600.webp 600w, /assets/images/hero/start-900.webp 900w, /assets/images/hero/start.webp 1800w" imagesizes="(max-width: 600px) calc(100vw + 48px), (max-width: 948px) 100vw, 900px" media="(prefers-reduced-motion: no-preference)" />',
    jsonld: [
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: 'Made by Osama',
        alternateName: ['Muhammad Osama', 'madebyosama'],
        inLanguage: 'en',
        publisher: { '@id': `${SITE}/#person` },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE}/#webpage`,
        url: `${SITE}/`,
        name: 'Freelance Website Designer & Developer | Muhammad Osama',
        description,
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': `${SITE}/#business` },
        primaryImageOfPage: image,
        dateModified: siteChanged,
      },
      {
        ...person,
        alternateName: 'Osama',
        image: `${SITE}/assets/images/profile-pic.webp`,
        jobTitle: 'Website Designer & Developer',
        description: 'Freelance website designer and developer who builds fast, custom websites for small businesses and agencies.',
        email: `mailto:${EMAIL}`,
        telephone: PHONE,
        address,
        worksFor: { '@id': `${SITE}/#business` },
        knowsAbout: ['Web design', 'Web development', 'Landing pages', 'WordPress', 'Figma', 'Website speed optimisation', 'SEO'],
        sameAs: SAME_AS,
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE}/#business`,
        name: 'Made by Osama',
        url: `${SITE}/`,
        image,
        logo: `${SITE}/assets/images/icon-192.png`,
        description,
        founder: { '@id': `${SITE}/#person` },
        email: EMAIL,
        telephone: PHONE,
        address,
        areaServed: 'Worldwide',
        priceRange: '$1,300+',
        sameAs: SAME_AS,
        aggregateRating: { '@type': 'AggregateRating', ratingValue: 5, bestRating: 5, reviewCount: 25 },
        review: reviews,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Website design and development',
          itemListElement: [
            ['Landing page design and development', 'A custom landing page designed in Figma and built responsive, ready in about 2 weeks.', '1300'],
            ['Multi-page website design and development', 'A custom multi-page website with a CMS so you can edit it yourself, ready in 2 to 6 weeks.', '3000'],
          ].map(([name, text, price]) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name, description: text, serviceType: 'Web design', provider: { '@id': `${SITE}/#person` } },
            priceSpecification: { '@type': 'PriceSpecification', minPrice: price, priceCurrency: 'USD' },
            url: `${SITE}/#pricing`,
          })),
        },
      },
      { '@type': 'FAQPage', '@id': `${SITE}/#faq`, mainEntity: faqs },
    ],
  });
  sitemap.push({ loc: '/', lastmod: [siteChanged, ...posts.map((p) => p.date)].sort().pop() });
}

// Posts
posts.forEach((post, i) => {
  const path = `/${post.slug}`;
  const description = summary(post);
  const kind = [kindLabel(post), topicList(post)].filter(Boolean).join(' · ');
  const image = ogImage(post.slug, { eyebrow: `Blog · ${dateShort(post.date)}`, title: post.title, subtitle: description });
  const meta = [`<time datetime="${post.date}">${dateLong(post.date)}</time>`];
  if (post.updated) meta.push(`Updated <time datetime="${post.updated}">${dateLong(post.updated)}</time>`);
  meta.push(`${post.minutes} min read`);
  if (post.topics.length) meta.push(esc(topicList(post)));

  const content = read('templates/post.html')
    .replace('{{title}}', () => esc(post.title))
    .replace('{{meta}}', () => meta.join(' <span aria-hidden="true">&middot;</span> '))
    .replace('{{lead}}', () => (post.description ? `<p class="lead">${esc(post.description)}</p>` : ''))
    .replace('{{source}}', () =>
      post.link ? `<p class="post-source"><a class="pill-link" href="${esc(post.link)}" target="_blank" rel="noopener">Visit ${esc(hostname(post.link))}${icon('i-arrow-up-right')}</a></p>` : '',
    )
    .replace('{{body}}', () => renderMarkdown(post.body))
    .replace('{{reply}}', () => `mailto:${EMAIL}?subject=${encodeURIComponent(`Re: ${post.title}`)}`)
    .replace('{{pager}}', () => pager(posts[i + 1], posts[i - 1]))
    .replace('{{banner}}', () => banner('Need a website?', 'I build fast, custom sites that <em>bring in work</em>.'));

  page({
    path,
    title: `${post.title} | Muhammad Osama`,
    ogTitle: post.title,
    description,
    ogType: 'article',
    image,
    imageAlt: post.title,
    content,
    headExtra: [
      `  <meta property="article:published_time" content="${post.date}" />`,
      `  <meta property="article:modified_time" content="${post.updated || post.date}" />`,
      `  <meta property="article:author" content="${SITE}/" />`,
      ...post.topics.map((t) => `  <meta property="article:tag" content="${TOPICS[t]}" />`),
    ].join('\n'),
    jsonld: [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description,
        url: `${SITE}${path}`,
        mainEntityOfPage: `${SITE}${path}`,
        datePublished: post.date,
        dateModified: post.updated || post.date,
        image,
        wordCount: post.body.split(/\s+/).filter(Boolean).length,
        articleSection: kind,
        keywords: post.topics.map((t) => TOPICS[t]),
        author: person,
        publisher: person,
        isPartOf: { '@type': 'Blog', '@id': `${SITE}/blog#blog` },
      },
      breadcrumbs(['Home', '/'], ['Blog', '/blog'], [post.title, path]),
    ],
  });
  sitemap.push({ loc: path, lastmod: post.updated || post.date });
});

// Blog index
{
  const description = 'Essays, notes and links on designing and building websites, by Muhammad Osama.';
  page({
    path: '/blog',
    title: 'Blog: Notes on Web Design and Development | Muhammad Osama',
    ogTitle: 'The blog | Muhammad Osama',
    description,
    image: ogImage('blog', { eyebrow: 'Blog', title: 'Notes on design and building for the web', subtitle: description }),
    imageAlt: 'Notes on design and building for the web, by Muhammad Osama',
    content: read('templates/blog.html')
      .replace('{{posts}}', () => posts.map(postRow).join('\n'))
      .replace('{{banner}}', () => banner('Need a website?', "Let's build something <em>great</em> together.")),
    jsonld: [
      {
        '@type': 'Blog',
        '@id': `${SITE}/blog#blog`,
        url: `${SITE}/blog`,
        name: "Muhammad Osama's blog",
        description,
        author: person,
        blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE}/${p.slug}`, datePublished: p.date })),
      },
      breadcrumbs(['Home', '/'], ['Blog', '/blog']),
    ],
  });
  sitemap.push({ loc: '/blog', lastmod: posts[0]?.date || today });
}

// Case studies
caseStudies.forEach((w, i) => {
  const path = w.page;
  const cover = w.cover || w.image;
  const { width, height } = imageSize(cover);
  const changed = lastChanged(`work/${w.slug}.md`);
  const stats = w.results.length
    ? `<ul class="stats" aria-label="Results">${w.results.map((r) => `<li><strong>${esc(r.value)}</strong><span>${esc(r.label)}</span></li>`).join('')}</ul>`
    : '';
  const quote = w.quote
    ? `<figure class="case-quote">${icon('i-quote')}<blockquote>${esc(w.quote)}</blockquote><figcaption>${
        w.quote_image ? `<img src="${w.quote_image}" alt="" width="44" height="44" loading="lazy" />` : ''
      }<span><cite>${esc(w.quote_author || '')}</cite><span>${esc(w.quote_role || '')}</span></span></figcaption></figure>`
    : '';
  const content = read('templates/case-study.html')
    .replaceAll('{{title}}', () => esc(w.title))
    .replace('{{eyebrow}}', () => ['Case study', w.industry, w.year, w.build].filter(Boolean).map(esc).join(' &middot; '))
    .replace('{{summary}}', () => esc(w.summary))
    .replace('{{services}}', () => w.services.map((s) => `<li>${esc(s)}</li>`).join(''))
    .replace('{{image}}', () => cover)
    .replace('{{srcset}}', () => (small(cover) ? ` srcset="${small(cover)} 600w, ${cover} ${width}w" sizes="(max-width: 948px) calc(100vw - 48px), 900px"` : ''))
    .replace('{{width}}', width)
    .replace('{{height}}', height)
    .replace('{{url}}', () => esc(w.url))
    .replace('{{stats}}', () => stats)
    .replace('{{body}}', () => renderMarkdown(w.body))
    .replace('{{quote}}', () => quote)
    .replace('{{pager}}', () => pager(caseStudies[i - 1], caseStudies[i + 1], '/work/'))
    .replace('{{banner}}', () => banner('Want results like these?', "Let's rebuild your website <em>the right way</em>."));

  const image = ogImage(`work-${w.slug}`, {
    eyebrow: 'Case study',
    title: w.title,
    subtitle: w.results.length ? w.results.map((r) => `${r.value} ${lowerFirst(r.label.split(',')[0])}`).join(' · ') : w.summary,
  });
  page({
    path,
    title: `${w.title} Website Case Study | Muhammad Osama`,
    ogTitle: `${w.title}: website case study`,
    description: w.summary,
    ogType: 'article',
    image,
    imageAlt: `${w.title} case study by Muhammad Osama`,
    content,
    jsonld: [
      {
        '@type': 'CreativeWork',
        name: `${w.title} website`,
        headline: `${w.title} website case study`,
        description: w.summary,
        url: `${SITE}${path}`,
        image,
        dateModified: changed,
        ...(w.year ? { dateCreated: w.year } : {}),
        creator: person,
        author: person,
        about: { '@type': 'Organization', name: w.title, url: w.url },
        keywords: w.services,
        ...(w.quote
          ? { review: { '@type': 'Review', reviewBody: w.quote, author: { '@type': 'Person', name: w.quote_author }, reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 } } }
          : {}),
      },
      breadcrumbs(['Home', '/'], ['Work', '/#work'], [w.title, path]),
    ],
  });
  sitemap.push({ loc: path, lastmod: changed });
});

// 404
page({
  path: '/404',
  title: 'Page not found | Muhammad Osama',
  description: 'Nothing lives at this address.',
  image: `${SITE}/og/home.png`,
  imageAlt: 'Muhammad Osama, website designer and developer',
  robots: 'noindex',
  content: read('templates/404.html'),
  jsonld: [],
});

// Sitemap and RSS
writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map((u) => `  <url><loc>${SITE}${u.loc === '/' ? '/' : u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n')}
</urlset>
`,
);
writeFileSync(
  join(DIST, 'rss.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Muhammad Osama</title>
  <link>${SITE}/blog</link>
  <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
  <description>Notes on design, development and building for the web.</description>
  <language>en</language>
${posts
  .map(
    (p) => `  <item>
    <title>${esc(p.title)}</title>
    <link>${SITE}/${p.slug}</link>
    <guid>${SITE}/${p.slug}</guid>
    <pubDate>${new Date(`${p.date}T00:00:00Z`).toUTCString()}</pubDate>
    <description>${esc(summary(p))}</description>
  </item>`,
  )
  .join('\n')}
</channel>
</rss>
`,
);

console.log(`Built the homepage, /blog, ${posts.length} post${posts.length === 1 ? '' : 's'} and ${caseStudies.length} case stud${caseStudies.length === 1 ? 'y' : 'ies'}.`);
