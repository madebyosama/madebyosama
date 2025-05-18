'use client';

import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import styles from './page.module.css';

export default function Page() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
    </main>
  );
}
