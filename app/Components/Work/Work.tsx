import Image from 'next/image';
import styles from './Work.module.css';
export default function Work() {
  return (
    <div className={styles.work} id='Work'>
      <div className={styles.header}>
        <div className={styles.headerImage}>
          <Image src='/works.png' width={542} height={502} alt='' />
        </div>
        <div className={styles.title}>
          <div>
            My
            <br /> Recent
            <br /> Work
          </div>
        </div>
      </div>
    </div>
  );
}
