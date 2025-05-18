import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__content}>
        <div className={styles.hero__content__data}>
          <div className={styles.hero__content__data__title}>
            Your website built right.
          </div>
          <div className={styles.hero__content__data__description}>
            Minimal plugins. No bloat. Optimized for SEO, speed, and sales.
          </div>
          <div className={styles.hero__content__data__buttons}>
            <button className={styles.hero__content__data__button__book}>
              Book a call
            </button>
          </div>
        </div>
        <div className={styles.hero__content__image__desktop}>
          <Image src={'/hero__image.png'} alt='hero' width={436} height={405} />
        </div>
        <div className={styles.hero__content__image__mobile}>
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
