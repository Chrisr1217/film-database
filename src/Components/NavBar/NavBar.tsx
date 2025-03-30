import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <h1>Film Sorter</h1>
      <div className={styles.linksContainer}>
        <Link to="/home">Home</Link>
        <Link to="/movies">Movies</Link>
      </div>
      <div className={styles.linksContainer}>
        <Link>Log In</Link>
        <Link>Sign Up</Link>
      </div>
    </div>
  );
};
