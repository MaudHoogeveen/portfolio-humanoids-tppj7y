import styles from './verhaalkaart.module.css';

export function Verhaalkaart({ children, Plaatje }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
      <div className={styles.plaatje}>{Plaatje && <Plaatje />}</div>
    </div>
  );
}
