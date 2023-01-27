import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom/dist'
import Navbar from './components/navbar'
import Cart from './pages/cart/cart'
import Shop from './pages/shop/shop'
import ShopContextProvider from './context/shopContext'
import { ShopContext } from './context/shopContext'
import { useContext } from 'react'
  
function App() {
  
  return (
    <div className="app">
      {/* <ShopContextProvider> */}
        <Router>
          <Navbar></Navbar>
          <main>
            <Routes>
              <Route path={'/'} element={<Shop/>}></Route>
              <Route path={'/cart'} element={<Cart/>}></Route>
            </Routes>
          </main>
        </Router>
      {/* </ShopContextProvider> */}
    </div>
  )
}

export default App
