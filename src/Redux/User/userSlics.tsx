import {createSlice}from "@reduxjs/toolkit"
import { toast } from "sonner";

type UserState = {
    username: string;
    email :string;
    isVerified:boolean
    _id:string



}
type InitialState = {
    currentUser :UserState|null;
    loading: boolean;
   

}
  
const initialState:InitialState = {
    
    currentUser:null,
    loading:false,
    
  
}


const userSlice = createSlice ({
    name:"user",
    initialState,
    reducers: {
     signUpStart: (state) => {
      state.loading = true;
    },
    signInSuccessLoading:(state)=>{
      state.loading = false;
    },
    signUpSuccess: (state, action) => {
      state.currentUser = action.payload; 
      state.loading = false;
      
      
    },
    signUpFailure: (state) => {
      state.loading = false
    },
    }


 }) 
export const { signUpStart, signUpSuccess, signUpFailure,signInSuccessLoading} = userSlice.actions

 
 export default userSlice.reducer