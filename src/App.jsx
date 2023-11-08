import React from 'react'
import './App.css'
import {NavBar} from './components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartProvider';
function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        {/* <Route path='/*' element={<h1>404 NOT FOUND</h1>} /> */}
      </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
