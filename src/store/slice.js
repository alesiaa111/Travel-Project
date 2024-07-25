import { createSlice } from "@reduxjs/toolkit";
import { getTourServices } from "./async-action";


const initialState = {
    tourServices: [],
    error: null,
};


export const tourServiceSlice = createSlice({
  name: "tourServiceSlice",
  initialState,
  reducers: {
    setTourServices: (state, action) => {
      state.tourServices = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTourServices.fulfilled, (state, action) => {
        state.tourServices = action.payload;
        
    });
    builder.addCase(getTourServices.rejected, (state, action) => {
        state.error = action.payload;
        
    });
}
});

export const { setTourServices } = tourServiceSlice.actions;
export default tourServiceSlice.reducer;