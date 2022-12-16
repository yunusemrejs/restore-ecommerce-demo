import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/shopContext'
import { Products } from '../../products'

export default function cart() {
  const { cartItems, addToCart, removeFromCart, cartCount, sumTotal} = useContext(ShopContext)
  console.log('cartCount: ' + cartCount, sumTotal, cartItems[1]);

  return (
    <div>
      {Products.map((item) => 
        {        
          if (cartItems[item.id] !== 0) 
            return (
              <div key={item.id}>
                <p>{item.ProductName}</p>
                <p>{cartItems[item.id]}   </p>
                
                <img style={{width: '20em'}} src={item.ProductImage}/>
              </div> 
            )      
        }
      )}
    </div>
  )
      }
