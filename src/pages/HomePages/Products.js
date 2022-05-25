import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import ViewModal from './ViewModal';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Products = () => {
    const [viewModal, setViewModal] = useState(null)
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://hidden-brook-45557.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='px-5 py-9 bg-gray-100'>
            <h1 className='border py-2 w-full pl-2'>
                <span>
                    <span className='font-bold'>All Products: </span><span className='text-xs font-medium text-gray-400'>Total {products?.length} Products</span>
                </span>

                <Link to='/reviews'>
                    <span className='md:ml-10 md:inline block'><FontAwesomeIcon icon={faSquarePlus} /> <span className='text-sm font-medium cursor-pointer hover:text-gray-400 duration-500'>Add New Review</span></span>
                </Link>

            </h1>
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