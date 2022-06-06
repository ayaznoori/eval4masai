import React, { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();
   
export const AuthProvider = ({ children }) => {
    const [auth,setauth]=useState(false);
    const login=()=>{
          setauth(true)
    }
    const logout=()=>{
        setauth(false)
    }

  return <AuthContext.Provider value={{auth,login,logout}}>{children}</AuthContext.Provider>;
};
