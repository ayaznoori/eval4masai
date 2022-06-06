import React from "react";
import Product from "./Product/Product";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import style from './Products.module.css'
const Products = () => {
  const [producti,setproducti]=useState([])
  useEffect(()=>{
          axios.get('http://localhost:8080/products').then((e)=>setproducti(e.data))
  },[ ])
  return <div className={style.container}>{
    producti.map((e)=>

            <Product key={e.id} value={e}/>    
    )
    
    }hi</div>;
};

export default Products;
