import {   useSelector } from 'react-redux'
import { RootState } from '@/Redux/Store'
import { Navigate, Outlet } from 'react-router-dom';

const InstructorVerifiedLayout = () => {
    const {isTutorSign}  = useSelector(
        (state: RootState) => state.user
    );
  return isTutorSign? <Navigate to="/instructor/dashboard"/>:<Outlet/> 
}
    
export default InstructorVerifiedLayout