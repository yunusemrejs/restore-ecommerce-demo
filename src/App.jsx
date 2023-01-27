import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom/dist'
import {useLocation} from 'react-router-dom'
import Navbar from './components/navbar'
import Cart from './pages/cart/cart'
import Shop from './pages/shop/shop'
import ShopContextProvider from './context/shopContext'

// const location = useLocation()

// console.log(location);
function App() {
  return (
    <div className="app">
      <ShopContextProvider>
        <Router>
          <Navbar></Navbar>
          <main>
            <Routes>
              <Route path={'/'} element={<Shop/>}></Route>
              <Route path={'/cart'} element={<Cart/>}></Route>
            </Routes>
          </main>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
