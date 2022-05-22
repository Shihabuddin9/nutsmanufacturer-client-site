import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, us, price } = props.product
    return (

        <div class="card card-compact bg-base-100 shadow-xl border">
            <figure>
                <img className='w-36 h-36 transform transition duration-700 hover:scale-125' src={img} alt="Shoes" />
            </figure>
            <div class="card-body">
                <div class="card-actions justify-center">
                    <button class=" py-1.5 bg-gray-100 w-full hover:bg-gray-200 rounded text-xs text-gray-500 hover:text-gray-700 hover:font-medium">Quick View</button>
                </div>
                <h2 class="text-sm">{name.slice(0, 50)}</h2>
                <p><span className='text-xs text-gray-500'>FOB Price:</span> <span className='text-red-500 font-medium'>US ${us}</span> <span className='text-xs text-gray-500'>/ price</span></p>
                <p className='text-xs text-gray-500'>Min. Order: {price} Pieces</p>
                <div class="card-actions justify-center">
                    <Link className='w-full' to="/contactNow"><button class="border border-gray-300 py-1.5 bg-gray-100 w-full hover:text-red-500 rounded text-xs">Contact Now</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Product;