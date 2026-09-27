import { ogImage, ogSize } from '@/lib/og';

export const size = ogSize;
export const contentType = 'image/png';
export const alt = 'madebyosama/blog';

export default function Image() {
  return ogImage();
}
