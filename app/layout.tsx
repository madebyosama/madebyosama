import localFont from 'next/font/local';
import Nav from '@/components/nav/Nav';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './global.css';

import Footer from '@/components/footer/Footer';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Muhammad Osama',
  description: 'i build websites',
};

const satoshi = localFont({
  src: [
    {
      path: '../assets/fonts/Satoshi-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Satoshi-Black.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={satoshi.className}>
      <head>
        <meta name='robots' content='noindex'></meta>

        <link
          href='/assets/images/favicon-light.png'
          rel='icon'
          media='(prefers-color-scheme: light)'
        />
        <link
          href='/assets/images/favicon-dark.png'
          rel='icon'
          media='(prefers-color-scheme: dark)'
        />
        <script
          async
          src='https://analytics.umami.is/script.js'
          data-website-id='26243da5-5932-47c0-8871-7e7811622595'
        ></script>

        <meta
          name='p:domain_verify'
          content='bb023784701e8a40f63125e1bccaa7e6'
        />
      </head>
      <body>
        <div className='overlay'></div>
        <Nav />
        <main>{children}</main>
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
