import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image src='/logo.png' width={48} height={22.08} alt='logo' />
      </div>
      <p className={styles.subtitle}>Website Designer & Developer</p>
      <h1 className={styles.title}>Muhammad Osama </h1>
      <div className={styles.links}>
        <div>
          <a href='https://wa.me/+923352522522/' target='_blank'>
            WhatsApp
          </a>
        </div>
        <div>
          <a href='mailto:madebyosama@gmail.com' target='_blank'>
            Email
          </a>
        </div>
        <div>
          <a href='https://instagram.com/madebyosama' target='_blank'>
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
