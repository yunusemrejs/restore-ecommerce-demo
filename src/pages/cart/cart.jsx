import React, { useContext, useState } from 'react'
import CartProduct from '../../components/cartProduct';
import { ShopContext } from '../../context/shopContext'
import { Products } from '../../products'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {SiVisa} from 'react-icons/si'
import {AiOutlinePlus} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
import './cart.css'

export default function cart() {
  const { cartItems, addToCart, removeFromCart, deleteFromCart, cartCount, sumTotal, newItems, sidebarState, setSidebarState} = useContext(ShopContext)
  const [ payment, setPayment ] = useState('visa')

  function getTotal() {
      return newItems.reduce((acc, prod) => {
        return acc + (prod.ProductPrice * prod.quantity)
      }, 0)
  }

  return (
    <div className={`cart-page`}>
      <div className={`checkout-sidebar ${sidebarState ? 'hide': '' }`}>
        <div  onClick={() => setSidebarState(true)} className="close-btn" style={{display: `${sidebarState? 'none' : ''}`}}><ImCross fill='#ff542a'/></div>

        <div className="checkout-content">
          <div onClick={() => console.log('getshitt' ,  getTotal().toFixed(2)) } className="title">
            <p>Checkout Information</p>
            <HiOutlineShoppingCart/>
          </div>

          <div className="payment-section">
            <p>pay with</p>
            <div className='card-options'>
              <SiVisa onClick={() => setPayment('visa')} className='visa' size={48} color={`${payment === 'visa' ? 'white' : '#8a8a8a'}`}/>
              <span onClick={() => setPayment('paypal')} className='paypal'></span>
            </div>
            <span  className="indicator" style={{left: `${payment === 'paypal' ? '6.4em' : ''}`, width: `${payment === 'paypal' ? '6.8em' : ''}`}}></span>
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
        <div className="bg-frost" style={{backdropFilter: `blur( ${sidebarState? '0' : '6px'})`, pointerEvents: `${sidebarState? 'none' : 'unset'}` }}></div>
      </div>

    </div>
  )
      }

      
