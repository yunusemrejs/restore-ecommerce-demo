import React, { useContext, useState } from 'react'
import CartProduct from '../../components/cartProduct';
import { ShopContext } from '../../context/shopContext'
import { Products } from '../../products'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {SiVisa} from 'react-icons/si'
import './cart.css'

export default function cart() {
  const { cartItems, addToCart, removeFromCart, deleteFromCart, cartCount, sumTotal} = useContext(ShopContext)

  return (
    <div className='cart-page'>
      <div className="checkout-sidebar">

        <div className="checkout-content">
          <div className="title">
            <p>Checkout Information</p>
            <HiOutlineShoppingCart/>
          </div>

          <div className="card-section">
            <p>pay with</p>
            <div className='card-options'>
              <SiVisa size={48} color='white'/>
              <span className='paypal'></span>
            </div>
          </div>

          <div className="bill-section">
            <div>
              <div className="name">subtotal</div>
              <div className="cost">$69.00</div>
            </div>

            <div>
              <div className="name">taxes</div>
              <div className="cost">$69.00</div>
            </div>

            <div>
              <div className="name">shipping</div>
              <div className="cost">$69.00</div>
            </div>

            <div>
              <div className="name">grand total</div>
              <div className="cost">$69.00</div>
            </div>
          </div>
        </div>

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

      
