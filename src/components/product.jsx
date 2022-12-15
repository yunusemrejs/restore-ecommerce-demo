import React, { useState } from 'react'
import "./product.css"

export default function product(props) {
  let cartData = props.data
  
  return (
    <div className='product'>
      <img src={props.data.ProductImage} alt="clothing" />
      <div className="name">
        <p>{props.data.ProductName}</p>
      </div>
      <div className="add">
        <span>${props.data.ProductPrice}</span>
        <button onClick={() => {props.setCartProducts(props.cartProducts.concat({cartData}))}}>Add to cart</button>
      </div>
    </div>
  )
}
