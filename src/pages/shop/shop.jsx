import { Products } from "../../products"
import Product from "../../components/product"
import { useContext, useState } from "react"
import { ShopContext } from "../../context/shopContext"
import pay from '../../assets/paypal-logo-svgrepo-com.svg'

export default function shop() {
  const [cartProducts, setCartProducts] = useState([])
  const {newItems} = useContext(ShopContext)

  return (
    // <div style={{display: 'flex', gap: '4rem 3rem', justifyContent: 'center', 
    //     flexWrap: 'wrap', padding: '3rem 4rem' }}>
    //   { 
    //     Products.map((item) => <Product key={item.id} data={item} 
    //     setCartProducts={setCartProducts} cartProducts={cartProducts}/>)
    //   }
    // </div>
    <div style={{display: 'flex', gap: '2.5em 1em', justifyContent: 'center', 
        flexWrap: 'wrap', padding: '3rem 4rem' }}>
      { 
        newItems.map((item) => <Product newItems={newItems} key={item.id} data={item} 
        setCartProducts={setCartProducts} cartProducts={cartProducts}/>)
      }
    </div>
  )
}
