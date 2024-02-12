import styles from './styles.module.css';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.lds}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
