import Header from "../components/Header/Header";
import CrewMenu from "../features/Crew/CrewMenu";
import CrewInfo from "../features/Crew/CrewInfo";
import styles from "./Crew.module.css";
import { useCrewContext } from "../hooks/useCrewContext";

function Crew() {
  const { activeCrewMember, crewMembers } = useCrewContext();

  const currentCrewMember = crewMembers.find(
    (member) => member.id === activeCrewMember
  );

  if (!currentCrewMember) return null;

  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.outerContainer}>
          <p className={styles.subtitle}>
            <span className={styles.number}>02</span>meet your crew
          </p>
          <div className={styles.innerContainer}>
            <div className={styles.textContainer}>
              <CrewInfo />
              <CrewMenu />
            </div>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={currentCrewMember.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
