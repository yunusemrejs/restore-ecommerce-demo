import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom/dist'
import Navbar from './components/navbar'
import Cart from './pages/cart/cart'
import Shop from './pages/shop/shop'

function App() {

  return (
    <div className="app">
        <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path={'/'} element={<Shop/>}></Route>
          <Route path={'/cart'} element={<Cart/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
