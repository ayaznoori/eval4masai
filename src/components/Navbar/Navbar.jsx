import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext} from "../../context/CartContext";
import style from './Navbar.module.css'
// use react-router Link or NavLink
 

const Navbar = () => {
  const {auth, logout}=useContext(AuthContext);
  const value=useContext(CartContext);
  const [countv,setcountv]=useState(value);
  useEffect(()=>{
    setcountv(value)
  },[value]) 
 
   return (
    <div data-cy="navbar" className={style.container} >
      <Link data-cy="navbar-home-link" to='/'>Logo</Link>
      <div>
      <span data-cy="navbar-cart-items-count">{ `Cart:${countv}`}</span>&nbsp;
      <button data-cy="navbar-login-logout-button"onClick={logout}>{auth?"Logout":"Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
