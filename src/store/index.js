import { configureStore } from "@reduxjs/toolkit";
import tourServiceReducer from "./slice-services";
import  formReducer  from "./slice-form";

export const store = configureStore({
  reducer: {
    tourServices: tourServiceReducer,
    form: formReducer,
  },
});
