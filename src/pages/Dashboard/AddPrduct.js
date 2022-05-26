import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle';

const AddPrduct = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('https://hidden-brook-45557.herokuapp.com/addProduct', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                toast('Thanks for add product!')
            })
        reset()
    };

    return (
        <div className='mt-6'>
            <PageTitle title="Add Product"></PageTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className='font-medium'>Name<span className='text-red-600'>*</span></label>
                    <input type="text" className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' {...register("name", { required: true })} placeholder="Exam: Stainless Steel Hex Nut/Structural DIN6915" />
                </div>

                <div className='my-5'>
                    <label className='font-medium'>Price<span className='text-red-600'>*</span></label>
                    <input type="number" className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' {...register("price", { required: true })} placeholder="Exam: $35" />
                </div>

                <div>
                    <label className='font-medium'>Total Quentity<span className='text-red-600'>*</span></label>
                    <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' {...register("totalQuentity", { required: true })} placeholder="Total Quentity" />
                </div>

                <div className='mt-5'>
                    <label className='font-medium'>Photo URL<span className='text-red-600'>*</span></label>
                    <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' {...register("img", { required: true })} placeholder="photo url" autoComplete='off' />
                </div>

                <div className='my-5'>
                    <label className='font-medium'>Email</label>
                    <input type="email" className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' {...register("email", { required: true })} defaultValue={user?.email} readOnly />
                </div>

                <input className='bg-red-500 hover:bg-red-600 cursor-pointer py-2 px-5 rounded text-white text-xs' type="submit" value="Add and Continue" />
            </form>
        </div>
    );
};

export default AddPrduct;