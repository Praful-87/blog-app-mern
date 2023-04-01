import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  if (!isAuth) return <Navigate to="/" />;

  return children;
};

export default Private;
