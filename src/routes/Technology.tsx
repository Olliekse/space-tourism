import Header from "../components/Header/Header";
import TechnologyHero from "../features/Technology/TechnologyHero";
import TechnologyMenu from "../features/Technology/TechnologyMenu";
import styles from "./Technology.module.css";
import { useTechnologyContext } from "../hooks/useTechnologyContext";

function Technology() {
  const { activeTech, technologies } = useTechnologyContext();

  const currentTechnology = technologies.find(
    (technology) => technology.id === activeTech
  );

  if (!currentTechnology) return null;

  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.contentContainer}>
        <p className={styles.subtitle}>
          <span className={styles.number}>03</span>space launch 101
        </p>
        <div className={styles.innerContainer}>
          <picture className={styles.picture}>
            <source
              media="(min-width: 1440px)"
              srcSet={currentTechnology.imagePortrait}
            />
            <img
              className={styles.image}
              src={currentTechnology.imageLandscape}
              alt={currentTechnology.name}
            />
          </picture>
          <TechnologyMenu />
          <div className={styles.textContainer}>
            <p className={styles.terminology}>the terminology...</p>
            <TechnologyHero />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
