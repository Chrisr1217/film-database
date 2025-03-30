import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../api/index";
import styles from "./MovieList.module.css";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movieState);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  console.log(movies);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Movie List</h2>
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
