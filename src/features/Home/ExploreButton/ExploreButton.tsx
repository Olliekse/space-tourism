import { Link } from "react-router";
import styles from "./ExploreButton.module.css";

function ExploreButton() {
  return (
    <Link to="/destination" className={styles.button}>
      <span>explore</span>
    </Link>
  );
}

export default ExploreButton;
