import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from "../slices/movieSlice";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=latest&page=1`;

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { dispatch }) => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    dispatch(fetchMoviesRequest());
    try {
      const response = await fetch(API_URL, options);
      const data = await response.json();
      dispatch(fetchMoviesSuccess(data));
    } catch (error) {
      dispatch(fetchMoviesFailure(error.message));
    }
  }
);
