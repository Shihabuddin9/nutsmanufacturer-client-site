import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './ContactNow.css'

const ContactNow = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='my-10 mx-32'>
            <div>
                <h1 className='inline-block mb-6 mr-5'><Link to='/'><span className='text-red-500 text-5xl font-bold font-serif'>N</span><span className='text-red-500 text-3xl'>utsManufacture</span></Link></h1>
                <small>Send Inquiry</small>
            </div>
            <div className='mb-8'>
                <p className='border py-3 pl-3 w-full bg-gray-100 text-sm'>NINGBO YI PIAN HONG FASTENER CO., LTD.</p>
                <div className='border py-5 pl-3 bg-gray-100 text-sm grid grid-cols-3'>
                    <p>Hex Nylon Lock Nuts with DIN985 Zinc Plated Stainless Steel</p>
                    <input className='placeholder-style block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-blue-600 focus:outline-none' type="number" placeholder='Quantity' required />
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className='text-sm' htmlFor="">Content<span className='text-red-500'>*</span></label>
                    <textarea className='placeholder-style block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-blue-600 focus:outline-none' placeholder='Please enter details such as material,size, application, specifications and other requirements to receive an accurate quote' {...register("contactNow", { required: true })} rows="4" cols="50" />
                </div>

                <div className='my-5'>
                    <label className='text-sm' htmlFor="">Email Address<span className='text-red-500'>*</span></label>
                    <input className='placeholder-style block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-blue-600 focus:outline-none' type="email" {...register("email", { required: true })} placeholder="enter your email address" />
                </div>

                <input className='bg-red-500 hover:bg-red-600 cursor-pointer py-2 px-3 rounded text-white text-sm' type="submit" value="Send Inquiry Now" />
            </form>
        </div>
    );
};

export default ContactNow;