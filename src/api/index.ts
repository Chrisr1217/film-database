import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from "../slices/movieSlice";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { dispatch }) => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    dispatch(fetchMoviesRequest());
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/authentication",
        options
      );
      const data = await response.json();
      dispatch(fetchMoviesSuccess(data));
    } catch (error) {
      dispatch(fetchMoviesFailure(error.message));
    }
  }
);
