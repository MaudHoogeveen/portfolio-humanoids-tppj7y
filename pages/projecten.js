import Head from 'next/head';
import { Navigatie } from '../components/navigatie';
import { Projectkaart } from '../components/projectkaart';
import { Footer } from '../components/footer';
import styles from '../styles/containers.module.css';

import AccessibilityPlaatje from '../public/plaatjes/accessibility.svg';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1>Projecten</h1>

        <section className={styles.cardContainer}>
          <Projectkaart
            plaatjeurl="	https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"
            titel="IKEA AR onderzoek"
            beschrijving="UX, UI EN RESEARCH"
            paginaUrl="/projecten/ikea"
          />
          <Projectkaart
            Plaatje={AccessibilityPlaatje}
            titel="UBER app redesign"
            beschrijving="UX, UI EN RESEARCH"
          />
          <Footer />
        </section>
      </main>
    </>
  );
};
