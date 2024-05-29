
import { Navigate, Outlet } from 'react-router-dom'
import {   useSelector } from 'react-redux'
import { RootState } from '@/Redux/Store'

 const UserAuthLayout = () => {
 const {isUserSign}  = useSelector(
        (state: RootState) => state.user
    );
  return isUserSign?<Outlet/>:<Navigate to="/signin"/>

}
export default UserAuthLayout
