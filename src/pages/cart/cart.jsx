import React, { useContext, useState } from 'react'
import CartProduct from '../../components/cartProduct';
import { ShopContext } from '../../context/shopContext'
import { Products } from '../../products'

export default function cart() {
  const { cartItems, addToCart, removeFromCart, cartCount, sumTotal} = useContext(ShopContext)
  console.log('cartCount: ' + cartCount, sumTotal, cartItems[1]);

  return (
    <div style={{width: '100%', height: '100%', display: 'flex', 
      alignItems: 'center', flexDirection: 'column', gap: '20px'}}>
      {Products.map((item) => 
        {        
          if (cartItems[item.id] !== 0) 
            return (
              <CartProduct key={item.id} id={item.id} img={item.ProductImage} name={item.ProductName} 
                cartItems={cartItems[item.id]} price={item.ProductPrice} remove={removeFromCart}/> 
            )      
        }
      )}
    </div>
  )
      }
