import localFont from 'next/font/local';
import Nav from '@/components/Nav/Nav';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './global.css';

import Footer from '@/components/Footer/Footer';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Muhammad Osama',
  description: 'i build websites',
  keywords: ['website designer'],
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
        <script
          defer
          src='https://cloud.umami.is/script.js'
          data-website-id='9fb6a204-44d4-404a-a889-31ef94fe7b94'
        ></script>
        <link
          href='/assets/images/favicon-light.png'
          rel='icon'
          media='(prefers-color-scheme: dark)'
        />
        <link
          href='/assets/images/favicon-dark.png'
          rel='icon'
          media='(prefers-color-scheme: dark)'
        />
        <meta
          property='og:image'
          content='https://firebasestorage.googleapis.com/v0/b/uploadedbyosama.appspot.com/o/Thumbnails%2FWebsite%2Fwebsite_thumbnail.jpg?alt=media&token=b6b33f55-3de9-4417-a5b9-bfbdcc4734e2'
        />
        <meta property='og:url' content='https://madebyosama.com' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Muhammad Osama' />
        <meta property='og:description' content='i build websites' />
        <meta
          property='og:image'
          content='https://firebasestorage.googleapis.com/v0/b/uploadedbyosama.appspot.com/o/Thumbnails%2FWebsite%2Fwebsite_thumbnail.jpg?alt=media&token=b6b33f55-3de9-4417-a5b9-bfbdcc4734e2'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='madebyosama.com' />
        <meta property='twitter:url' content='https://madebyosama.com' />
        <meta name='twitter:title' content='Muhammad Osama' />
        <meta name='twitter:description' content='i build websites' />
        <meta
          name='twitter:image'
          content='https://firebasestorage.googleapis.com/v0/b/uploadedbyosama.appspot.com/o/Thumbnails%2FWebsite%2Fwebsite_thumbnail.jpg?alt=media&token=b6b33f55-3de9-4417-a5b9-bfbdcc4734e2'
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
