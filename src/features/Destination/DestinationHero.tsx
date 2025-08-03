import styles from "./DestinationHero.module.css";
import { useTabContext } from "../../hooks/useTabContext";

function DestinationHero() {
  const { activeTab, destinations } = useTabContext();

  const currentDestination = destinations.find(
    (destination) => destination.id === activeTab
  );

  if (!currentDestination) return null;

  return (
    <div>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{currentDestination.title}</h1>
        <p className={styles.text}>{currentDestination.description}</p>
      </div>
    </div>
  );
}

export default DestinationHero;
