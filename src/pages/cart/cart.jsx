import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/shopContext'
import { Products } from '../../products'

export default function cart() {
  const { cartItems, addToCart, removeFromCart} = useContext(ShopContext)
  const [cartCount, setCartCount] = useState(0)
  //   for (let i = 1; i <= Object.keys(cartItems).length; i++) {
  //     setCartCount(cartCount + cartItems[i])
  // }
  // console.log(cartCount);
  
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
