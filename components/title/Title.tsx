import styles from './styles.module.css';

export default function Title({
  sub,
  title,
  description,
}: {
  sub: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.title}>
      <div className={styles.sub}>{sub}</div>
      <div className={styles.heading}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
