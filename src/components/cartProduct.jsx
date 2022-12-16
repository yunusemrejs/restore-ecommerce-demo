import React from 'react'
import './cartProduct.css'
import {AiOutlinePlus} from 'react-icons/ai'

export default function cartProduct({img, name, cartItems, price, id, remove, del}) {
  return (
    <div className='cart-product-container'>
      <img src={img}/>
      <div className="product-details-wrapper">
        <div className="product-info">
          <div className="text">
            <p className='title'>{name}</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="right-side-wrapper">
          <div className="price-options">
            <span>${price}</span>
            <p>{cartItems}</p>
          </div>
        
          <button onClick={() => del(id)} className='cancel-btn'><AiOutlinePlus size={17}/></button>
        </div>
      </div>
    </div> 
  )
}
