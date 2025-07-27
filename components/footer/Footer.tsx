'use client';

// Import necessary dependencies
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Avatar from '../../assets/images/footer/avatar.png';
import Image from 'next/image';

export default function Footer() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Function to handle scroll events
  function handleScroll() {
    setShowScrollToTop(window.scrollY > 200);
  }

  // Add scroll event listener using useEffect
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            alt=''
          />
          <div className={styles.chatOnline}></div>
        </div>
        <div className={styles.chatDetails}>
          <div className={styles.chatDetailsTitle}>Message me on WhatsApp</div>
          <div className={styles.chatDetailsDescription}>
            Typically reply with in 5-10 Mins
          </div>
        </div>
      </div>
      <div
        className={`${styles['back-to-top']} ${showScrollToTop && styles.show}`}
        onClick={scrollToTop}
      >
        Back to top
      </div>
    </div>
  );
}
