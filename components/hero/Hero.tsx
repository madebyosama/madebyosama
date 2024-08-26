'use client';

import Link from 'next/link';
import Rive from '@rive-app/react-canvas';
import InstagramIcon from '@/assets/images/icons/instagram.svg';

import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.title}>
        I build
        <br />
        websites.
      </div>
      <div className={styles.description}>Fast • Modern • Professional</div>
      <div className={styles.socials}>
        <div className={styles.social}>
          <a href='https://instagram.com/madebyosama' target='_blank'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_193_46)'>
                <path
                  d='M1 12C1 6.81455 1 4.22183 2.61091 2.61091C4.22183 1 6.81455 1 12 1C17.1854 1 19.7782 1 21.3891 2.61091C23 4.22183 23 6.81455 23 12C23 17.1854 23 19.7782 21.3891 21.3891C19.7782 23 17.1854 23 12 23C6.81455 23 4.22183 23 2.61091 21.3891C1 19.7782 1 17.1854 1 12Z'
                  stroke='var(--foreground-color)'
                  stroke-width='1.73684'
                  stroke-linejoin='round'
                />
                <path
                  d='M17.2106 12C17.2106 14.8777 14.8778 17.2105 12.0001 17.2105C9.12238 17.2105 6.78955 14.8777 6.78955 12C6.78955 9.12232 9.12238 6.78949 12.0001 6.78949C14.8778 6.78949 17.2106 9.12232 17.2106 12Z'
                  stroke='var(--foreground-color)'
                  stroke-width='1.73684'
                />
                <path
                  d='M18.3762 5.63159H18.3672'
                  stroke='var(--foreground-color)'
                  stroke-width='2.31579'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_193_46'>
                  <rect width='24' height='24' fill='var(--foreground-color)' />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div className={styles.social}>
          <a href='https://linkedin.com/in/madebyosama' target='_blank'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_195_52)'>
                <path
                  d='M6.21045 9.6842V17.7895'
                  stroke='var(--foreground-color)'
                  stroke-width='1.73684'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M10.8423 13.1579V17.7895M10.8423 13.1579C10.8423 11.2394 12.3975 9.6842 14.316 9.6842C16.2345 9.6842 17.7897 11.2394 17.7897 13.1579V17.7895M10.8423 13.1579V9.6842'
                  stroke='var(--foreground-color)'
                  stroke-width='1.73684'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M6.21988 6.21051H6.20947'
                  stroke='var(--foreground-color)'
                  stroke-width='2.31579'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M1 12C1 6.81455 1 4.22183 2.61091 2.61091C4.22183 1 6.81455 1 12 1C17.1854 1 19.7782 1 21.3891 2.61091C23 4.22183 23 6.81455 23 12C23 17.1854 23 19.7782 21.3891 21.3891C19.7782 23 17.1854 23 12 23C6.81455 23 4.22183 23 2.61091 21.3891C1 19.7782 1 17.1854 1 12Z'
                  stroke='var(--foreground-color)'
                  stroke-width='1.73684'
                  stroke-linejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_195_52'>
                  <rect width='24' height='24' fill='var(--foreground-color)' />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div>
          <a href='https://facebook.com/madebyosama' target='_blank'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_195_52)'>
                <path
                  d='M1 12C1 6.81455 1 4.22183 2.61091 2.61091C4.22183 1 6.81455 1 12 1C17.1854 1 19.7782 1 21.3891 2.61091C23 4.22183 23 6.81455 23 12C23 17.1854 23 19.7782 21.3891 21.3891C19.7782 23 17.1854 23 12 23C6.81455 23 4.22183 23 2.61091 21.3891C1 19.7782 1 17.1854 1 12Z'
                  stroke='var(--foreground-color)'
                  stroke-width='1.73684'
                  stroke-linejoin='round'
                />
                <path
                  d='M17.7045 7.39893H14.2946C13.086 7.39893 12.1037 8.37399 12.0947 9.58262L11.996 22.9152M9.7793 14.3177H15.3403'
                  stroke='var(--foreground-color)'
                  stroke-width='1.73684'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_195_52'>
                  <rect width='24' height='24' fill='var(--foreground-color)' />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.cta}>
        <Link className={`${styles.button} button`} href='#contact'>
          Get your website
        </Link>
      </div>
      <link
        rel='preload'
        href='/assets/animations/hero_animation.riv'
        as='fetch'
        crossOrigin='anonymous'
      />

      <Rive
        className={styles.animation}
        src='/assets/animations/hero_animation.riv'
      />
    </div>
  );
}
