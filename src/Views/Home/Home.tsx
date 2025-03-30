import React from "react";
import { MovieList } from "../../Components";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <p className={styles.title}>Latest Movies</p>
      <MovieList />
    </div>
  );
};
