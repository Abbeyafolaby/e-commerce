import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductProvider from './context/ProductContext'
import SidebarProvider from './context/SidebarContext'
import CartProvider from './context/CartContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
  <CartProvider>
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>
  </CartProvider>  
  </SidebarProvider>
);
