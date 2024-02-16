import styles from './links.module.css';
import links from '@/data/links';

export default function Links() {
  return (
    <div className={styles.links}>
      {links!.map((l, index) => {
        return (
          <div key={index} className={styles.link}>
            <div></div>
            <div className={styles.title}>
              <a href={l.link} target='_blank'>
                {l.title}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
