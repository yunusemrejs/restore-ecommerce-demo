import { useContext, useState } from 'react'
import {AiOutlineShopping} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import './navbar.css'


export default function navbar() {

  const {sumtTotal, cartCounter} = useContext(ShopContext)

  console.log('counter:', cartCounter);

  return (
    <nav>
      <ul className="links">
        <NavLink to="/">
          <li>Shop</li>
        </NavLink>
        <NavLink to="/cart">
          <li>
            <AiOutlineShopping size={18}/>
            <span className="counter">{sumtTotal}{cartCounter}</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  )
}
