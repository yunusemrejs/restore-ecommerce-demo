import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import "./product.css"


export default function product(props) {
  let cartData = props.data
  const { cartItems, addToCart, newItems, setNewItems, num} = useContext(ShopContext)

  function updateCart(id) {
    setNewItems(
      newItems.map((item) => {
        if(item.id === id) 
          return {...item, quantity: item.quantity + 1};
        else
        return item
      })
    )
 } 
 console.log(newItems)
  return (
    <div className='product'>
      <img src={props.data.ProductImage} alt="clothing" />

      <div className="name">
        <p>{props.data.ProductName}</p>
      </div>

      <div className="add">
        <span>${props.data.ProductPrice}</span>
        <button onClick={(newItem) => {
          props.setCartProducts(props.cartProducts.concat({cartData})); 
          addToCart(props.data.id);
          updateCart(props.data.id)
          }}>
            Add to cart
            { cartItems[props.data.id] > 0 && <>({props.data.quantity})</>}
        </button>
      </div>
    </div>
  )
}
