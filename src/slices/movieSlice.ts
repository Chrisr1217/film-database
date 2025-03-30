import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  movies: [],
  error: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesRequest: (state) => {
      state.loading = true;
    },
    fetchMoviesSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload.Search;
      state.error = "";
    },
    fetchMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure } =
  movieSlice.actions;
export default movieSlice.reducer;
