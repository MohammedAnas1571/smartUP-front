import { createSlice } from "@reduxjs/toolkit";
type TutorState = {
  username: string;
  email: string;
  id: string;
  role: string;
  profilePhoto: string;
  about?: string;
  profession?: string;
};

type InitialState = {
  currentTutor: TutorState | null;
  loading: boolean;
  isTutor: boolean;
};

const initialState: InitialState = {
  currentTutor: null,
  loading: false,
  isTutor: false,
};

const tutorSlice = createSlice({
  name: "tutor",
  initialState,
  reducers: {
    isLoading: (state) => {
      state.loading = true;
    },
    isSuccess: (state) => {
      state.loading = false;
    },
    SuccessData: (state, action) => {
      state.currentTutor = action.payload;
      state.loading = false;
    },
    isFailed: (state) => {
      state.loading = false;
    },
    isTutorLogin: (state) => {
      state.isTutor = true;
    },
    SignOut: (state) => {
      state.currentTutor = null;
      state.isTutor = false;
    },
  },
});
export const {
  isFailed,
  SuccessData,
  isSuccess,
  isLoading,
  isTutorLogin,
  SignOut,
} = tutorSlice.actions;

export default tutorSlice.reducer;
