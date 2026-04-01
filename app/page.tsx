import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import Reviews from '@/components/Reviews/Reviews'
import FAQs from '@/components/FAQs/FAQs'
import Pricing from '@/components/Pricing/Pricing'
import CTA from '@/components/CTA/CTA'
import Showcase from '@/components/Showcase/Showcase'
import AboutMe from '@/components/AboutMe/AboutMe'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Projects />
      <Reviews />
      <CTA />
      <Pricing />
      <FAQs />
      <Showcase />
    </div>
  )
}
