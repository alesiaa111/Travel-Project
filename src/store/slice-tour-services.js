import { createSlice } from "@reduxjs/toolkit";
import { getTourServices } from "./async-action";

export const tourServiceSlice = createSlice({
  name: "tourServiceSlice",
  initialState: {
    tourServices: [],
    loading: false,
    error: null,
  },
  reducers: {
    setTourServices: (state, action) => {
      state.tourServices = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTourServices.fulfilled, (state, action) => {
        state.loading = false;
        state.tourServices = action.payload;
      })
      .addCase(getTourServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setTourServices } = tourServiceSlice.actions;
export default tourServiceSlice.reducer;
