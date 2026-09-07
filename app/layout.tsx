import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import localFont from 'next/font/local';
import { Outfit } from 'next/font/google';
import './globals.css';

const bricolageGrotesque = localFont({
  src: './fonts/BricolageGrotesque.ttf',
  variable: '--font-bricolage-grotesque',
  display: 'swap',
});

const bricolageGrotesqueExtraBold = localFont({
  src: './fonts/BricolageGrotesqueExtraBold.woff2',
  variable: '--font-bricolage-grotesque-extra-bold',
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Muhammad Osama - Website Designer & Developer',
  description: 'Website Designer & Developer',
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
        url: '/icon-light.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
        url: '/icon-dark.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Analytics */}
        <script
          defer
          src='https://cloud.umami.is/script.js'
          data-website-id='e7edaf57-6630-4365-bad6-8a51c132a819'
        ></script>

        {/* Hover-prefetch fallback */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (!HTMLScriptElement.supports || !HTMLScriptElement.supports('speculationrules')) {
                const preloadedUrls = {};
                function pointerenterHandler() {
                  if (!preloadedUrls[this.href]) {
                    preloadedUrls[this.href] = true;
                    const prefetcher = document.createElement('link');
                    prefetcher.as = prefetcher.relList.supports('prefetch') ? 'document' : 'fetch';
                    prefetcher.rel = prefetcher.relList.supports('prefetch') ? 'prefetch' : 'preload';
                    prefetcher.href = this.href;
                    document.head.appendChild(prefetcher);
                  }
                }
                document.querySelectorAll('a[href^="/"]').forEach(item => {
                  item.addEventListener('pointerenter', pointerenterHandler);
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${bricolageGrotesque.variable} ${bricolageGrotesqueExtraBold.variable} ${outfit.variable}`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
