import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import style from './login.module.css';
const Login = () => {
  const {login}=useContext(AuthContext)
  return (
    <div className={style.container}>
      <label>Login</label>
      <input data-cy="login-email" value='asda@gmail.com'/>
      <input data-cy="login-password" value='password' />
      <button data-cy="login-submit" onClick={login}> login</button>
    </div>
  );
};

export default Login;
