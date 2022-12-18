import React from 'react'
import './cartProduct.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {FaMinus} from 'react-icons/fa'
// import {GoPlus} from 'react-icons/go'

export default function cartProduct({img, name, cartItems, price, id, add, remove, del}) {
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
            <span>${(price * cartItems).toFixed(2)}</span>

            <div className="quantity">
              <button onClick={() => remove(id)}><FaMinus size={11}/></button>
                <p>{cartItems}</p>
              <button onClick={() => add(id)}><FaMinus size={11}/><FaMinus size={11}/></button>
            </div>
          </div>
        
          <button onClick={() => del(id)} className='cancel-btn'><AiOutlinePlus size={17}/></button>
        </div>

      </div>
    </div> 
  )
}
