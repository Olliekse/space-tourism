import Header from "../components/Header/Header";
import DestinationHero from "../features/Destination/DestinationHero";
import DestinationInfo from "../features/Destination/DestinationInfo";
import DestinationNav from "../features/Destination/DestinationNav";
import styles from "./Destination.module.css";
import { useTabContext } from "../hooks/useTabContext";

function Destination() {
  const { activeTab, destinations } = useTabContext();

  const currentDestination = destinations.find(
    (destination) => destination.id === activeTab
  );

  if (!currentDestination) return null;

  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.contentContainer}>
        <p className={styles.subtitle}>
          <span className={styles.number}>01</span>pick your destination
        </p>
        <div className={styles.innerContainer}>
          <img className={styles.image} src={currentDestination.image} />
          <div className={styles.textContainer}>
            <DestinationNav />
            <DestinationHero />
            <div className={styles.separator}></div>
            <DestinationInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
