import type { Metadata } from 'next';
import MarkdownPage from '@/components/MarkdownPage';
import { getPage } from '@/lib/posts';

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getPage('about');
  return { title, description };
}

export default function AboutPage() {
  return <MarkdownPage name="about" />;
}
