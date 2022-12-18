import { Products } from "../../products"
import Product from "../../components/product"
import { useState } from "react"

export default function shop() {
  const [cartProducts, setCartProducts] = useState([])

  return (
    <div style={{display: 'flex', gap: '4rem 3rem', justifyContent: 'center', 
        flexWrap: 'wrap', padding: '3rem 4rem' }}>
      { 
        Products.map((item) => <Product key={item.id} data={item} 
        setCartProducts={setCartProducts} cartProducts={cartProducts}/>)
      }
    </div>
  )
}
