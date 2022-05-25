import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';

const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || guser)
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";



    if (token) {
        navigate(from, { replace: true });
    }


    let signinError;
    if (loading || gloading) {
        return <Loading></Loading>
    }

    if (error || gerror) {
        signinError = <p>{error?.message || gerror?.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className=' h-screen flex justify-center items-center'>
            <PageTitle title="Signin"></PageTitle>
            <div className='shadow-xl p-6'>
                <h1 className='mb-2 font-medium'>Please Signin</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className=''>
                        <label className='text-sm' htmlFor="">Email<span className='text-red-500'>*</span></label>
                        <input className='placeholder-style block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-blue-600 focus:outline-none' {...register("email", {
                            required: {
                                value: true,
                                message: "Email is Require"
                            },
                            pattern: {
                                value: /[A-Za-z]{3}/,
                                message: 'Provider a valid Email'
                            }
                        })} />
                        {errors.email?.type === 'required' && <span className='label-text-alt text-red-500 inline-block'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500 inline-block'>{errors.email.message}</span>}
                    </div>

                    <div className='my-3'>
                        <label className='text-sm' htmlFor="">Password<span className='text-red-500'>*</span></label>
                        <input className='placeholder-style block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-blue-600 focus:outline-none' type="password" {...register("password", {
                            required: {
                                value: true,
                                message: "password is Require"
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })} />
                        {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                    </div>

                    <p className='text-red-500'><small>{signinError}</small></p>

                    <input className='bg-red-500 hover:bg-red-600 cursor-pointer py-2 px-5 rounded text-white text-xs mx-auto block w-full' type="submit" value="Signin" />
                </form>
                <p className='text-xs mt-3'>New User? <Link className=' text-red-500 hover:text-green-800' to="/signup">Signup</Link></p>

                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-sm btn-outline duration-700">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signin;