import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <div className={styles.pricing}>
      <div className={styles.header}>
        <div className={styles.title}>Pricing</div>
        <div className={styles.description}>
          No hidden fees, no subscription. Let’s keep it simple!
        </div>
      </div>
    </div>
  );
}
