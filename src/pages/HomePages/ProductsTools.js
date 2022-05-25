import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './ProductsTools.css'


const ProductsTools = () => {
    return (
        <div className='productTools md:py-14 py-8'>
            <div className='flex justify-center items-center'>
                <h1 className='text-2xl font-bold text-white'>FASTENER</h1>
                <div className='bg-red-800 rounded-full px-4 ml-7'>
                    <p className='text-white text-xs'>Indudtry leading</p>
                    <p className='text-white text-xs'>enterprises <FontAwesomeIcon className='text-orange-600' icon={faStar} />
                        <FontAwesomeIcon className='text-orange-600' icon={faStar} />
                        <FontAwesomeIcon className='text-orange-600' icon={faStarHalf} />
                    </p>
                </div>
            </div>
            <div className=' md:mt-10 mt-3 text-white md:px-24 px-3'>
                <div>
                    <h2 className='md:text-2xl text-xl text-center font-bold '>POWERFUL MANUFACTURER</h2>
                </div>
                <div className=' mt-4 grid md:grid-cols-4 grid-cols-2 gap-4 font-bold'>
                    <p className=''><FontAwesomeIcon className=' ' icon={faCheckCircle} /> Fastener</p>
                    <p><FontAwesomeIcon className='' icon={faCheckCircle} /> Bolt</p>
                    <p><FontAwesomeIcon className='' icon={faCheckCircle} /> Thread</p>
                    <p><FontAwesomeIcon className='' icon={faCheckCircle} /> Carbon Steel</p>
                    <p><FontAwesomeIcon className='' icon={faCheckCircle} /> Nut</p>
                    <p><FontAwesomeIcon className='' icon={faCheckCircle} /> Special Bolt</p>
                    <p><FontAwesomeIcon className='' icon={faCheckCircle} /> Washer</p>
                    <p><FontAwesomeIcon className='' icon={faCheckCircle} /> Stainless Steel</p>
                </div>
            </div>
        </div>
    );
};

export default ProductsTools;