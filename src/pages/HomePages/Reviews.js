import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        toast('Thanks!! for Review...')
        reset()
    };

    return (
        <div className='flex justify-center items-center py-24 bg-gray-200'>
            <div>
                <h1 className='text-center text-2xl text-purple-700 font-medium mb-16'>please write your experience with products!!</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='text-sm font-medium' htmlFor="">Review</label>
                        <textarea type="text" name="text" className='placeholder-style block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-blue-600 focus:outline-none' placeholder='Please Write Your text...' {...register("content", { required: true })} rows="4" cols="50" />
                    </div>
                    <input className='bg-red-500 hover:bg-red-600 cursor-pointer py-2 px-5 rounded text-white text-xs mt-2' type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default Reviews;