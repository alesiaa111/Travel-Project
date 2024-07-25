import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    services: [],
    isLoading: false,
    error: null,
};


export const tourServiceSlice = createSlice({
  name: "tourService",
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
    setIsLoading (state, action) {
        state.isLoading = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setServices.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
    });
    builder.addCase(setServices.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    });
}
});

export const {setUsers, setIsLoading} = userSlice.actions;
export default userSlice.reducer;