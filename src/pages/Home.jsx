import React, {useContext} from 'react'
import Navbar from '../components/Navbar'
import { ProductContext } from '../context/ProductContext'
import Product from '../components/Product'
import Hero from '../components/Hero'
import Categories from '../components/Categories'

const Home = () => {

    const {products} = useContext(ProductContext)
    // console.log(products)

    const filteredProducts = products.filter(item => {
        return (
            item.category === "men's clothing" || item.category === "women's clothing"
        );
    });
    // console.log(filteredProducts);

  return (
    <div> 
        <Hero />
        <Categories />
        <section className='py-16'>
            <div className="container mx-auto">
            <h1 className='font-Roboto font-bold text-lg md:text-center'>PRODUCTS</h1>
            <p className='text-[#A93030] font-Inter text-sm md:text-center mb-2'>Men & Women</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                    {filteredProducts.map(product => {
                        return (
                            <Product product={product} key={product.id}/>
                        )
                    })}
                </div>
            </div>
        </section>
    </div>
    )

}

export default Home