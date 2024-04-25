import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";

const InstructorAuthLayout = () => {
  const { isTutor } = useSelector((state: RootState) => state.tutor);
  return isTutor ? <Outlet /> : <Navigate to="/" />;
};

export default InstructorAuthLayout;
