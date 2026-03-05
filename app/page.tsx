import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import Reviews from '@/components/Reviews/Reviews'
import FAQs from '@/components/FAQs/FAQs'
import Contact from './contact/page'
import Pricing from '@/components/Pricing/Pricing'
import CTA from '@/components/CTA/CTA'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Projects />
      <Reviews />
      <Pricing />
      <FAQs />
      <CTA />
    </div>
  )
}
