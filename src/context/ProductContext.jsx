import React, {createContext, useState, useEffect} from 'react'


export const ProductContext = createContext ()

const ProductProvider = ( {children} ) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchproducts = async ()=> {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            // console.log(data)
            setProducts(data)
        }
        fetchproducts();
    }, [])

  return <ProductContext.Provider value={{products}}> {children} </ProductContext.Provider>;
}

export default ProductProvider