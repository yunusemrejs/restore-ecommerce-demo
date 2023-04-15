import React from 'react'
import './cartProduct.css'
import {AiOutlinePlus} from 'react-icons/ai'
import Minus from '../assets/minus'
import Plus from '../assets/plus'

export default function cartProduct({img, name, cartItem, price, id, add, remove, del}) {
  return (
    <div className='cart-product-container'>
      <img src={img}/>
      <div className="product-details-wrapper">
        <div className="product-info">
          <div className="text">  
            <p className='title'>{name}</p>
            <p>Lorem ipsum dolor sit amet consect facilis.</p>
          </div>
        </div>

        <div className="right-side-wrapper">
          <div className="price-options">
            <span>${(price * cartItem.quantity).toFixed(2)}</span>

            <div className="quantity">
              <button onClick={() => remove(cartItem)}><Minus/></button>
                <p>{cartItem.quantity}</p>
              <button onClick={() => add(cartItem)}><Plus/></button>
            </div>
          </div>
        
          <button onClick={() => del(cartItem)} className='cancel-btn'><AiOutlinePlus size={17}/></button>
        </div>

      </div>
    </div> 
  )
}
