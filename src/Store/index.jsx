import { configureStore } from "@reduxjs/toolkit";
import favouritReducer from './Slices/index'

 const store = configureStore(
    {
        reducer:{
            favourit:favouritReducer
        }
    }
)

export default store