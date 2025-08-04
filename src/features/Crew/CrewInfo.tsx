import { useCrewContext } from "../../hooks/useCrewContext";
import styles from "./CrewInfo.module.css";

function CrewInfo() {
  const { activeCrewMember, crewMembers } = useCrewContext();

  const currentCrewMember = crewMembers.find(
    (member) => member.id === activeCrewMember
  );

  if (!currentCrewMember) return null;

  return (
    <div className={styles.container}>
      <p className={styles.rank}>{currentCrewMember.rank}</p>
      <p className={styles.name}>{currentCrewMember.name}</p>
      <p className={styles.bio}>{currentCrewMember.bio}</p>
    </div>
  );
}

export default CrewInfo;
