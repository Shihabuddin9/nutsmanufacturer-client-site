import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, setViewModal }) => {
    const { name, img, us, piece, _id, totalQuentity } = product

    return (

        <div class="card card-compact bg-base-100 shadow-xl border relative">
            <figure>
                <img className='w-36 h-36 transform transition duration-700 hover:scale-125' src={img} alt="Shoes" />
            </figure>
            <div class="card-body">
                <div class="card-actions justify-center">
                    <label
                        className='cursor-pointer py-1.5 bg-gray-100 w-full hover:bg-gray-200 rounded text-xs text-gray-500 hover:text-gray-700 hover:font-medium text-center'
                        onClick={() => setViewModal(product)}
                        for="view-Modal" >Quick View</label>
                </div>
                <h2 class="text-sm">{name.slice(0, 50)}</h2>
                <p><span className='text-xs text-gray-500'>FOB Price:</span> <span className='text-red-500 font-medium'>US ${us}</span> <span className='text-xs text-gray-500'>/ price</span></p>
                <p className='text-xs text-gray-500'>Min. Order: {piece} Pieces</p>
                <div class="card-actions justify-center">
                    <Link className='w-full' to={`/contactNow/${_id}`}>
                        <button
                            disabled={totalQuentity < 1}
                            class={`border border-gray-300 py-1.5 bg-gray-100 w-full 
                        ${(totalQuentity > 0 && "hover:text-red-500") || (totalQuentity < 1 && "text-red-500 font-medium cursor-not-allowed")} 
                        rounded text-xs`}>
                            {totalQuentity < 1 ? "Not Available" : "purchase Now"}
                        </button>
                    </Link>
                </div>
            </div>
            <Link to='/reviews'><span className='border cursor-pointer hover:text-gray-400 duration-500 p-0.5 text-xs absolute top-0'>Review</span></Link>
        </div>

    );
};

export default Product;