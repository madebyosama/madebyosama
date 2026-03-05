'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Footer.module.css'
import Avatar from '../../assets/images/footer/avatar.png'
import Image from 'next/image'
import Link from 'next/link'

const pageLinks = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Resources', href: '/resources' },
  { title: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { title: 'Landing Pages', href: '/contact' },
  { title: 'Multi-Page Sites', href: '/contact' },
  { title: 'WordPress', href: '/contact' },
  { title: 'Redesigns', href: '/contact' },
  { title: 'Custom Solutions', href: '/contact' },
]

const socialLinks = [
  {
    title: 'Instagram',
    href: 'https://instagram.com/madebyosama',
    icon: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
          fill='currentColor'
        />
      </svg>
    ),
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/madebyosama',
    icon: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
          fill='currentColor'
        />
      </svg>
    ),
  },
  {
    title: 'Facebook',
    href: 'https://facebook.com/madebyosama',
    icon: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
          fill='currentColor'
        />
      </svg>
    ),
  },
  {
    title: 'Fiverr',
    href: 'https://fiverr.com/madebyosama',
    icon: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8.45801 3.85449C7.33093 3.85449 5.24707 4.1693 5.24707 6.55469V6.85742H4.26367V8.62695H5.24707V12.3623H4.3291V14.1309H8.75879V12.3604H7.68359V8.625H10.6309V12.3604H9.71484V14.1299H14.001V12.3604H13.083V6.84277H7.68457V6.48926C7.68457 5.79449 8.37965 5.78125 8.7334 5.78125C9.13905 5.78128 9.32324 5.82031 9.32324 5.82031V3.90723C9.03638 3.87149 8.74709 3.85353 8.45801 3.85449ZM11.8506 3.71094C11.1994 3.7111 10.6719 4.23941 10.6719 4.89062C10.672 5.54169 11.1995 6.06918 11.8506 6.06934C12.5018 6.06934 13.0301 5.54179 13.0303 4.89062C13.0303 4.23931 12.5019 3.71094 11.8506 3.71094Z'
          fill='currentColor'
        />
      </svg>
    ),
  },
]

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
    <>
      <footer className={styles.footer}>
        {/* Main Footer Grid */}
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <svg
                width='62'
                height='32'
                viewBox='0 0 62 32'
                fill='#424242'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='35'
                  y='5'
                  width='21.8182'
                  height='21.8182'
                  rx='10.9091'
                  fill='var(--foreground-color)'
                />
                <rect
                  x='41.6364'
                  y='11.6364'
                  width='8.72727'
                  height='8.72727'
                  rx='4.36364'
                  fill='var(--background-color)'
                />
                <path
                  d='M9 8.5C9 6.567 10.567 5 12.5 5V5C14.433 5 16 6.567 16 8.5V23.5C16 25.433 14.433 27 12.5 27V27C10.567 27 9 25.433 9 23.5V8.5Z'
                  fill='var(--foreground-color)'
                />
                <rect
                  x='17'
                  y='5'
                  width='7'
                  height='22'
                  rx='3.5'
                  fill='var(--foreground-color)'
                />
                <rect
                  x='25'
                  y='5'
                  width='7'
                  height='22'
                  rx='3.5'
                  fill='var(--foreground-color)'
                />
              </svg>
            </div>
            <p className={styles.about}>
              I&apos;m a freelance web designer & developer based in Pakistan,
              crafting clean, modern websites that help businesses stand out
              online.
            </p>
            <div className={styles.socials}>
              {socialLinks.map((social) => (
                <a
                  key={social.title}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.socialLink}
                  aria-label={social.title}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Pages Column */}
          <div className={styles.linkCol}>
            <div className={styles.colTitle}>Pages</div>
            <nav className={styles.colLinks}>
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.colLink}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Column */}
          <div className={styles.linkCol}>
            <div className={styles.colTitle}>Services</div>
            <nav className={styles.colLinks}>
              {serviceLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={styles.colLink}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className={styles.linkCol}>
            <div className={styles.colTitle}>Get in touch</div>
            <div className={styles.contactList}>
              <a
                href='https://wa.me/+923352522522'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.contactItem}
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                  />
                </svg>
                <span>+92 335 2522522</span>
              </a>
              <a
                href='mailto:madebyosama@gmail.com'
                className={styles.contactItem}
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                  />
                  <path
                    d='M22 6l-10 7L2 6'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <span>madebyosama@gmail.com</span>
              </a>
              <div className={styles.contactItem}>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                  />
                  <circle
                    cx='12'
                    cy='10'
                    r='3'
                    stroke='currentColor'
                    strokeWidth='2'
                    fill='none'
                  />
                </svg>
                <span>Lalazar, Wah, Pakistan</span>
              </div>
              <div className={styles.availability}>
                <div className={styles.dot} />
                <span>Available for projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.divider} />
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Muhammad Osama. All rights
            reserved.
          </div>
          <div className={styles.bottomLinks}>
            <Link href='/contact' className={styles.bottomLink}>
              Start a project
            </Link>
          </div>
        </div>
      </footer>

      {/* Fixed elements */}
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
            Typically reply within 3-5 Mins.
          </div>
        </div>
      </div>
      <div
        className={`${styles['back-to-top']} ${showScrollToTop && styles.show}`}
        onClick={scrollToTop}
      >
        ↑
      </div>
    </>
  )
}
