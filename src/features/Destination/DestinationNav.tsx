import { useTabContext } from "../../hooks/useTabContext";
import styles from "./DestinationNav.module.css";

function DestinationNav() {
  const { activeTab, setActiveTab, destinations } = useTabContext();

  const handleClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <nav className={styles.destinationNav}>
      <ul className={styles.list}>
        {destinations.map((destination) => (
          <li
            key={destination.id}
            className={`${styles.menuLink} ${
              activeTab === destination.id ? styles.active : ""
            }`}
            onClick={() => handleClick(destination.id)}
          >
            {destination.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DestinationNav;
