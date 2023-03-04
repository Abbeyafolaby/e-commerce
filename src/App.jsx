import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Account from './pages/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Cart from './pages/Cart';




function App() {

  return (
    <div className="">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={<ProtectedRoute><Account /></ProtectedRoute>}
          />
          <Route
            path='/product/:id'
            element={<ProtectedRoute><ProductDetails /></ProtectedRoute>}
          />
          <Route
            path='/cart'
            element={<Cart />}
          />
        </Routes>
        <Sidebar />
        <Footer />
      </AuthContextProvider>
        
    </div>
  )
}

export default App
