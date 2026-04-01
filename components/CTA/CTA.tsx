'use client'

import { useState } from 'react'
import styles from './CTA.module.css'
import ContactModal from '@/components/ContactModal/ContactModal'

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className={styles.cta}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaLabel}>Ready to start?</div>
          <h2 className={styles.ctaHeading}>
            Let&apos;s build something{' '}
            <span className={styles.ctaAccent}>great</span> together.
          </h2>
        </div>
        <button
          className={`button ${styles.ctaButton}`}
          onClick={() => setIsModalOpen(true)}
        >
          Get in touch
        </button>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
