import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import { Navigate, Outlet } from "react-router-dom";

const InstructorVerifiedLayout = () => {
  const { isTutor } = useSelector((state: RootState) => state.tutor);
  return isTutor ? <Navigate to="/instructor/dashboard" /> : <Outlet />;
};

export default InstructorVerifiedLayout;
