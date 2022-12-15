import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import "./product.css"


export default function product(props) {
  let cartData = props.data
  const { cartItems, addToCart} = useContext(ShopContext)
  
  return (
    <div className='product'>
      <img src={props.data.ProductImage} alt="clothing" />

      <div className="name">
        <p>{props.data.ProductName}</p>
      </div>

      <div className="add">
        <span>${props.data.ProductPrice}</span>
        <button onClick={() => 
          {props.setCartProducts(props.cartProducts.concat({cartData})); 
          addToCart(props.data.id)}}>
            Add to cart
            { cartItems[props.data.id] > 0 && <>({cartItems[props.data.id]})</>}
        </button>
      </div>
    </div>
  )
}
