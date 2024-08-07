import { configureStore } from "@reduxjs/toolkit";
import tourServiceReducer from "./slice-tour-services";

export const store = configureStore({
  reducer: {
    tourServices: tourServiceReducer,
  },
});