import { Navigate, Outlet } from 'react-router-dom'
import {   useSelector } from 'react-redux'
import { RootState } from '@/Redux/Store'

export const AdminLayout = () => {
 const {isAdmin}  = useSelector(
        (state: RootState) => state.admin
    );
  return isAdmin?<Outlet/>:<Navigate to="/admin/login"/>

}