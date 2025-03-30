import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <h1>Film Sorter</h1>
      <div className={styles.linksContainer}>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Movies
        </NavLink>
      </div>
      <div className={styles.linksContainer}>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Log In
        </NavLink>
        <NavLink
          to="/signUp"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
