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
      <div className={styles.image}>
        <Image
          src={image}
          alt={title}
          className={styles.img}
        />
      </div>
      <div className={styles.details}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}
