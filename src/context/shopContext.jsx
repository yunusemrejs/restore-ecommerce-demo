import React, { createContext, useState } from 'react'
import { Products } from '../products'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

export default function shopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart())
  const [cartCount, setCartCount] = useState(sumTotal)

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
  };

  const contextValue = { cartItems, addToCart, removeFromCart, sumTotal, cartCount}
  
  console.log('cart items: ', cartItems);
  
  // counter indicator
  let cartArr = Object.values(cartItems)
  var sumTotal = cartArr.reduce((accumulator, val) => { return accumulator + val}, 0 )
  console.log('cartarr and sum', cartArr, sumTotal)

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
