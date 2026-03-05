import styles from './CTA.module.css'
import Link from 'next/link'

export default function CTA() {
  return (
    <div className={styles.cta}>
      <div className={styles.ctaContent}>
        <div className={styles.ctaLabel}>Ready to start?</div>
        <h2 className={styles.ctaHeading}>
          Let&apos;s build something{' '}
          <span className={styles.ctaAccent}>great</span> together.
        </h2>
      </div>
      <Link href='/contact' className={`button ${styles.ctaButton}`}>
        Get in touch
      </Link>
    </div>
  )
}
