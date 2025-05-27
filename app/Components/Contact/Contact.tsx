import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact} id='Contact'>
      <div className={styles.header}>
        <div className={styles.title}>Say hello</div>
        <div className={styles.description}>
          Not into meetings? Leave me a message below, and I’ll shoot you an
          email in no time!
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.column}>
          <textarea
            placeholder='Tell me at about your project.'
            className={styles.message}
          ></textarea>
        </div>
        <div className={styles.column}>
          <input type='text' placeholder='Name' className={styles.input} />
          <input type='email' placeholder='Email' className={styles.input} />
          <div className={styles.submit}>Submit</div>
        </div>
      </div>
    </div>
  );
}
