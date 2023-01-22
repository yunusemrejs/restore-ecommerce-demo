import React, { useContext } from 'react'
import './cartProduct.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {FaMinus} from 'react-icons/fa'
import { ShopContext } from '../context/shopContext'

export default function cartProduct({img, name, cartItems, price, id, add, remove, del}) {

  const {newItems, setNewItems, cartCounter, setCartCounter, updateCount} = useContext(ShopContext)

  function plus(id) {
    setNewItems(
      newItems.map((item) => {
        if(item.id === id) {  
          return {...item, quantity: item.quantity + 1};
        }
        else
        return item
      })
      )
 } 

  function minus(id) {
    setNewItems(
      newItems.map((item) => {
        if(item.id === id) {
          let val ={...item, quantity: item.quantity - 1};
          if(val.quantity < 1){
            setCartCounter(cartCounter - 1)}
          return val
        }
        else
        return item
      })
      )
 } 

  function yeet(id) {
    setNewItems(
      newItems.map((item) => {
        if(item.id === id) {
          setCartCounter(cartCounter - 1)
          return {...item, quantity: 0};
        }
        else
        return item
      })
      )
 } 

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
              <button onClick={() => {remove(id); minus(id)}}><FaMinus size={11}/></button>
                <p>{cartItems}</p>
              <button onClick={() => {add(id); plus(id)}}><FaMinus size={11}/><FaMinus size={11}/></button>
            </div>
          </div>
        
          <button onClick={() => {del(id); yeet(id)}} className='cancel-btn'><AiOutlinePlus size={17}/></button>
        </div>

      </div>
    </div> 
  )
}
