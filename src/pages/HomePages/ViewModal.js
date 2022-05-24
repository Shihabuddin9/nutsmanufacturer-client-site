import React from 'react';
import map from '../images/map/images (26).jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ViewModal = ({ viewModal }) => {
    const { img, name, price, us, payment, productionCapacity, port, material, type, connection, headStyle, standard, grade, _id, totalQuentity } = viewModal
    return (
        <div>
            <input type="checkbox" id="view-Modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="view-Modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='md:flex justify-between items-center mt-4'>
                        <div className='mr-5'>
                            <img className='h-64 w-64' src={img} alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold '>{name}</h1>
                            <div className='bg-gray-100 p-1.5 my-3'>
                                <p className='text-xs'>Min. Order / Reference FOB Price</p>
                                <div className='mt-1'>
                                    <small className='mr-12 text-xs'>{price} Pieces</small>
                                    <small className='text-red-500 font-medium'>US ${us} / piece</small>
                                </div>
                            </div>
                            <div>
                                <div className='flex'>
                                    <p className='text-xs mr-16'>Payment Terms</p>
                                    <p className='text-xs'>{payment}</p>
                                </div>

                            </div>
                            <div className='my-4'>
                                <div className='flex'>
                                    <p className='text-xs mr-2'>Production Capacity</p>
                                    <p className='text-xs'>{productionCapacity}ton/Month</p>
                                </div>

                            </div>
                            <div>
                                <div className='flex'>
                                    <p className='text-xs mr-24'>Port</p>
                                    <p className={`text-xs cursor-pointer hover:${map}`}>{port} <FontAwesomeIcon icon={faLocationDot} /></p>
                                </div>

                            </div>
                            <div className='my-4'>
                                <div className='flex'>
                                    <p className='text-xs mr-16'>Material</p>
                                    <p className='text-xs ml-3'>{material}</p>
                                </div>

                            </div>
                            <div>
                                <div className='flex'>
                                    <p className='text-xs mr-24'>Type</p>
                                    <p className='text-xs'>{type}</p>
                                </div>

                            </div>
                            <div className='my-4'>
                                <div className='flex'>
                                    <p className='text-xs mr-14'>Connection</p>
                                    <p className='text-xs ml-1'>{connection}</p>
                                </div>

                            </div>
                            <div>
                                <div className='flex'>
                                    <p className='text-xs mr-16'>Head Style</p>
                                    <p className='text-xs'>{headStyle}</p>
                                </div>

                            </div>
                            <div className='my-4'>
                                <div className='flex'>
                                    <p className='text-xs mr-16'>Standard</p>
                                    <p className='text-xs ml-2'>{standard}</p>
                                </div>

                            </div>
                            <div>
                                <div className='flex'>
                                    <p className='text-xs mr-20'>Grade</p>
                                    <p className='text-xs ml-2'>{grade}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="modal-action">
                        <Link to={totalQuentity > 1 ? `/contactNow/${_id}` : ""}><label
                            disabled={totalQuentity < 1}
                            for="view-Modal" class="btn btn-sm bg-red-500 hover:bg-red-600 py-2 px-3 text-white rounded border-0 text-xs">purchase Now</label></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewModal;