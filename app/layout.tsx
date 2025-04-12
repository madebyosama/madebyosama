import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import { Jost } from 'next/font/google';
import './globals.css';

const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage-grotesque',
  subsets: ['latin'],
});

const jost = Jost({
  variable: '--font-jost',
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
      <body className={`${bricolageGrotesque.variable} ${jost.variable}`}>
        {children}
      </body>
    </html>
  );
}
