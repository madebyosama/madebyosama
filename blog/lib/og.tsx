// Share images (1200×630), rendered with next/og in the site's font and colours.
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { SITE } from '@/site.config';

export const ogSize = { width: 1200, height: 630 };

export async function ogImage(title?: string, meta?: string) {
  const [medium, semibold] = await Promise.all(
    ['500', '600'].map((w) => readFile(join(process.cwd(), `assets/stack-sans-headline-${w}.ttf`))),
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px 88px',
          background: '#FBFBF9',
          color: '#1A1A1A',
          fontFamily: 'Stack Sans Headline',
        }}
      >
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 500 }}>
          madebyosama<span style={{ color: '#F2542D' }}>/blog</span>
        </div>
        <div style={{ display: 'flex', fontSize: title ? 68 : 48, fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', color: title ? '#1A1A1A' : '#6E6E69' }}>
          {title ?? SITE.tagline}
        </div>
        <div style={{ display: 'flex', borderTop: '2px solid #E8E8E3', paddingTop: 28, fontSize: 28, fontWeight: 500, color: '#6E6E69' }}>
          {meta ?? SITE.author}
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: 'Stack Sans Headline', data: medium!, weight: 500, style: 'normal' },
        { name: 'Stack Sans Headline', data: semibold!, weight: 600, style: 'normal' },
      ],
    },
  );
}
