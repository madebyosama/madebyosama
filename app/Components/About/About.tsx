import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.about} id='About'>
      <div className={styles.details}>
        <div className={styles.name}>Muhammad Osama</div>
        <div className={styles.title}>Website Designer & Developer</div>
        <div className={styles.description}>
          Hello there! My name is Muhammad Osama and I’m a Website Designer &
          Developer. I live in Wah Cantt, Pakistan. I grew up on the internet
          and love computers and software.
        </div>
        <div className={styles.description}>
          In my 10 years of experience I have designed User Interfaces and
          experiences, planned, supported, and implemented features and
          roadmaps, and led cross-functional teams at companies like Pitch,
          Microsoft, and Native Instruments.
        </div>
        <div className={styles.contact}>
          <div className={styles.button}>
            <span className={styles.label}>Email</span>
            <span className={styles.arrow}>
              <Image src='/arrow.svg' width={20} height={20} alt='arrow' />
            </span>
          </div>
          <div className={styles.button}>
            <span className={styles.label}>Linkedin</span>
            <span className={styles.arrow}>
              <Image src='/arrow.svg' width={20} height={20} alt='arrow' />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <div className={styles.photo}>
          <Image
            src='/photo.png'
            alt='Muhammad Osama'
            width={350}
            height={350}
          />
        </div>
        <div className={styles.play}>
          <Image src='/play.svg' alt='play' width={80} height={80} />
        </div>
      </div>
    </div>
  );
}
