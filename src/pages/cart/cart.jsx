import React, { useContext, useState } from 'react'
import CartProduct from '../../components/cartProduct';
import { ShopContext } from '../../context/shopContext'
import { Products } from '../../products'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {SiVisa} from 'react-icons/si'
import {AiOutlinePlus} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
import Paypal from '../../assets/paypal';
import './cart.css'

export default function cart() {
  const { cartItems, addToCart, removeFromCart, deleteFromCart, newItems, setNewItems, sidebarState, setSidebarState, setCartCounter, cartCounter} = useContext(ShopContext)
  const [ payment, setPayment ] = useState('visa')

  const width = window.innerWidth

  function getTotal() {
      return newItems.reduce((acc, prod) => {
        return acc + (prod.ProductPrice * prod.quantity)
      }, 0)
  }

  function clearCart() {
    setCartCounter(0)
    setNewItems(
      newItems.map(item => {
        return {...item, quantity : 0}
      })
    )
  }

  return (
    <div className={`cart-page`}>
      <div className={`checkout-sidebar ${sidebarState ? 'hide': '' }`}>
        <div className="checkout-content">
          <div className="title">
            <p>Checkout Information</p>
            <div className="cls-btn" onClick={() => setSidebarState(true)}><ImCross fill='#ff542a'/></div>
          </div>

          <div className="payment-section">
            <p>pay with</p>
            <div className='card-options'>
              <SiVisa onClick={() => setPayment('visa')} className='visa' size={85} color={`${payment === 'visa' ? 'white' : '#8a8a8a'}`}/>
              <Paypal setPay={setPayment} payment={payment}></Paypal> 
            </div>
            <span  className="indicator" style={{left: `${payment === 'paypal' ? width <= 780 ? '7.3em' : '6.5em' : ''}`, width: `${payment === 'paypal' ? '6.8em' : ''}`}}></span>
          </div>

          <div className="bill-section">
            <div>
              <div className="name">subtotal</div>
              <div className="cost">${getTotal().toFixed(2)}</div>
            </div>

            <div>
              <div className="name">taxes</div>
              <div className="cost">$69.00</div>
            </div>

            <div>
              <div className="name">shipping</div>
              <div className="cost">$420.69</div>
            </div>

            <div>
              <div className="name">grand total</div>
              <div className="cost">${getTotal() && (489.69 + getTotal()).toFixed(2)}</div>
            </div>
          </div>
        </div>

        <button>Procceed To Checkout</button>
      </div>

      <div className={`cart-items-container  ${sidebarState ? 'p0': '' }`}>
        {newItems.map((item) => 
          {        
            if (item.quantity !== 0) 
              return (
                <CartProduct key={item.id} id={item.id} img={item.ProductImage} name={item.ProductName} 
                  cartItems={cartItems[item.id]} price={item.ProductPrice} add={addToCart}
                  remove={removeFromCart} del={deleteFromCart}/> 
              )      
          }
        )}
        { cartCounter > 1 && <button onClick={() => clearCart()} className="clear-btn">Empty Cart</button>}
        { !cartCounter && <h1 style={{fontFamily: 'DM Sans', marginTop: '4em'}}>Your Cart Is Empty 😔</h1>}
        <div className="bg-frost" onClick={() => setSidebarState(true)} style={{backdropFilter: `blur( ${sidebarState? '0' : '6px'})`, pointerEvents: `${sidebarState? 'none' : 'unset'}` }}></div>
      </div>

    </div>
  )
      }

      
