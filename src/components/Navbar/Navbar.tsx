import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <nav className={styles.headerNav}>
      {isNotMobile && (
        <>
          <NavLink
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to="/"
          >
            {isNotMobile && <span className={styles.number}>00</span>}
            home
          </NavLink>
          <NavLink
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to="/destination"
          >
            <span className={styles.number}>01</span> destination
          </NavLink>
          <NavLink
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to="/crew"
          >
            <span className={styles.number}>02</span> crew
          </NavLink>
          <NavLink
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to="/technology"
          >
            <span className={styles.number}>03</span> technology
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default Navbar;
