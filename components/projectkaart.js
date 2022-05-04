import styles from './projectkaart.module.css';

export function Projectkaart({
  Plaatje,
  plaatjeurl,
  titel,
  beschrijving,
  paginaUrl,
}) {
  return (
    <a className={styles.container} href={paginaUrl || ''}>
      {Plaatje && (
        <div className={styles.plaatjecontainer}>
          <Plaatje />
        </div>
      )}

      {plaatjeurl && (
        <div className={styles.plaatjecontainer}>
          <img className={styles.plaatje} src={plaatjeurl} />
        </div>
      )}

      <h3 className={styles.titel}>{titel}</h3>
      <p className={styles.beschrijving}>{beschrijving}</p>
    </a>
  );
}
