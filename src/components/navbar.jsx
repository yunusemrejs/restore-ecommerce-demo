import { useContext, useState } from 'react'
import {AiOutlineShopping} from 'react-icons/ai'
import { NavLink, useLocation } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import {HiOutlineShoppingCart} from 'react-icons/hi'

import './navbar.css'

export default function navbar({location}) {

  const {sumtTotal, cartCounter, sidebarState, setSidebarState} = useContext(ShopContext)
  const loc = useLocation()

  location(loc.pathname) 
  return (
    <nav style={{justifyContent: `${loc.pathname === '/cart' ? '' : 'end'}`}}>
      { loc.pathname === '/cart' &&
        <button className='sidebar-btn' onClick={() => setSidebarState(!sidebarState)}>
          <HiOutlineShoppingCart size={20}/>          
          {!!cartCounter && <span className="notification"></span>}
        </button>
      }

      <ul className="links">
        <NavLink to="/">
          <li>Shop</li>
        </NavLink>
        <NavLink to="/cart">
          <li>
            <AiOutlineShopping size={20}/>
            <span className="counter">{!!cartCounter && cartCounter}</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  )
}
