'use client';

import styles from './Project.module.css';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

export default function Project({
  image,
  link,
  url,
  title,
  description,
  build,
  caseStudySlug,
}: {
  image: StaticImageData;
  link: string;
  url: string;
  title: string;
  description: string;
  build: string;
  caseStudySlug?: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    if (caseStudySlug) {
      router.push(`/case-study/${caseStudySlug}`);
    } else {
      window.open(url);
    }
  };

  return (
    <div className={styles.project} onClick={handleClick}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          className={styles.img}
        />
        <div className={styles.overlay}>
          <div className={styles.visitLabel}>
            <span>{caseStudySlug ? 'Case Study' : 'Visit'}</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={caseStudySlug ? "M4.5 2L9 6L4.5 10" : "M2 10L10 2M10 2H4M10 2V8"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
