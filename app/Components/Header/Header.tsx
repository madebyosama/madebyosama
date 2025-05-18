'use client';

import styles from './Header.module.css';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    'Problem',
    'Solution',
    'Work',
    'Testimonials',
    'About',
    'Contact',
  ];
  return (
    <div className={styles.header}>
      <Image
        className={styles.header__logo}
        src='/logo.png'
        width={100}
        height={51}
        alt='logo'
      />
      <div className={styles.header__menu__desktop}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={`#` + item}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.header__menu__mobile}>
        <div
          className={styles.header__menu__mobile__toggle}
          onClick={() => setIsMenuOpen(true)}
        >
          Menu
        </div>
        {isMenuOpen && (
          <div className={styles.header__menu__mobile__dropdown}>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={`#` + item}>{item}</a>
                </li>
              ))}
            </ul>
            <div
              className={styles.header__menu__mobile__dropdown__close}
              onClick={() => setIsMenuOpen(false)}
            >
              Close
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
