import React, { createContext, useState } from 'react'
import { Products } from '../products'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= Products.length; i++) {
    cart[i] = 0;
  }
  return cart;
}

export default function shopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart())
  const [cartCount, setCartCount] = useState(sumTotal)
  const [cartCounter, setCartCounter] = useState(0);
  const [sidebarState, setSidebarState] = useState(true);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: 0}));
  }
  const [newItems, setNewItems] = useState(Products)

  function updateCount() {
  newItems.map(item => {
    if(item.quantity > 0 && item.quantity <= 1){
    return setCartCounter(cartCounter + 1)}
    else
    return setCartCount(cartCount)
  })}

  const contextValue = { cartItems, addToCart, removeFromCart, deleteFromCart, sumTotal, cartCount, cartCounter, setCartCounter, updateCount, newItems, setNewItems, sidebarState, setSidebarState}
  
  // counter indicator
  var cartArr = Object.values(cartItems)
  var sumTotal = cartArr.reduce((accumulator, val) => { return accumulator + val}, 0 )

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
