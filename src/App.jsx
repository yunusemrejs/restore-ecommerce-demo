import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom/dist'
import Navbar from './components/navbar'
import Cart from './pages/cart/cart'
import Shop from './pages/shop/shop'
import { useLocation } from 'react-router-dom/dist'

function App() {
  const width = window.innerWidth

  function getLocation(location) {
    console.log('location: ', location)
    return location
  }
  
  return (
    <div className="app">
        <Router basename='/restore-ecommerce-demo'>
          <Navbar location={getLocation}></Navbar>
          <main style={{fontSize: `${getLocation() === '/cart' && width <= 500 ? '0.7em !important' : ''}`}}>
            <Routes>
              <Route path={'/'} element={<Shop/>}></Route>
              <Route path={'/cart'} element={<Cart/>}></Route>
            </Routes>
          </main>
        </Router>
    </div>
  )
}

export default App
