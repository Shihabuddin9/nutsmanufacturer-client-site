import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState('')
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div className='mx-5 md:mt-16 mt-12'>
            <h1 className='border py-2 w-full pl-2'><span className='font-bold'>All Products: </span><span className='text-xs font-medium text-gray-400'>Total {products.length} Products</span></h1>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-6 mt-10'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;