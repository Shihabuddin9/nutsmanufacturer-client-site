import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Reviews = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/reviews', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                toast('Thanks!! for Review...')
            })

        reset()
    };

    return (
        <div className='flex justify-center items-center py-24 bg-gray-200'>
            <div>
                <h1 className='text-center text-2xl text-purple-700 font-medium mb-16'>please write your experience with products!!</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='text-sm font-medium' htmlFor="">Review</label>
                        <textarea type="text" name="text" className='placeholder-style block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-blue-600 focus:outline-none' placeholder='Please Write Your text...' {...register("content", {
                            required: {
                                value: true,
                                message: "text is Require"
                            },
                            maxLength: {
                                value: 200,
                                message: 'Must be 200 characters or longer'
                            }
                        })}
                            rows="4" cols="50" />
                        {errors.content?.type === 'maxLength' && <span className='label-text-alt text-red-500'>{errors.content.message}</span>}
                    </div>

                    <div className='my-5'>
                        <label className='text-sm' htmlFor="">Email Address</label>
                        <input name="email" className='placeholder-style block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none' type="email" {...register("email", { required: true })} defaultValue={user.email} readOnly />
                    </div>

                    <div className='my-5'>
                        <label className='text-sm' htmlFor="">Name</label>
                        <input name="email" className='placeholder-style block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none' type="email" {...register("name", { required: true })} defaultValue={user.displayName} readOnly />
                    </div>

                    <input className='bg-red-500 hover:bg-red-600 cursor-pointer py-2 px-5 rounded text-white text-xs mt-2' type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default Reviews;