import { Products } from "../../products"
import Product from "../../components/product"
import { useContext, useState } from "react"
import { ShopContext } from "../../context/shopContext"
import pay from '../../assets/paypal-logo-svgrepo-com.svg'
import { SiReact } from "react-icons/si"
import Heart from '../../assets/heart'
import './shop.css'

export default function shop() {
  const [cartProducts, setCartProducts] = useState([])
  const {newItems} = useContext(ShopContext)

  return (
    <>
      <div className="product-container">
        { 
          newItems.map((item) => <Product newItems={newItems} key={item.id} data={item} 
          setCartProducts={setCartProducts} cartProducts={cartProducts}/>)
        }
      </div>
      
      <div className="credits">
        <span>made with</span>
        <Heart/> <span>and</span>
        <a className="react" href="https://reactjs.org/"  target="_blank">
        <SiReact color="#618ffb" size={'1.4em'}/>
        </a> 
        <span>by</span><a className="name" href="https://github.com/Steve-bro" target="_blank">Steve</a>
      </div>
    </>
  )
}
 