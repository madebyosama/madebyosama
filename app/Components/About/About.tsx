import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.about} id='about'>
      <div className={styles.details}>
        <div className={styles.name}>Muhammad Osama</div>
        <div className={styles.title}>Website Designer & Developer</div>
        <div className={styles.description}>
          Hello there! I’m Muhammad Osama — a passionate Web Designer and
          Developer from Wah Cantt, Pakistan. I grew up fascinated by the
          internet and found my calling early in the world of design and code.
        </div>
        <div className={styles.description}>
          With over 7 years of hands-on experience, I’ve designed 500+ websites
          across a range of industries, helping brands shape their digital
          presence through clean, functional, and user-friendly interfaces.
        </div>
        <div className={styles.description}>
          Whether it’s designing seamless user experiences, crafting
          pixel-perfect UIs, or building with the MERN stack, I thrive at the
          intersection of design and development. My toolkit includes Figma,
          WordPress, HTML, CSS, JavaScript, React.js, and more.
        </div>
        <div className={styles.contact}>
          <div
            className={styles.button}
            onClick={() =>
              window.open('mailto:madebyosama@gmail.com', '_blank')
            }
          >
            <span className={styles.label}>Email</span>
            <span className={styles.arrow}>
              <Image src='/arrow.svg' width={20} height={20} alt='arrow' />
            </span>
          </div>
          <div
            className={styles.button}
            onClick={() =>
              window.open('https://linkedin.com/in/madebyosama', '_blank')
            }
          >
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
