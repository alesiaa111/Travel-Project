import { configureStore } from "@reduxjs/toolkit";
import tourServiceReducer from './slice';

export const store = configureStore({
    reducer: {
        tourServices: tourServiceReducer 
    },
   
});
