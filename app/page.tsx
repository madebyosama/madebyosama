import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import Reviews from '@/components/Reviews/Reviews'
import Contact from './contact/page'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Projects />
      <Reviews />
      <Contact />
    </div>
  )
}
