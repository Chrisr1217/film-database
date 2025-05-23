import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";

const store = configureStore({
  reducer: {
    movieState: movieReducer,
  },
});

export default store;
