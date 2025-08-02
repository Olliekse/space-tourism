import logo from "../../assets/shared/logo.svg";
import hamburgerMenu from "../../assets/shared/icon-hamburger.svg";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import { useMediaQuery } from "react-responsive";

function Header() {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isMobile = useMediaQuery({ maxWidth: 425 });

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} />
      {isDesktop && <div className={styles.line}></div>}
      {isMobile && <img className={styles.hamburgerMenu} src={hamburgerMenu} />}
      <Navbar />
    </header>
  );
}

export default Header;
