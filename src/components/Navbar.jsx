import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import { CartContext } from '../context/CartContext'
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import logo from '../assets/logo1.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
 const [nav, setNav] = useState(false);
 const [isActive, setIsActive] = useState(false) 
 const {isOpen, setIsOpen} = useContext(SidebarContext)
 const {itemAmount} = useContext(CartContext)

  const handleNav = () => {
    setNav(!nav);
  };

 useEffect (() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
  })
 })

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='px-4 mx-auto flex items-center justify-between h-full'>
        <Link to={'/'}>
          <div className="">
            <img src={logo} alt='' className=''/>
          </div>
        </Link>
        <div className='flex gap-x-3'>
        <div className='cursor-pointer flex relative ' onClick={() => setIsOpen(!isOpen)}>
          <BsBag className='text-2xl'/>
          <div className='bg-red-500 absolute -right-2 -top-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center '>{itemAmount}</div>  
        </div>
        <div className='flex items-center justify-evenly'>
                {/* Hamburger Icon */}
                <div
                    onClick={handleNav}
                    className='md:hidden z-9 mr-3'
                >
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            </div>
      </div>


    {/* Mobile Menu */}
    {/* Overlay */}
    <div className={
        nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-transparent' : '' }>
            <div className={
                nav
                ? ' fixed left-0 top-0 w-full sm:w-[60%] md:w-[45%] h-screen p-4 ease-in duration-300 bg-[#f5f5f5]'
                : 'fixed left-[-100%] top-0 p-4 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link className='cursor-pointer' to='/'>
                            <img src={logo} alt="/" onClick={() => setNav(false)}/>             
                        </Link>

                        <div
                            onClick={handleNav}
                            className='p-3 cursor-pointer'
                        >
                            <AiOutlineClose size={25}/>
                        </div>
                    </div>

                    <div className='border-b border-slate-300 my-3'>
                        <p className='w-[85%] md:w-[90%] py-3 uppercase font-Roboto text-sm'>
                            Look to the stars
                        </p>
                    </div>

                    <div className='py-8 flex flex-col justify-center items-center text-center'> 
                                <ul className='uppercase'>    
                                    <Link to='/'>
                                        <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                            Home
                                        </li>
                                    </Link>
                                    <Link to='/'>
                                        <li className='py-4 text-sm' onClick={() => setNav(false)}>
                                            Shop
                                        </li>
                                    </Link>
                                    <Link to='/account'>
                                        <li className='py-4 text-sm' onClick={() => setNav(false)}>
                                            Profile
                                        </li>
                                    </Link>
                                    <Link to='/signin'>
                                        <li className='py-4 text-sm' onClick={() => setNav(false)}>
                                            Login
                                        </li>
                                        {/* <GoSignIn className='inline mr-4'/>Login */}
                                    </Link>
                                    <Link to='/signup'>
                                        <li className='py-4 text-sm' onClick={() => setNav(false)}>
                                            Create Account
                                        </li>
                                        {/* <SiGnuprivacyguard className='inline mr-4'/> */}
                                    </Link>
                                </ul>   
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar