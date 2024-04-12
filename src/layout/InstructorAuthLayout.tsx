
import { Navigate, Outlet } from 'react-router-dom'
import {   useSelector } from 'react-redux'
import { RootState } from '@/Redux/Store'

const InstructorAuthLayout = () => {
    const {isTutorSign}  = useSelector(
        (state: RootState) => state.user
    );
  return  isTutorSign?<Outlet/>:<Navigate to = "/instructor/signin" />
}

export default InstructorAuthLayout







 


