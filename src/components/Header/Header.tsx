import logo from "../../assets/shared/logo.svg";
import hamburgerMenu from "../../assets/shared/icon-hamburger.svg";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import iconClose from "../../assets/shared/icon-close.svg";
import { Link } from "react-router";

function Header() {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isMobile = useMediaQuery({ maxWidth: 425 });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
      {isDesktop && <div className={styles.line}></div>}
      {isMobile && (
        <img
          className={styles.hamburgerMenu}
          src={hamburgerMenu}
          alt="Menu"
          onClick={() => setMenuOpen(true)}
        />
      )}

      <nav className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <button onClick={() => setMenuOpen(false)}>
          <img className={styles.closeIcon} src={iconClose} alt="Close icon" />
        </button>
        <Link
          className={styles.burgerMenuLink}
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          <span className={styles.burgerMenuNumber}>00</span>Home
        </Link>
        <Link
          className={styles.burgerMenuLink}
          to="/destination"
          onClick={() => setMenuOpen(false)}
        >
          <span className={styles.burgerMenuNumber}>01</span>Destination
        </Link>
        <Link
          className={styles.burgerMenuLink}
          to="/crew"
          onClick={() => setMenuOpen(false)}
        >
          <span className={styles.burgerMenuNumber}>02</span>Crew
        </Link>
        <Link
          className={styles.burgerMenuLink}
          to="/technology"
          onClick={() => setMenuOpen(false)}
        >
          <span className={styles.burgerMenuNumber}>03</span>Technology
        </Link>
      </nav>
      <Navbar />
    </header>
  );
}

export default Header;
