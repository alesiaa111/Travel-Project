import { createSlice } from "@reduxjs/toolkit";
import { getTourServices } from "./async-action";
import { addServicesData } from "./async-action";

export const servicesDataSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
    loading: false,
    error: null,
  },
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
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
        state.services = action.payload; // Обновляем список услуг
      })
      .addCase(addServicesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Обработка ошибки
      });
  },
});

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
    builder.addCase(getTourServices.fulfilled, (state, action) => {
      state.tourServices = action.payload;
    });
    builder.addCase(getTourServices.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { setTourServices } = tourServiceSlice.actions;
export default tourServiceSlice.reducer;
