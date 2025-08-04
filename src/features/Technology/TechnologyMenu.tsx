import { useTechnologyContext } from "../../hooks/useTechnologyContext";
import styles from "./TechnologyMenu.module.css";

function TechnologyMenu() {
  const { activeTech, setActiveTech, technologies } = useTechnologyContext();

  const handleClick = (id: number) => {
    setActiveTech(id);
  };

  return (
    <nav className={styles.technologyMenu}>
      <ul className={styles.list}>
        {technologies.map((technology) => (
          <li
            key={technology.id}
            className={`${styles.menuLink} ${
              activeTech === technology.id ? styles.active : ""
            }`}
            onClick={() => handleClick(technology.id)}
          >
            {technology.id}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TechnologyMenu;
