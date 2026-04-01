'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import styles from './CaseStudyTemplate.module.css'
import ContactModal from '@/components/ContactModal/ContactModal'

export interface CaseStudyData {
  title: string
  description: string
  coverImage: StaticImageData | string
  url: string
  build: string
  year: string
  services: string[]
  overview: string
  challenge: string
  solution: string
  results?: {
    label: string
    value: string
  }[]
  galleryImages?: (StaticImageData | string)[]
  testimonial?: {
    quote: string
    name: string
    role: string
  }
  nextProject?: {
    title: string
    slug: string
  }
  prevProject?: {
    title: string
    slug: string
  }
}

export default function CaseStudyTemplate({
  data,
}: {
  data: CaseStudyData
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={styles.caseStudy}>
      {/* Back link */}
      <Link href='/#work' className={styles.backLink}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 12L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to work
      </Link>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.tag}>{data.build}</span>
          <span className={styles.dot}></span>
          <span className={styles.year}>{data.year}</span>
        </div>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.description}>{data.description}</p>

        <div className={styles.services}>
          {data.services.map((service, i) => (
            <span key={i} className={styles.service}>
              {service}
            </span>
          ))}
        </div>
      </header>

      {/* Cover Image */}
      <div className={styles.coverWrapper}>
        <Image
          src={data.coverImage}
          alt={data.title}
          width={900}
          height={520}
          className={styles.coverImage}
          priority
        />
      </div>

      {/* Visit website */}
      <div className={styles.visitWrapper}>
        <a
          href={data.url}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.visitLink}
        >
          Visit live website
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.33 11.67L11.67 2.33M11.67 2.33H4.67M11.67 2.33V9.33"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Content sections */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.sectionText}>{data.overview}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <p className={styles.sectionText}>{data.challenge}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution</h2>
          <p className={styles.sectionText}>{data.solution}</p>
        </section>
      </div>

      {/* Results */}
      {data.results && data.results.length > 0 && (
        <div className={styles.results}>
          {data.results.map((result, i) => (
            <div key={i} className={styles.resultCard}>
              <div className={styles.resultValue}>{result.value}</div>
              <div className={styles.resultLabel}>{result.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Gallery */}
      {data.galleryImages && data.galleryImages.length > 0 && (
        <div className={styles.gallery}>
          {data.galleryImages.map((img, i) => (
            <div key={i} className={styles.galleryItem}>
              <Image
                src={img}
                alt={`${data.title} screenshot ${i + 1}`}
                width={600}
                height={400}
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
      )}

      {/* Testimonial */}
      {data.testimonial && (
        <div className={styles.testimonial}>
          <div className={styles.quoteIcon}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7.5V14.5C11 16.433 9.433 18 7.5 18C5.567 18 4 16.433 4 14.5H6C6 15.328 6.672 16 7.5 16C8.328 16 9 15.328 9 14.5V9.5H5C4.448 9.5 4 9.052 4 8.5V7.5C4 5.567 5.567 4 7.5 4C9.433 4 11 5.567 11 7.5ZM20 7.5V14.5C20 16.433 18.433 18 16.5 18C14.567 18 13 16.433 13 14.5H15C15 15.328 15.672 16 16.5 16C17.328 16 18 15.328 18 14.5V9.5H14C13.448 9.5 13 9.052 13 8.5V7.5C13 5.567 14.567 4 16.5 4C18.433 4 20 5.567 20 7.5Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <blockquote className={styles.quote}>
            {data.testimonial.quote}
          </blockquote>
          <div className={styles.quoteAuthor}>
            <span className={styles.quoteName}>{data.testimonial.name}</span>
            <span className={styles.quoteRole}>{data.testimonial.role}</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className={styles.navigation}>
        {data.prevProject ? (
          <Link
            href={`/case-study/${data.prevProject.slug}`}
            className={styles.navLink}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <div className={styles.navLabel}>Previous</div>
              <div className={styles.navTitle}>{data.prevProject.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {data.nextProject ? (
          <Link
            href={`/case-study/${data.nextProject.slug}`}
            className={`${styles.navLink} ${styles.navLinkNext}`}
          >
            <div>
              <div className={styles.navLabel}>Next</div>
              <div className={styles.navTitle}>{data.nextProject.title}</div>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* CTA */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaLabel}>Like what you see?</div>
        <h2 className={styles.ctaHeading}>
          Let&apos;s work <span className={styles.ctaAccent}>together</span>.
        </h2>
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
    </div>
  )
}
