import { createSlice } from "@reduxjs/toolkit";
import { loginAdmin } from "./async-action";

export const authSlice = createSlice({
  name: "userAuth",
  initialState: {
    auth: "",
    email: "",
    password:"",
    loading: false,
    error: null,
  },
  reducers: {
    setLogIn: (state, action) => {
      const { auth, email, password } = action.payload;
      state.auth = auth;
      state.email = email;
      state.password = password;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.fulfilled, (state, action) => {
        const { auth, email, password } = action.payload;
        state.auth = auth;
        state.email = email;
        state.password = password;
        state.loading = false;
        
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setLogIn } = authSlice.actions;
export default authSlice.reducer;
