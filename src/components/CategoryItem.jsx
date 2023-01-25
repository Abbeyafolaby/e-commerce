import React from 'react'
import { Link } from 'react-router-dom'



const CategoryItem = ( {item} ) => {
  return (
    <div>
        <div className='relative'>
            <img src={item.img} alt=''/>
            <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full'>
                <h1 className='text-[#f5f5f5] text-xl font-Roboto mb-4'>{item.title}</h1>
                {/* <Link to={item.link}>
                <button className='p-2 bg-[#920701] text-[#f5f5f5] font-Inter rounded-md text-sm cursor-pointer hover:bg-transparent hover:border-2 hover:border-[#920701] hover:duration-700 hover:ease-in'>SHOP NOW</button>
                </Link> */}
            </div>
        </div>    
    </div>
  )
}

export default CategoryItem