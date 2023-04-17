import { useState } from 'react'
import {AiOutlineShopping} from 'react-icons/ai'
import { NavLink, useLocation } from 'react-router-dom'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import ShoppingCartStore from '../store/ShoppingCartStore';
import useStore from '../hooks/useStore';
import './navbar.css'

export default function navbar({location}) {
  const loc = useLocation()
  const store = useStore(ShoppingCartStore, new Set());

  function toggleSidebar() {
		ShoppingCartStore.dispatch('toggleSidebarState');
	}

  location(loc.pathname) 
  return (
    <nav style={{justifyContent: `${loc.pathname === '/cart' ? '' : 'end'}`}}>
      { loc.pathname === '/cart' &&
        <button className='sidebar-btn' onClick={() => toggleSidebar()}>
          <HiOutlineShoppingCart size={20}/>          
          {!!store.cartCounter && <span className="notification"></span>}
        </button>
      }

      <ul className="links">
        <NavLink to="/">
          <li>Shop</li>
        </NavLink>
        <NavLink to="/cart">
          <li>
            <AiOutlineShopping size={20}/>
            <span className="counter">{!!store.cartCounter && store.cartCounter}</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  )
}
