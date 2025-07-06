import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.data}>
          <div className={styles.title}>
            Less pretty.
            <br />
            <span style={{ color: '#0022dd' }}>More profitable.</span>
          </div>
          <div className={styles.description}>
            Conversion-focused design + <br />
            lightning-fast website = more sales for you.
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.book}
              onClick={() => window.open('https://cal.com/madebyosama/meeting')}
            >
              See What You're Losing (Free Audit)
            </button>
          </div>
        </div>
        <div className={styles.desktop}>
          <Image src={'/hero.png'} alt='hero' width={436} height={405} />
        </div>
      </div>
    </div>
  );
}
