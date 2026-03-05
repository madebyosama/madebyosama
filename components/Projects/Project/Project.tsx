'use client';

import styles from './Project.module.css';
import Image, { StaticImageData } from 'next/image';

export default function Project({
  image,
  link,
  url,
  title,
  description,
  build,
}: {
  image: StaticImageData;
  link: string;
  url: string;
  title: string;
  description: string;
  build: string;
}) {
  return (
    <div className={styles.project} onClick={() => window.open(url)}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          className={styles.img}
        />
        <div className={styles.overlay}>
          <div className={styles.visitLabel}>
            <span>Visit</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.left}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.tag}>{build}</div>
      </div>
    </div>
  );
}
