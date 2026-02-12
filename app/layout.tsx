import localFont from 'next/font/local'
import Nav from '@/components/Nav/Nav'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from './providers/ThemeProvider'
import './global.css'

import Footer from '@/components/Footer/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://madebyosama.com'),
  title: 'Muhammad Osama',
  description: 'i build websites',
  keywords: [
    'website designer',
    'website developer',
    'frontend developer',
    'osama',
    'muhammad osama',
    'portfolio',
    'developer portfolio',
    'personal website',
    'web developer portfolio',
    'wah cantt',
    'pakistan',
    'full stack developer',
  ],
  openGraph: {
    title: 'Muhammad Osama',
    description: 'i build websites',
    url: 'https://madebyosama.com',
    type: 'website',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/uploadedbyosama.appspot.com/o/Thumbnails%2FWebsite%2Fwebsite_thumbnail.jpg?alt=media&token=b6b33f55-3de9-4417-a5b9-bfbdcc4734e2',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Osama',
    description: 'i build websites',
    images: [
      'https://firebasestorage.googleapis.com/v0/b/uploadedbyosama.appspot.com/o/Thumbnails%2FWebsite%2Fwebsite_thumbnail.jpg?alt=media&token=b6b33f55-3de9-4417-a5b9-bfbdcc4734e2',
    ],
  },
}

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
})

const themeScript = `
(function() {
  try {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={satoshi.className} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          defer
          src='https://cloud.umami.is/script.js'
          data-website-id='e7edaf57-6630-4365-bad6-8a51c132a819'
        ></script>
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
      </head>
      <body>
        <ThemeProvider>
          <div className='overlay'></div>
          <Nav />
          <main>{children}</main>
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
