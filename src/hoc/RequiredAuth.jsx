import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/Login";
 

const RequiredAuth = ({ children }) => {
   const {auth}=useContext(AuthContext);
   if(auth)
      return children;
  else
      return <Login/>
};

export default RequiredAuth;
