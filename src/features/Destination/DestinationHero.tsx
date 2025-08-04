import styles from "./DestinationHero.module.css";
import { useDestinationContext } from "../../hooks/useDestinationContext";

function DestinationHero() {
  const { activeDestination, destinations } = useDestinationContext();

  const currentDestination = destinations.find(
    (destination) => destination.id === activeDestination
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
