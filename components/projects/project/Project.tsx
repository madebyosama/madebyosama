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
    <div className={styles.project}>
      <div className={styles.image}>
        <Image
          src={image}
          alt='Project Image'
          className={styles.img}
          onClick={() => window.open(url)}
          priority={true}
        />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{build}</div>
    </div>
  );
}
