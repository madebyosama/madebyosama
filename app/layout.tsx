import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import { Outfit } from 'next/font/google';
import './globals.css';

const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage-grotesque',
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Muhammad Osama - Website Designer & Developer',
  description: 'Website Designer & Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${bricolageGrotesque.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
