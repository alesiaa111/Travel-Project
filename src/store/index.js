import { configureStore } from "@reduxjs/toolkit";
import tourServiceReducer from "./slice-tour-services";
import formReducer from "./slice-form";
import usersReducer from "./slice-user";
import authReducer from "./slice-auth";

export const store = configureStore({
  reducer: {
    tourServices: tourServiceReducer,
    form: formReducer,
    users: usersReducer,
    userAuth: authReducer,
  },
});
