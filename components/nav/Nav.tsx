'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  const [burger, setBurger] = useState('Closed');
  const menu = [
    { title: 'Work', link: 'https://madebyosama.com/#work' },
    { title: 'Reviews', link: 'https://madebyosama.com/#reviews' },
    { title: 'About', link: 'about' },
    { title: 'Contact', link: 'contact' },
  ];

  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} href={'/'}>
        <div className={styles.image}>
          <svg
            width='62'
            height='32'
            viewBox='0 0 62 32'
            fill='#424242'
            xmlns='http://www.w3.org/2000/svg'
            id='favicon'
          >
            <rect
              x='35'
              y='5'
              width='21.8182'
              height='21.8182'
              rx='10.9091'
              fill='var(--foreground-color)'
            ></rect>
            <rect
              x='41.6364'
              y='11.6364'
              width='8.72727'
              height='8.72727'
              rx='4.36364'
              fill='var(--background-color)'
            ></rect>
            <path
              d='M9 8.5C9 6.567 10.567 5 12.5 5V5C14.433 5 16 6.567 16 8.5V23.5C16 25.433 14.433 27 12.5 27V27C10.567 27 9 25.433 9 23.5V8.5Z'
              fill='var(--foreground-color)'
            ></path>
            <rect
              x='17'
              y='5'
              width='7'
              height='22'
              rx='3.5'
              fill='var(--foreground-color)'
            ></rect>
            <rect
              x='25'
              y='5'
              width='7'
              height='22'
              rx='3.5'
              fill='var(--foreground-color)'
            ></rect>
          </svg>
        </div>
      </Link>
      <div className={styles.burger}>
        {burger === 'Closed' ? (
          <svg
            width='42'
            height='32'
            viewBox='0 0 42 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => setBurger('Opened')}
          >
            <g clipPath='url(#clip0_3_7)'>
              <path
                d='M28 4.5C29.933 4.5 31.5 6.067 31.5 8C31.5 9.933 29.933 11.5 28 11.5H13C11.067 11.5 9.5 9.933 9.5 8C9.5 6.067 11.067 4.5 13 4.5H28Z'
                fill='var(--foreground-color)'
              />
              <path
                d='M28 19.5C29.933 19.5 31.5 17.933 31.5 16C31.5 14.067 29.933 12.5 28 12.5L13 12.5C11.067 12.5 9.5 14.067 9.5 16C9.5 17.933 11.067 19.5 13 19.5H28Z'
                fill='var(--foreground-color)'
              />
              <path
                d='M28 27.5C29.933 27.5 31.5 25.933 31.5 24C31.5 22.067 29.933 20.5 28 20.5H13C11.067 20.5 9.5 22.067 9.5 24C9.5 25.933 11.067 27.5 13 27.5H28Z'
                fill='var(--foreground-color)'
              />
            </g>
            <defs>
              <clipPath id='clip0_3_7'>
                <rect width='42' height='32' fill='var(--foreground-color)' />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width='42'
            height='32'
            viewBox='0 0 42 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => setBurger('Closed')}
          >
            <g clipPath='url(#clip0_3_2)'>
              <path
                d='M29.4498 13.4246C30.8166 12.0578 30.8166 9.84171 29.4498 8.47487C28.0829 7.10804 25.8669 7.10804 24.5 8.47487L13.8934 19.0815C12.5266 20.4483 12.5266 22.6644 13.8934 24.0312C15.2603 25.3981 17.4763 25.3981 18.8432 24.0312L29.4498 13.4246Z'
                fill='var(--primary-color)'
              />
              <path
                d='M18.4246 8.55633C17.0578 7.18949 14.8417 7.18949 13.4749 8.55633C12.108 9.92316 12.108 12.1392 13.4749 13.5061L24.0815 24.1127C25.4483 25.4795 27.6644 25.4795 29.0312 24.1127C30.3981 22.7458 30.3981 20.5298 29.0312 19.1629L18.4246 8.55633Z'
                fill='var(--primary-color)'
              />
            </g>
            <defs>
              <clipPath id='clip0_3_2'>
                <rect width='42' height='32' fill='white' />
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
      <div
        className={`${styles.menu} ${
          burger === 'Closed' ? styles.hide : styles.show
        }`}
      >
        {menu?.map((m, index) => {
          return (
            <Link
              key={index}
              href={m.link}
              className={styles.item}
              onClick={() => setBurger('Closed')}
            >
              {m.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
