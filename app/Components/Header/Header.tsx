'use client';

import styles from './Header.module.css';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ['Work', 'Testimonials', 'About', 'Pricing', 'Contact'];
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoImage}>
          <Image src='/logo.png' width={56} height={26.12} alt='logo' />
        </div>
        <div className={styles.logoText}>Muhammad Osama</div>
      </div>
      <div className={styles.menu_desktop}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={`#` + item}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.menu_mobile}>
        <div className={styles.toggle} onClick={() => setIsMenuOpen(true)}>
          Menu
        </div>
        {isMenuOpen && (
          <div className={styles.dropdown}>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={`#` + item} onClick={() => setIsMenuOpen(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.close} onClick={() => setIsMenuOpen(false)}>
              Close
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
