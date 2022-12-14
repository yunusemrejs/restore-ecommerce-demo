import { Products } from "../../products"
import Product from "../../components/product"

export default function shop() {
  return (
    <div className="products-wrapper" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', paddingInline: '6rem', gap: '1.5rem 3rem'}}>
      {Products.map((item) => <Product key={item.id} data={item}/>)}
    </div>
  )
}
