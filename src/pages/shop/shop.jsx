import { Products } from "../../products"
import Product from "../../components/product"
import { useState } from "react"

export default function shop() {
  const [cartProducts, setCartProducts] = useState([])

  return (
    <div onClick={() => console.log(cartProducts)} className="products-wrapper" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', paddingInline: '6rem', gap: '1.5rem 3rem'}}>
      { Products.map((item) => <Product key={item.id} data={item} setCartProducts={setCartProducts} cartProducts={cartProducts}/>)}
    </div>
  )
}
