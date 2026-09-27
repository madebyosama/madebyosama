import type { Metadata, Viewport } from 'next';
import { Stack_Sans_Headline } from 'next/font/google';
import Link from 'next/link';
import { BASE_PATH, SITE } from '@/site.config';
import Nav from '@/components/Nav';
import './globals.css';

const font = Stack_Sans_Headline({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  // Next has no metrics for this font yet, so the size-matched fallback is defined in globals.css.
  adjustFontFallback: false,
  fallback: ['Stack Sans Fallback', 'system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.title} — ${SITE.author}`, template: `%s — ${SITE.title}` },
  description: SITE.description,
  authors: [{ name: SITE.author, url: SITE.links.home }],
  alternates: { canonical: './', types: { 'application/rss+xml': '/rss.xml' } },
  openGraph: { type: 'website', siteName: SITE.title },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBFBF9' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
  ],
};

const footerLinks = [
  { label: 'madebyosama.com', href: SITE.links.home },
  { label: 'Email', href: `mailto:${SITE.email}` },
  { label: 'LinkedIn', href: SITE.links.linkedin },
  { label: 'X', href: SITE.links.x },
  { label: 'RSS', href: `${BASE_PATH}/rss.xml` },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="wrap">
          <header className="site-header">
            <Link className="wordmark" href="/" aria-label={`${SITE.title}, home`}>
              madebyosama<span>/blog</span>
            </Link>
            <p className="tagline">{SITE.tagline}</p>
            <Nav />
          </header>
          <main id="main">{children}</main>
          <footer className="site-footer">
            <p>
              <em>{SITE.footerLine}</em>
            </p>
            <p>
              {footerLinks.map((l, i) => (
                <span key={l.href}>
                  {i > 0 && ' · '}
                  <a href={l.href}>{l.label}</a>
                </span>
              ))}
            </p>
            <p>
              © {new Date().getFullYear()} {SITE.author}
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
