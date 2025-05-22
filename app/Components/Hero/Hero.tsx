import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.data}>
          <div className={styles.title}>
            Your website rebuilt
            <span style={{ color: '#0022dd' }}> right.</span>
          </div>
          <div className={styles.description}>
            Minimal plugins. No bloat. Optimized for SEO, speed, and sales.
          </div>
          <div className={styles.buttons}>
            <button className={styles.book}>Book a call</button>
          </div>
        </div>
        <div className={styles.desktop}>
          <Image src={'/hero.png'} alt='hero' width={436} height={405} />
        </div>
        <div className={styles.mobile}>
          <Image src={'/hero_mobile.png'} alt='hero' width={100} height={183} />
        </div>
      </div>
    </div>
  );
}
