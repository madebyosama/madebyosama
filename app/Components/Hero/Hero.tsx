import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.data}>
          <div className={styles.title}>Your website built right.</div>
          <div className={styles.description}>
            Minimal plugins. No bloat. Optimized for SEO, speed, and sales.
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.book}
              onClick={() =>
                window.open('http://cal.com/madebyosama', '_blank')
              }
            >
              Book a call
            </button>
          </div>
        </div>
        <div className={styles.image__desktop}>
          <Image src={'/hero__image.png'} alt='hero' width={436} height={405} />
        </div>
        <div className={styles.image__mobile}>
          <Image
            src={'/hero__image__mobile.png'}
            alt='hero'
            width={100}
            height={183}
          />
        </div>
      </div>
    </div>
  );
}
