import localFont from 'next/font/local';
import Nav from '@/components/nav/Nav';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import './global.css';

import Footer from '@/components/footer/Footer';
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
        <meta
          property='og:image'
          content='https://firebasestorage.googleapis.com/v0/b/uploadedbyosama.appspot.com/o/Images%2Fthumbnail.jpg?alt=media&token=45207f6c-f71f-4299-90c0-4548f1028e00'
        />
        <meta property='og:image:type' content='image/jpg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </head>
      <body>
        <div className='overlay'></div>
        <Nav />
        <main>{children}</main>
        <GoogleAnalytics gaId='G-X1SBW0TW14' />
        <SpeedInsights />
        <Script id='show-banner'>
          {` (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5125309,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script>
        <Footer />
      </body>
    </html>
  );
}
