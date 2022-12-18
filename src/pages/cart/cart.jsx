import React, { useContext, useState } from 'react'
import CartProduct from '../../components/cartProduct';
import { ShopContext } from '../../context/shopContext'
import { Products } from '../../products'
import './cart.css'

export default function cart() {
  const { cartItems, addToCart, removeFromCart, deleteFromCart, cartCount, sumTotal} = useContext(ShopContext)
  // console.log(cartCount)
  return (
    <div className='cart-page'>
      <div className="checkout-sidebar">
        <button>Procceed To Checkout</button>
      </div>

      <div className='cart-items-container' style={{width: '100%', display: 'flex', 
        alignItems: 'center', flexDirection: 'column', gap: '20px'}}>
        {Products.map((item) => 
          {        
            if (cartItems[item.id] !== 0) 
              return (
                <CartProduct key={item.id} id={item.id} img={item.ProductImage} name={item.ProductName} 
                  cartItems={cartItems[item.id]} price={item.ProductPrice} add={addToCart}
                  remove={removeFromCart} del={deleteFromCart}/> 
              )      
          }
        )}
      </div>

    </div>
  )
      }
