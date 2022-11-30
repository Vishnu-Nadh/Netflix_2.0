import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice/user-slice";
import movieReducer from "./movie-slice/movie-slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default store;
