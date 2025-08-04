import { useTabContext } from "../../hooks/useTabContext";
import styles from "./DestinationMenu.module.css";

function DestinationMenu() {
  const { activeTab, setActiveTab, destinations } = useTabContext();

  const handleClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <nav className={styles.destinationMenu}>
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

export default DestinationMenu;
