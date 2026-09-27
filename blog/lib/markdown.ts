// Markdown → HTML, once per post at build time.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { imageSize } from 'image-size';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import remarkFlexibleMarkers from 'remark-flexible-markers';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';
import { createCssVariablesTheme, type ShikiTransformer } from 'shiki';
import type { Element, Root } from 'hast';
import { BASE_PATH } from '@/site.config';

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm) // tables, footnotes, strikethrough
  .use(remarkSmartypants) // “smart quotes” — and dashes…
  .use(remarkFlexibleMarkers, { markerClassName: () => [] }) // ==highlight== → <mark>
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, {
    behavior: 'append',
    test: (el: Element) => ['h2', 'h3'].includes(el.tagName) && el.properties.id !== 'footnote-label',
    properties: { className: ['anchor'], ariaHidden: 'true', tabIndex: -1 },
    content: { type: 'text', value: '#' },
  })
  .use(rehypeShiki, {
    // Colours come from CSS variables in globals.css, so light/dark follow the site palette.
    theme: createCssVariablesTheme({ name: 'site', variablePrefix: '--code-' }),
    transformers: [codeFilename()],
  })
  .use(rehypeTidy)
  .use(rehypeStringify);

export async function renderMarkdown(markdown: string): Promise<string> {
  return String(await processor.process(markdown));
}

/**
 * Small clean-ups:
 * - `![Alt](/images/x.jpg "Caption")` on its own line → <figure> with <figcaption>
 * - images get width/height (no layout shift) and lazy loading
 * - tables get a wrapper so wide ones scroll sideways
 * - root-relative links and images (`/images/x.jpg`, `/about`) get the /blog base path
 */
function rehypeTidy() {
  return (tree: Root) => {
    const walk = (node: Root | Element) => {
      node.children.forEach((child, i) => {
        if (child.type !== 'element') return;
        if (child.tagName === 'a') withBasePath(child, 'href');
        if (child.tagName === 'img') sizeImage(child);
        if (child.tagName === 'table') {
          node.children[i] = { type: 'element', tagName: 'div', properties: { className: ['table'], tabIndex: 0 }, children: [child] };
        }
        if (child.tagName === 'p') {
          const kids = child.children.filter((c) => !(c.type === 'text' && !c.value.trim()));
          const img = kids[0];
          if (kids.length === 1 && img?.type === 'element' && img.tagName === 'img' && img.properties.title) {
            const caption = String(img.properties.title);
            delete img.properties.title;
            sizeImage(img);
            node.children[i] = {
              type: 'element',
              tagName: 'figure',
              properties: {},
              children: [img, { type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: caption }] }],
            };
            return;
          }
        }
        walk(child);
      });
    };
    walk(tree);
  };
}

function sizeImage(img: Element) {
  img.properties.loading = 'lazy';
  img.properties.decoding = 'async';
  const src = String(img.properties.src ?? '');
  if (src.startsWith('/') && !img.properties.width) {
    try {
      const { width, height } = imageSize(readFileSync(join(process.cwd(), 'public', src)));
      Object.assign(img.properties, { width, height });
    } catch {
      throw new Error(`Image not found: public${src}`);
    }
  }
  withBasePath(img, 'src');
}

function withBasePath(el: Element, attr: 'href' | 'src') {
  const url = el.properties[attr];
  if (typeof url === 'string' && url.startsWith('/') && !url.startsWith('//') && !url.startsWith(`${BASE_PATH}/`)) {
    el.properties[attr] = BASE_PATH + url;
  }
}

/** ```ts title="app/page.tsx" shows a filename label above the code block. */
function codeFilename(): ShikiTransformer {
  return {
    name: 'filename',
    root(root) {
      const raw = (this.options.meta as { __raw?: string } | undefined)?.__raw ?? '';
      const title = raw.match(/(?:title|file)=["']([^"']+)["']/)?.[1];
      const pre = root.children.find((n): n is Element => n.type === 'element' && n.tagName === 'pre');
      if (!title || !pre) return;
      root.children = [
        {
          type: 'element',
          tagName: 'figure',
          properties: { className: ['code'] },
          children: [{ type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: title }] }, pre],
        },
      ];
    },
  };
}
