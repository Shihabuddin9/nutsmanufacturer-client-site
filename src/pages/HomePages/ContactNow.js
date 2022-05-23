import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import './ContactNow.css'

const ContactNow = () => {
    const { contactId } = useParams()
    const [product, setProduct] = useState('')
    useEffect(() => {
        const url = `http://localhost:5000/products/${contactId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
    };
    return (
        <div className='my-10 md:mx-32 mx-3'>
            <div>
                <h1 className='inline-block mb-6 mr-5'><Link to='/'><span className='text-red-500 text-5xl font-bold font-serif'>N</span><span className='text-red-500 md:text-3xl'>utsManufacture</span></Link></h1>
                <small>Send Inquiry</small>
            </div>
            <div className='mb-8'>
                <p className='border py-3 pl-3 w-full bg-gray-100 text-sm'>NINGBO YI PIAN HONG FASTENER CO., LTD.</p>
                <div className='border py-5 pl-3 bg-gray-100 text-sm md:grid grid-cols-4'>
                    <img className='w-12 mx-auto' src={product.img} alt="" />
                    <p className='col-span-2 my-3 md:my-0'>{product.name}</p>
                    <input className='placeholder-style block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-blue-600 focus:outline-none' type="number" placeholder='Quantity' required />
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className='text-sm' htmlFor="">Content<span className='text-red-500'>*</span></label>
                    <textarea type="text" name="text" className='placeholder-style block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-blue-600 focus:outline-none' placeholder='Please enter details such as material,size, application, specifications and other requirements to receive an accurate quote' {...register("contactNow", { required: true })} rows="4" cols="50" />
                </div>

                <div className='my-5'>
                    <label className='text-sm' htmlFor="">Email Address<span className='text-red-500'>*</span></label>
                    <input name="email" className='placeholder-style block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-blue-600 focus:outline-none' type="email" {...register("email", { required: true })} placeholder="enter your email address" />
                </div>

                <input className='bg-red-500 hover:bg-red-600 cursor-pointer py-2 px-5 rounded text-white text-xs' type="submit" value="Send Inquiry Now" />
            </form>
        </div>
    );
};

export default ContactNow;