import styles from './Video.module.css';
import Image from 'next/image';

export default function Video() {
  return (
    <div className={styles.video}>
      <Image
        src='/video_placeholder.png'
        alt='video'
        width={1100}
        height={619}
        className={styles.video__placeholder}
      />
    </div>
  );
}
