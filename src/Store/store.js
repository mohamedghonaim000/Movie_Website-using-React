import { configureStore } from "@reduxjs/toolkit";
import favouritReducer from "./Slices/favorit";
import loaderReducer from "./Slices/loader";
import moviesReducer from "./Slices/movies"; 

const store = configureStore({
  reducer: {
    favourit: favouritReducer,
    loader: loaderReducer,
    movies: moviesReducer,
  },
});

export default store;