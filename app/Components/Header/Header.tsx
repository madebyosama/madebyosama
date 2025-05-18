import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <div className={styles.header}>
      <Image
        className={styles.header__logo}
        src='/logo.png'
        width={100}
        height={51}
        alt='logo'
      />
      <div className={styles.header__menu}>
        <ul>
          <li>
            <a href='#problem'>Problem</a>
          </li>
          <li>
            <a href='#solution'>Solution</a>
          </li>
          <li>
            <a href='#work'>Work</a>
          </li>
          <li>
            <a href='#testimonial'>Testimonial</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
