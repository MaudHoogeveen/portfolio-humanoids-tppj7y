import { Footer } from '../components/footer';
import { Navigatie } from '../components/navigatie';
import styles from '../styles/containers.module.css';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <Footer />
      </main>
    </>
  );
};
