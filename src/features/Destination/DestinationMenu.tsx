import { useDestinationContext } from "../../hooks/useDestinationContext";
import styles from "./DestinationMenu.module.css";

function DestinationMenu() {
  const { activeDestination, setActiveDestination, destinations } = useDestinationContext();

  const handleClick = (id: number) => {
    setActiveDestination(id);
  };

  return (
    <nav className={styles.destinationMenu}>
      <ul className={styles.list}>
        {destinations.map((destination) => (
          <li
            key={destination.id}
            className={`${styles.menuLink} ${
              activeDestination === destination.id ? styles.active : ""
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
