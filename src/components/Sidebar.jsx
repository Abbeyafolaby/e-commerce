import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import CartItem from './CartItem'
import { SidebarContext } from '../context/SidebarContext'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Sidebar = () => {

 const {isOpen, handleClose} = useContext(SidebarContext) 
 const {cart, clearCart, total} = useContext(CartContext)

  return (
    <div className={`${
      isOpen ? 'right-0' : '-right-full'
  }   
    w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl-max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Your Bag(0)</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex jusyify-center items-center'>
            <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[19rem] lg:h-[20rem] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />
        })}
        </div>
        <div className='flex flex-col gap-y-3 py-4 mt-4'>
          <div className='flex w-full justify-between items-center'>
            <div className='uppercase font-semibold'>
              <span className='mr-2'>Total:</span>$ {total}
            </div>
            <div onClick={() => clearCart()} className='cursor-pointer py-4  w-10 h-10 flex justify-center items-center text-xl'> 
            <FiTrash2  className='text-[#920701]'/>
          </div>
          </div>
          <Link to='/cart' onClick={handleClose} className='bg-[#A93030] p-4 flex justify-center items-center text-[#f5f5f5] w-full font-Inter'>
            View cart
          </Link>
        </div>
    </div>
  )
}

export default Sidebar