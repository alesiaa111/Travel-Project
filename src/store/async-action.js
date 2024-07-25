import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTourServices = createAsyncThunk(
  "getTourServices",
  async (payload, thunkApi) => {
    const raw = await fetch("https://travel-project-bc057-default-rtdb.europe-west1.firebasedatabase.app");
    const tourServices = await raw.json();

    return thunkApi.fulfillWithValue(tourServices);
  }
);