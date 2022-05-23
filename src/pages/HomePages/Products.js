import React, { useEffect, useState } from 'react';
import Product from './Product';
import ViewModal from './ViewModal';

const Products = () => {
    const [viewModal, setViewModal] = useState(null)
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div className='mx-5 md:mt-16 mt-12'>
            <h1 className='border py-2 w-full pl-2'><span className='font-bold'>All Products: </span><span className='text-xs font-medium text-gray-400'>Total {products?.length} Products</span></h1>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-6 mt-10'>
                {
                    products && products?.map(product => <Product
                        key={product._id}
                        product={product}
                        setViewModal={setViewModal}
                    ></Product>)
                }
            </div>
            {
                viewModal && <ViewModal viewModal={viewModal}></ViewModal>
            }
        </div>
    );
};

export default Products;