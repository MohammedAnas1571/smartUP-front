import { Page404 } from "@/Pages/404";
import { RootState } from "@/Redux/Store";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
export function ProtectedRoute() {

    const role = useSelector((state: RootState) => state.user.currentUser?.role);
    const isInstructor = role === "instructor";
   
    return isInstructor ? (
        <div>
            <div>navBar</div>
            <Outlet />

        </div>
        ) : (
            
            <Page404/>
  );
}
