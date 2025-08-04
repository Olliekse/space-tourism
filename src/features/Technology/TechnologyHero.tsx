import styles from "./TechnologyHero.module.css";
import { useTechnologyContext } from "../../hooks/useTechnologyContext";

function TechnologyHero() {
  const { activeTech, technologies } = useTechnologyContext();

  const currentTechnology = technologies.find(
    (technology) => technology.id === activeTech
  );

  if (!currentTechnology) return null;

  return (
    <div>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{currentTechnology.title}</h1>
        <p className={styles.text}>{currentTechnology.description}</p>
      </div>
    </div>
  );
}

export default TechnologyHero;
