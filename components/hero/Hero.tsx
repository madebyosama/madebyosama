'use client';

import Rive from '@rive-app/react-canvas';

import styles from './styles.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.title}>
        i build
        <br />
        websites
      </div>
      <div className={styles.description}>Building websites the right way.</div>
      <div className={styles.cta}>
        <a className={`${styles.button} button`} href='/contact'>
          Get in touch
        </a>
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
