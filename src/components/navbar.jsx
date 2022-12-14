import {AiOutlineShopping} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export default function navbar() {
  return (
    <nav>
      <ul className="links">
        <NavLink to="/">
          <li>Shop</li>
        </NavLink>
        <NavLink to="/cart">
          <li>
            <AiOutlineShopping size={18}/>
          </li>
        </NavLink>
      </ul>
    </nav>
  )
}
