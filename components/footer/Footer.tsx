'use client';

// Import necessary dependencies
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import ProfilePic from '../../assets/images/profile-pic.png';
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
        className={`${styles['back-to-top']} ${showScrollToTop && styles.show}`}
        onClick={scrollToTop}
      >
        <svg
          width='24'
          height='20'
          viewBox='0 0 24 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_7_23)'>
            <path
              d='M6.80385 7C9.11325 3 10.2679 1 12 1C13.7321 1 14.8868 3 17.1962 7L18.0622 8.5C20.3716 12.5 21.5263 14.5 20.6603 16C19.7942 17.5 17.4848 17.5 12.866 17.5H11.134C6.51517 17.5 4.20577 17.5 3.33975 16C2.47372 14.5 3.62842 12.5 5.93782 8.5L6.80385 7Z'
              fill='#5C5C5C'
            />
          </g>
          <defs>
            <clipPath id='clip0_7_23'>
              <rect width='24' height='20' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
