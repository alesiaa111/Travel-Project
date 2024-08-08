import { createSlice } from "@reduxjs/toolkit";
import { submitForm } from "./async-action"; 

export const formSlice = createSlice({
  name: "form",
  initialState: {
    userName: "",
    phone: "",
    serviceId: "",
    error: null, 
  },
  reducers: {
    setFormData(state, action) {
      const { userName, phone, serviceId } = action.payload;
      state.userName = userName;
      state.phone = phone;
      state.serviceId = serviceId;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.fulfilled, (state, action) => {
        const { userName, phone, serviceId } = action.payload;
        state.userName = userName;
        state.phone = phone;
        state.serviceId = serviceId;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setFormData, setClearForm } = formSlice.actions;
export default formSlice.reducer;
