import {AiOutlineShopping} from 'react-icons/ai'
import './navbar.css'

export default function navbar() {
  return (
    <nav>
      <ul className="links">
        <li><a href="/">Shop</a></li>
        <li><a href="/cart">
          <AiOutlineShopping size={18}/>
        </a></li>
      </ul>
    </nav>
  )
}
