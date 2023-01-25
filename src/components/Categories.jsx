import React from 'react'
import { categories } from '../../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className='pt-[3rem] m-auto container'>
        <h1 className='font-Roboto font-bold text-lg md:text-center'>TRENDING</h1>
        <p className='text-[#A93030] font-Inter text-sm md:text-center'>Top of the Charts</p>
        <div className='pt-2 grid gap-y-4 items-center justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-4 md:space-around'>
        {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
        </div>
    </div>
  )
}

export default Categories