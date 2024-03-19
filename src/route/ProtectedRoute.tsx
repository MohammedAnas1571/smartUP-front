import { RootState } from "@/Redux/Store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export function ProtectedRoute() {
  const navigate = useNavigate();
  const role = useSelector((state: RootState) => state.user.currentUser?.role);
  const isInstructor = role === "instructor";
  useEffect(() => {
    if (!isInstructor) {
      navigate("/instructor/signin");
    }
  });

  return isInstructor ? (
      <Outlet />
  ) : (
    <></>
  );
}
