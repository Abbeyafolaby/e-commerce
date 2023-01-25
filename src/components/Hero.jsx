import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import home1 from '../assets/home1.png'
import home2 from '../assets/home2.jpg'
import home3 from '../assets/home3.jpg'
import home4 from '../assets/home4.jpg'
import home5 from '../assets/home5.jpg'
import home6 from '../assets/home6.png'





const Hero = () => {

const slides = [ 
  {
  url: home1,
}, 
  {
  url: home2,
}, 
  {
  url: home3,
}, 
  {
  url: home4,
}, 
  {
  url: home5,
}
];

const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  setCurrentIndex(newIndex);
};

const nextSlide = () => {
  const isLastSlide = currentIndex === slides.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
};


  return (
    <div className='max-w-[1400px] h-[450px] w-full m-auto pt-[3rem] container relative group md:mb-[7rem]'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-xl bg-center bg-cover duration-500 md:hidden mt-4'
      >
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] left-9 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer md:hidden md:group-hover:hidden'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] right-9 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer md:hidden md:group-hover:hidden'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* <div className='md:hidden'>
        <h1 className='text-2xl font-Roboto mt-4'>SUMMER 2023</h1>
        <p className='font-Inter text-[#920701] text-md'>NEW COLLECTION</p>
        <p className='font-Inter text-sm'>Shop the hottest, newest sets of fits for your vacation and summer activities.</p>
      </div> */}
      <div className='md:flex md:justify-center lg:justify-around md:items-center lg:gap-12 hidden md:gap-x-8'>
        <img src={home6} alt='' width={400}/>
        <div className=''>
          <h1 className='text-7xl mb-10 font-Roboto text-[#920701]'>SUMMER <br/> SALE</h1>
          <p className='text-xl font-Inter mb-12'>DON'T COMPROMISE ON STYLE! GET FLAT 30% <br/>OFF FOR NEW ARRIVALS.</p>
          <Link to='/'>
          <button className='p-3 bg-[#920701] text-[#f5f5f5] font-Inter rounded-md hover:bg-transparent hover:border-2 hover:border-[#920701] hover:duration-700 hover:ease-in hover:text-[#920701]'>SHOP NOW</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero