import styles from '../styles/containers.module.css';

import TeamPlaatje from '../public/plaatjes/team.svg';
import AccessibilityPlaatje from '../public/plaatjes/accessibility.svg';
import DevelopmentPlaatje from '../public/plaatjes/development.svg';
import Lely from '../public/plaatjes/lely.svg';
import { Navigatie } from '../components/navigatie';
import { Footer } from '../components/footer';
import { Main } from 'next/dist/pages/_document';
import { Projectkaart } from '../components/projectkaart';
import { Verhaalkaart } from '../components/verhaalkaart';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1>Hoi, ik ben Maud. Ik studeer aan De Haagse Hogeschool</h1>
        <section className={styles.cardContainer}>
          {/* <Projectkaart
            titel="Refreshworks"
            beschrijving="Development"
            Plaatje={Lely}
            paginaUrl="/projecten/refreshworks"
          />
          <Projectkaart
            titel="De Haagse Hogeschool"
            beschrijving="Development"
            Plaatje={Lely}
            paginaUrl="/projecten/refreshworks"
          /> */}
          <Verhaalkaart>
            <h2> Accessibility first </h2>
            <p> Meer over de accessibility </p>
            <img src="https://i.postimg.cc/2ScGP5xn/MG-2564-edited-uncropped.jpg" />
            <figcaption> Team van Refreshworks </figcaption>
          </Verhaalkaart>
        </section>
        <Footer />
      </main>
    </>
  );
};
