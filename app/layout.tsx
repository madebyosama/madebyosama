import localFont from 'next/font/local';
import Nav from '@/components/nav/Nav';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
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
          defer
          src='https://cloud.umami.is/script.js'
          data-website-id='9fb6a204-44d4-404a-a889-31ef94fe7b94'
        ></script>
      </head>
      <body>
        <div className='overlay'></div>
        <Nav />
        <main>{children}</main>
        <GoogleAnalytics gaId='G-XYZ' />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
