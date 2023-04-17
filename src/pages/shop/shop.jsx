import Product from "../../components/product"
import { useState } from "react"
import pay from '../../assets/paypal-logo-svgrepo-com.svg'
import { SiReact } from "react-icons/si"
import Heart from '../../assets/heart'
import './shop.css'
import ShoppingCartStore from '../../store/ShoppingCartStore';
import useStore from '../../hooks/useStore';
import { Products } from "../../products"

export default function shop() {
  const [cartProducts, setCartProducts] = useState([])
  const store = useStore(ShoppingCartStore, new Set());

  return (
    <>
      <div className="product-container">
        {Products.map((item) => <Product newItems={Products} key={item.itemId} data={item} 
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
 