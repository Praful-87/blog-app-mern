import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
const Private = ({ children }) => {
  const toast = useToast();
  const Auth = useSelector((state) => state.AuthReducer.isAuth);

  const authenticaton = JSON.parse(localStorage.getItem("authenticaton")) || {};

  const isAuth = Object.keys(authenticaton).length > 0 ? true : false;

  const user = authenticaton?.user;

  if (!isAuth) {
    toast({
      title: "Login First",
      status: "error",
      position: "top",
    });
    return <Navigate to="/login" />;
  }

  return children;
};

export default Private;
