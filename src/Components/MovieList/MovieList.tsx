import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../api/index";
import styles from "./MovieList.module.css";
import { LoadingSpinner } from "./../../Components";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movieState);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (!loading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ul className={styles.container}>
        {movies.map((movie) => (
          <div className={styles.rowContainer}>
            <p key={movie.id} className={styles.movieText}>
              {movie.Title}
            </p>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
