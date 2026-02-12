'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Footer.module.css'
import Avatar from '../../assets/images/footer/avatar.png'
import Image from 'next/image'

export default function Footer() {
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    function handleScroll() {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setShowScrollToTop(window.scrollY > 200)
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.footer}>
      <div
        className={styles.chat}
        onClick={() =>
          window.open(
            `https://wa.me/+923352522522?text=Hi!%20Osama,%20I%20need%20your%20help%20with`
          )
        }
      >
        <div className={styles.chatAvatarContainer}>
          <Image
            className={styles.chatAvatar}
            src={Avatar}
            width={120}
            height={120}
            alt='Muhammad Osama'
          />
          <div className={styles.chatOnline}></div>
        </div>
        <div className={styles.chatDetails}>
          <div className={styles.chatDetailsTitle}>Available on WhatsApp</div>
          <div className={styles.chatDetailsDescription}>
            Typically reply with in 3-5 Mins.
          </div>
        </div>
      </div>
      <div
        className={`${styles['back-to-top']} ${showScrollToTop && styles.show}`}
        onClick={scrollToTop}
      >
        ↑
      </div>
    </div>
  )
}
