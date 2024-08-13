import Hero from '@/components/hero/Hero';
import Projects from '@/components/projects/Projects';
import Reviews from '@/components/reviews/Reviews';
import Contact from './contact/page';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Projects />
      <Reviews />
      <Contact />
    </div>
  );
}
