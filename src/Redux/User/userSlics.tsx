import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  username: string;
  email: string;
  id: string;
  role: string;
  profilePhoto: string;
};
type InitialState = {
  currentUser: UserState | null;
  loading: boolean;
  isUserSign:boolean;
  isTutorSign:boolean;
};

const initialState: InitialState = {
  currentUser: null,
  loading: false,
  isUserSign:false,
  isTutorSign:false
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
      state.currentUser = action.payload.user;
      state.loading = false;
    },
    loginFailed: (state) => {
      state.loading = false;
    },
    isUserLogin:(state)=>{
      state.isUserSign =true
      state.isTutorSign =false
    },
    isTutorLogin:(state)=>{
      state.isTutorSign = true
      state.isUserSign =false
    },usersignOut:(state)=>{
      state.currentUser=null
      state.isUserSign=false
    }
  },
});
export const {
  isUserLogin,loginFailed,loginSuccessData,loginSuccess,isLoading,isTutorLogin,usersignOut
} = userSlice.actions;

export default userSlice.reducer;
