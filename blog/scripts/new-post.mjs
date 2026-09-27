#!/usr/bin/env node
// npm run new -- "Post title"            → an essay
// npm run new -- "Post title" --note     → a note
// npm run new -- "Post title" --link https://example.com
import { existsSync, writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const title = args.find((a) => !a.startsWith('--') && !/^https?:\/\//.test(a));
if (!title) {
  console.error('Usage: npm run new -- "Post title" [--note | --link https://…]');
  process.exit(1);
}

const link = args.includes('--link') ? args[args.indexOf('--link') + 1] : undefined;
const type = link ? 'link' : args.includes('--note') ? 'note' : 'essay';

const slug = title
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[̀-ͯ]/g, '')
  .replace(/['’]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const file = `content/posts/${slug}.md`;
if (existsSync(file)) {
  console.error(`Already exists: ${file}`);
  process.exit(1);
}

const now = new Date();
const today = new Date(now.getTime() - now.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);

const lines = [
  '---',
  `title: ${JSON.stringify(title)}`,
  type === 'note' ? '# description: optional for notes' : 'description: ""',
  `date: ${today}`,
  `type: ${type}`,
  ...(link ? [`link: ${link}`] : []),
  'topics: []',
  'draft: true',
  '---',
  '',
  '',
];
writeFileSync(file, lines.join('\n'));
console.log(`Created ${file}\nIt's a draft: visible in \`npm run dev\`, hidden in production until you set draft: false.`);
