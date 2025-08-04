import { useCrewContext } from "../../hooks/useCrewContext";
import styles from "./CrewMenu.module.css";

function CrewMenu() {
  const { activeCrewMember, setActiveCrewMember, crewMembers } =
    useCrewContext();

  const handleClick = (id: number) => {
    setActiveCrewMember(id);
  };

  return (
    <nav>
      <ul className={styles.menuCirclesContainer}>
        {crewMembers.map((member) => (
          <li
            key={member.id}
            onClick={() => handleClick(member.id)}
            className={`${styles.menuCircle} ${
              activeCrewMember === member.id ? styles.active : ""
            }`}
          ></li>
        ))}
      </ul>
    </nav>
  );
}

export default CrewMenu;

// key={destination.id}
//             className={`${styles.menuLink} ${
//               activeTab === destination.id ? styles.active : ""
//             }`}
//             onClick={() => handleClick(destination.id)}
