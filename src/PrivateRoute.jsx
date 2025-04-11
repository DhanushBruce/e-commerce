import React from "react";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const login = useSelector((state) => state.loginInfo.Login);

  if (!login) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
