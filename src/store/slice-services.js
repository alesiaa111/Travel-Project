import { createSlice } from "@reduxjs/toolkit";
import { getTourServices } from "./async-action";
import { addServicesData } from "./async-action";

export const tourServiceSlice = createSlice({
  name: "tourServiceSlice",
  initialState: {
    servicesData: [],
    tourServices: [],
    loading: false,
    error: null,
  },
  reducers: {
    setServices: (state, action) => {
      state.servicesData = action.payload;
    },
    setTourServices: (state, action) => {
      state.tourServices = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addServicesData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addServicesData.fulfilled, (state, action) => {
        state.loading = false;
        state.servicesData = action.payload;
      })
      .addCase(addServicesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
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

export const { setServices, setTourServices } = tourServiceSlice.actions;
export default tourServiceSlice.reducer;
