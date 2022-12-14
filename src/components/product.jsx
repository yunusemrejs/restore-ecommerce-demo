import React from 'react'
import "./product.css"


export default function product(props) {
  return (
    <div className='product'>
      <img src={props.data.ProductImage} alt="clothing" />
      <div className="name">
        <p>{props.data.ProductName}</p>
      </div>
      <div className="add">
        <span>${props.data.ProductPrice}</span>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
