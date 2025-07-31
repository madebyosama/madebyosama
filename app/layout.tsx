import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import localFont from 'next/font/local';
import { Outfit } from 'next/font/google';
import Script from 'next/script';
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
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-PN0VCWWC3E'
          strategy='afterInteractive'
        />
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PN0VCWWC3E');
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
