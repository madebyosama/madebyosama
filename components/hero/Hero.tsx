'use client';

import Link from 'next/link';
import Rive from '@rive-app/react-canvas';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.title}>
        I build
        <br />
        websites.
      </div>
      <div className={styles.description}>Fast • Modern • Professional</div>
      <div className={styles.cta}>
        <Link className={`${styles.button} button`} href='#contact'>
          Contact me
        </Link>
      </div>
      <link
        rel='preload'
        href='/assets/animations/hero_animation.riv'
        as='fetch'
        crossOrigin='anonymous'
      />
      <Rive
        className={styles.animation}
        src='/assets/animations/hero_animation.riv'
      />
    </div>
  );
}
