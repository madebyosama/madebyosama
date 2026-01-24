import Image from 'next/image';
import styles from './CTA.module.css';
export default function CTA() {
  return (
    <div className={styles.cta}>
      <div className={styles.logo}>
        <Image src='/cta-logo.png' alt='Logo' width={64} height={32.64} />
      </div>
      <div className={styles.title}>
        Ready to rebuilt your website the right way?
      </div>
      <div
        className={styles.book}
        onClick={() =>
          window.open('https://cal.com/madebyosama/meeting', '_blank')
        }
      >
        Book a call
      </div>
      <div className={styles.image}>
        <Image
          src={'/cta-image.png'}
          alt='CTA Image'
          width={914}
          height={485}
        />
      </div>
    </div>
  );
}
