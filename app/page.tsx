'use client';

import About from './Components/About/About';
import CTA from './Components/CTA/CTA';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Pricing from './Components/Pricing/Pricing';
import Problem from './Components/Problem/Problem';
import Solution from './Components/Solution/Solution';
import Testimonials from './Components/Testimonials/Testimonials';
import Video from './Components/Video/Video';
import Work from './Components/Work/Work';
import styles from './page.module.css';

export default function Page() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Video />
      <Problem />
      <Solution />
      <Work />
      <Testimonials />
      <CTA />
      <About />
      <Pricing />
    </main>
  );
}
