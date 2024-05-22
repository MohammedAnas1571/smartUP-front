import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  username: string;
  email: string;
  _id: string;
  role: string;
  profilePhoto: string;
  about: string;
};
type InitialState = {
  currentUser: UserState | null;
  loading: boolean;
  isUserSign: boolean;
};

const initialState: InitialState = {
  currentUser: null,
  loading: false,
  isUserSign: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isLoading: (state) => {
      state.loading = true;
    },
    loginSuccess: (state) => {
      state.loading = false;
    },
    loginSuccessData: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    loginFailed: (state) => {
      state.loading = false;
    },
    isUserLogin: (state) => {
      state.isUserSign = true;
    },
    userSignOut: (state) => {
      state.currentUser = null;
      state.isUserSign = false;
    },
  },
});
export const {
  isUserLogin,
  loginFailed,
  loginSuccessData,
  loginSuccess,
  isLoading,
  userSignOut,
} = userSlice.actions;

export default userSlice.reducer;
