'use client';

import styles from './links.module.css';
import links from '@/data/links';

export default function Links() {
  return (
    <div className={styles.links}>
      {links!.map((l, index) => {
        return (
          <div
            key={index}
            className={styles.link}
            onClick={() => window.open(l.link)}
          >
            <div className={styles.title}>{l.title}</div>
          </div>
        );
      })}
    </div>
  );
}
