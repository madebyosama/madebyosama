import BLCSolicitorsImage from '@/assets/images/projects/blcsolicitors.co.uk.webp'
import PrimosAutoRepairImage from '@/assets/images/projects/primosautorepair.com.webp'
import GlobeWorkNetImage from '@/assets/images/projects/globework.net.webp'
import SaeedVisaConsultantsImage from '@/assets/images/projects/saeedvisaconsultants.jpg'
import type { CaseStudyData } from '@/components/CaseStudy/CaseStudyTemplate'

const caseStudies: Record<string, CaseStudyData> = {
  'blc-solicitors': {
    title: 'BLC Solicitors',
    description:
      'A modern, trustworthy web presence for a UK-based law firm specializing in immigration, family, and commercial law.',
    coverImage: BLCSolicitorsImage,
    url: 'https://www.blcsolicitors.co.uk',
    build: 'WordPress',
    year: '2024',
    services: ['Web Design', 'Development', 'SEO'],
    overview:
      'BLC Solicitors needed a professional website that would establish credibility and make it easy for potential clients to understand their services and get in touch. The goal was to create a clean, modern design that conveys trust and expertise while being easy to navigate.',
    challenge:
      'The existing website was outdated and didn\'t reflect the firm\'s professionalism. Potential clients were finding it difficult to navigate through services, and the site wasn\'t performing well on mobile devices. The firm needed a complete redesign that would improve both user experience and search engine visibility.',
    solution:
      'I designed and developed a fully responsive WordPress website with a clean, professional aesthetic. The site features clear service pages, an intuitive navigation structure, and prominent call-to-action elements. Every page was optimized for SEO to improve organic search rankings.',
    results: [
      { label: 'Faster load time', value: '2x' },
      { label: 'Mobile traffic increase', value: '65%' },
      { label: 'Bounce rate reduction', value: '40%' },
    ],
    nextProject: {
      title: 'Primos Auto Repair',
      slug: 'primos-auto-repair',
    },
  },
  'primos-auto-repair': {
    title: 'Primos Auto Repair',
    description:
      'A bold, user-friendly website for an auto repair shop that helps customers book services and learn about their offerings.',
    coverImage: PrimosAutoRepairImage,
    url: 'https://primosautorepair.com',
    build: 'WordPress',
    year: '2024',
    services: ['Web Design', 'Development', 'Branding'],
    overview:
      'Primos Auto Repair wanted a website that would set them apart from competitors and make it simple for customers to find information about services, pricing, and location. The site needed to feel approachable yet professional.',
    challenge:
      'The auto repair industry is competitive, and Primos needed a digital presence that would help them stand out. Their previous website was a basic template that didn\'t showcase their expertise or make it easy for customers to take action.',
    solution:
      'I created a custom WordPress site with a strong visual identity, featuring clear service breakdowns, easy contact options, and a design that reflects the shop\'s personality. The site is fully responsive and optimized for local SEO.',
    prevProject: {
      title: 'BLC Solicitors',
      slug: 'blc-solicitors',
    },
    nextProject: {
      title: 'Globe Work',
      slug: 'globe-work',
    },
  },
  'globe-work': {
    title: 'Globe Work',
    description:
      'A comprehensive workforce solutions platform connecting businesses with skilled professionals globally.',
    coverImage: GlobeWorkNetImage,
    url: 'https://globework.net',
    build: 'WordPress',
    year: '2023',
    services: ['Web Design', 'Development', 'UX Strategy'],
    overview:
      'Globe Work needed a professional platform that communicates their global workforce solutions to businesses of all sizes. The website had to convey reliability and scale while remaining approachable.',
    challenge:
      'The company operates in a complex B2B space where trust is essential. They needed a website that could clearly explain their services, showcase their global reach, and generate qualified leads from decision-makers.',
    solution:
      'I designed a clean, corporate-friendly WordPress website with clear messaging hierarchy, detailed service pages, and strategically placed CTAs. The design balances professionalism with warmth to appeal to HR managers and business owners.',
    prevProject: {
      title: 'Primos Auto Repair',
      slug: 'primos-auto-repair',
    },
    nextProject: {
      title: 'Saeed Visa Consultants',
      slug: 'saeed-visa-consultants',
    },
  },
  'saeed-visa-consultants': {
    title: 'Saeed Visa Consultants',
    description:
      'A trustworthy digital presence for a visa and immigration consultancy helping clients navigate complex processes.',
    coverImage: SaeedVisaConsultantsImage,
    url: 'https://saeedvisaconsultants.com',
    build: 'WordPress',
    year: '2023',
    services: ['Web Design', 'Development', 'Content Strategy'],
    overview:
      'Saeed Visa Consultants required a website that would build trust with potential clients seeking visa and immigration assistance. The site needed to clearly present their services and make the consultation process straightforward.',
    challenge:
      'Immigration services require a high level of trust. The consultancy needed a website that would reassure visitors of their legitimacy and expertise while making it easy to understand complex visa processes and get in touch.',
    solution:
      'I built a professional WordPress site with a reassuring design language, featuring detailed service pages for each visa type, client testimonials, and a streamlined contact process. The design uses trust signals throughout to build confidence.',
    testimonial: {
      quote:
        'I had the pleasure of working with Muhammad Osama. He designed and developed the website for SAEED VISA Consultants, and I highly recommend him for any web development project.',
      name: 'Muhammad Fahad',
      role: 'Owner, Saeed Visa Consultants',
    },
    prevProject: {
      title: 'Globe Work',
      slug: 'globe-work',
    },
  },
}

export default caseStudies
