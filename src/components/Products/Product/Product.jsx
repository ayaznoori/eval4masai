
import axios from "axios";
import { countBy } from "lodash";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = (props) => {
  // Note: this id should come from api
 
  const [count,setcount]=useState(0);
  const dec=()=>{
    setcount(()=>count-1);
  }
  const inc=()=>{
    setcount(()=>count+1);
  }
  const adding=()=>{
      axios({
        method:'POST',
        url:'http://localhost:8080/cartItems',
        data:{
          productId: props.value.id,
          count:count,
          id:props.value.id
        }
      }) 
  }
  const remove=()=>{
    axios.delete(`http://localhost:8080/cartItems/${props.value.id}`)
}
  const product = props.value.id;
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{props.value.name}</h3>
      <h6 data-cy="product-description">{props.value.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={adding}>Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={inc}>+</button>
        <span data-cy="product-count">
          {
            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"onClick={dec}>-</button>
        <button data-cy="product-remove-cart-item-button"onClick={remove}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Product;
