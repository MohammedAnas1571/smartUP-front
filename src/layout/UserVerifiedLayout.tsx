

import {   useSelector } from 'react-redux'
import { RootState } from '@/Redux/Store'
import { Navigate, Outlet } from 'react-router-dom';

const UserVerifiedLayout = () => {
    const {isUserSign}  = useSelector(
        (state: RootState) => state.user
    );
  return isUserSign? <Navigate to="/"/>:<Outlet/> 
}
    
export default UserVerifiedLayout





