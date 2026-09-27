'use client';
// The only client component in the layout: it marks the current page with a dot.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BASE_PATH } from '@/site.config';

const items = [
  { label: 'Writing', href: '/' },
  { label: 'Topics', href: '/topics' },
  { label: 'About', href: '/about' },
  { label: 'Now', href: '/now' },
  { label: 'Search', href: '/search' },
];

export default function Nav() {
  const path = usePathname();
  const current = (href: string) =>
    href === '/' ? !['/topics', '/about', '/now', '/search'].some((p) => path.startsWith(p)) : path.startsWith(href);

  return (
    <nav className="nav" aria-label="Main">
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} aria-current={current(item.href) ? 'page' : undefined}>
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <a href={`${BASE_PATH}/rss.xml`}>RSS</a>
        </li>
      </ul>
    </nav>
  );
}
