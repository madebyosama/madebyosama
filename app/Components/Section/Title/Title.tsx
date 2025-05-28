import styles from './Title.module.css';

export default function Title(props: { title?: string; description?: string }) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>{props.title || 'Title goes here.'}</div>
      <div className={styles.description}>
        {props.description || 'Description goes here.'}
      </div>
    </div>
  );
}
