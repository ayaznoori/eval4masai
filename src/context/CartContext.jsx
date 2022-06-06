import React, { createContext } from "react";
import { useState,useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [data1,setdata1]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8080/cartitems').then((e)=>setdata1(e.data.length))
    
},[])

  return <CartContext.Provider value={data1}>{children}</CartContext.Provider>;
};
