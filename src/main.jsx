import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter } from 'react-router-dom'
import ProductProvider from './context/ProductContext'
import SidebarProvider from './context/SidebarContext'
import CartProvider from './context/CartContext'
import ScrollToTop from './components/ScrollToTop'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <HashRouter>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </HashRouter>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
