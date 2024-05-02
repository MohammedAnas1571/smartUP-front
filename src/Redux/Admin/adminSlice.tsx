import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  isAdmin: false,
};

const adminSlice = createSlice({
  name: "Admin",
  initialState,
  reducers: {
    isAdminLogin: (state) => {
      state.isAdmin = true;
    },
    adminSignOut: (state) => {
      state.isAdmin = false;
    },
  },
});
export const {
  isAdminLogin,
  adminSignOut,
} = adminSlice.actions;

export default adminSlice.reducer;
