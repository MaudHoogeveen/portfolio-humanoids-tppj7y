import Link from 'next/link';
import styles from './navigatie.module.css';

export function Navigatie() {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a>Maud</a>
      </Link>

      <div className={styles.items}>
        <Link href="/projecten">
          <a>Projecten</a>
        </Link>
        <Link href="/over">
          <a>Over</a>
        </Link>
      </div>
    </nav>
  );
}
