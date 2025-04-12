import styles from './page.module.css';

export default function Page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Muhammad Osama </h1>
      <p className={styles.subtitle}>Website Designer & Developer</p>
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
    </main>
  );
}
