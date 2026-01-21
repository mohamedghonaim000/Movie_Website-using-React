import { configureStore } from "@reduxjs/toolkit";
import favouritReducer from './Slices/favorit'
import loaderReducer from './Slices/loader'

 const store = configureStore(
    {
        reducer:{
            favourit:favouritReducer,
            loader:loaderReducer
        }
    }
)

export default store