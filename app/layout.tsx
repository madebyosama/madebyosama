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
          id='hotjar'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:5125309,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
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
