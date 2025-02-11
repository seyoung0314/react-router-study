import { Link, NavLink } from "react-router-dom";
import styles from "./MainNav.module.scss";

const MainNav = () => {
  const activeLink = ({isActive}) => `${styles.navLink} ${isActive ? styles.active : ''}`;

  return (
    <nav className={styles.nav}>
      <NavLink className={activeLink} to="/">
        Home
      </NavLink>
      <NavLink className={activeLink} to="/blog">
        Blog
      </NavLink>
      <NavLink className={activeLink} to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default MainNav;
