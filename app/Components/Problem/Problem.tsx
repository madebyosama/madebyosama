import Image from 'next/image';
import styles from './Problem.module.css';

export default function Problem() {
  return (
    <div className={styles.problem} id='Problem'>
      <div className={styles.data}>
        <div className={styles.title}>
          Are you tired of websites that are slow, cluttered, or hard to
          maintain?
        </div>
        <div className={styles.description}>
          Most developers picks a pre-build website templates.
        </div>
        <div className={styles.description}>
          Pre-build website templates come with a lot of clutter and can slow
          down your website.
        </div>
        <div className={styles.description}>
          What you need is a custom solution.
        </div>
        <div className={styles.description}>
          A website build from scratch just for you.
        </div>
        <div className={styles.description}>
          A website that is fast, responsive and easy to edit & maintain.
        </div>
        <button
          className={styles.book}
          onClick={() =>
            window.open('https://forms.gle/HFhjBuM6WC7xQRpj7', '_blank')
          }
        >
          Get a free audit of your website
        </button>
      </div>
      <div>
        <Image
          src={'/problem.png'}
          alt='problem'
          width={449}
          height={214}
          className={styles.problem__image}
        />
      </div>
    </div>
  );
}
