import Image from 'next/image';
import styles from './Hero.module.css';
import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

export default function Hero() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'meeting' });
      cal('ui', {
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#333',
          },
          dark: {
            'cal-brand': '#fff',
          },
        },
        hideEventTypeDetails: true,
        layout: 'month_view',
      });
    })();
  }, []);

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
            <button
              className={styles.book}
              data-cal-namespace='meeting'
              data-cal-link='madebyosama/meeting'
              data-cal-config='{"layout":"month_view"}'
            >
              Book a call
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
