import styles from "./DestinationInfo.module.css";
import { useTabContext } from "../../hooks/useTabContext";

function DestinationInfo() {
  const { activeTab, destinations } = useTabContext();

  const currentDestination = destinations.find(
    (destination) => destination.id === activeTab
  );

  if (!currentDestination) return null;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <p className={styles.heading}>avg. distance</p>
        <p className={styles.text}>{currentDestination.distance}</p>
      </div>
      <div className={styles.innerContainer}>
        <p className={styles.heading}>est. travel time</p>
        <p className={styles.text}>{currentDestination.travelTime}</p>
      </div>
    </div>
  );
}

export default DestinationInfo;
