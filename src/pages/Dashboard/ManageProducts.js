import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import ViewModal from '../HomePages/ViewModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const ManageProducts = () => {
    const [products, setProducts] = useState([])
    // const [viewModal, setViewModal] = useState(null)

    useEffect(() => {
        fetch('https://hidden-brook-45557.herokuapp.com/addProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleDelete = id => {
        const confirm = window.confirm('Are you sure, you want to delete?')
        if (confirm) {
            const url = `https://hidden-brook-45557.herokuapp.com/delete/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining)
                    }
                })
        }

    }

    return (
        <div>
            <h1 className='text-sm my-2 font-medium'>Manage Products: <span className='bg-red-600 text-white rounded-full px-2.5 text-xs py-1'>{products.length}</span></h1>


            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mx-2 my-5'>
                {
                    products?.map(product => <div key={product._id} class="card card-compact bg-base-100 shadow-xl border relative">
                        <figure>
                            <img className='w-36 h-36 transform transition duration-700 hover:scale-125' src={product.img} alt="Shoes" />
                        </figure>
                        <div class="card-body mb-5">
                            {/* <div class="card-actions justify-center">
                            <label
                                className='cursor-pointer py-1.5 bg-gray-100 w-full hover:bg-gray-200 rounded text-xs text-gray-500 hover:text-gray-700 hover:font-medium text-center'
                                onClick={() => setViewModal(product)}
                                for="view-Modal" >Quick View</label>
                        </div> */}
                            <h2 class="text-sm">{product.name.slice(0, 50)}</h2>
                            <p><span className='text-xs text-gray-500'>FOB Price:</span> <span className='text-red-500 font-medium'>US ${product.price}</span> <span className='text-xs text-gray-500'>/ price</span></p>
                            <p className='text-xs text-gray-500'>Min. Order: {product.totalQuentity} Pieces</p>
                            <div class="card-actions justify-center">
                                <Link className='w-full' to={`/contactNow/${product._id}`}>
                                    <button
                                        disabled={product.totalQuentity < 1}
                                        class={`border border-gray-300 py-1.5 bg-gray-100 w-full 
                                ${(product.totalQuentity > 0 && "hover:text-red-500") || (product.totalQuentity < 1 && "text-red-500 font-medium cursor-not-allowed")} 
                                rounded text-xs`}>
                                        {product.totalQuentity < 1 ? "Not Available" : "purchase Now"}
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <Link to='/reviews'><span className='border cursor-pointer hover:text-gray-400 duration-500 p-0.5 text-xs absolute top-0'>Review</span></Link>
                        <div>
                            <button className='text-red-500 absolute bottom-2 right-2' onClick={() => handleDelete(product._id)}><FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </div>)
                }
            </div>
            {/* {
                viewModal && <ViewModal viewModal={viewModal}></ViewModal>
            } */}
        </div>
    );
};

export default ManageProducts;