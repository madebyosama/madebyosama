import localFont from 'next/font/local'
import Nav from '@/components/Nav/Nav'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from './providers/ThemeProvider'
import './global.css'

import Footer from '@/components/Footer/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Muhammad Osama',
  description: 'i build websites',
  keywords: ['website designer'],
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
        <meta name='robots' content='noindex' />
        {/* ... rest of your head content ... */}
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
