import { createSlice } from "@reduxjs/toolkit";
import { getUserList } from "./async-action";

export const userListSlice = createSlice({
  name: "userListSlice",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    setUserList: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserList.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUserList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUserList } = userListSlice.actions;
export default userListSlice.reducer;
