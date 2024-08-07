import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    phone: "",
    serviceId: "",
  },
  reducers: {
    setFormData(state, action) {
      const { name, phone, serviceId } = action.payload;
      state.name = name;
      state.phone = phone;
      state.serviceId = serviceId;
    },
    clearFormData(state) {
      state.name = "";
      state.phone = "";
      state.serviceId = "";
    },
  },
});

export const { setFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;
