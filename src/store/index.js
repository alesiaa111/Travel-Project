import { configureStore } from "@reduxjs/toolkit";
import tourServiceReducer from "./slice-tour-services";
import formReducer from "./slice-tour-services";
import usersReducer from "./slice-user"

export const store = configureStore({
  reducer: {
    tourServices: tourServiceReducer,
    form: formReducer,
    users: usersReducer,
  },
});