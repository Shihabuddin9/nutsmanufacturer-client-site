import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loading from '../Shared/Loading';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import useToken from '../../hooks/useToken';
import PageTitle from '../Shared/PageTitle';

const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
    const [token] = useToken(user || guser)
    const navigate = useNavigate()

    if (token) {
        navigate('/')
    }

    let signinError;
    if (loading || gloading || updating) {
        return <Loading></Loading>
    }

    if (error || gerror || updateerror) {
        signinError = <p>{error?.message || gerror?.message || updateerror?.message}</p>
    }

    const onSubmit = async (data) => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        reset()
    };
    return (
        <div className=' h-screen flex justify-center items-center bg-slate-300'>
            <PageTitle title="Signup"></PageTitle>
            <div className='shadow-xl p-6 border border-slate-200'>
                <h1 className='mb-2 font-medium'>Create Account</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className=''>
                        <label className='text-sm' htmlFor="">Name<span className='text-red-500'>*</span></label>
                        <input className='placeholder-style block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-blue-600 focus:outline-none' {...register("name", {
                            required: {
                                value: true,
                                message: "name is Require"
                            }

                        })} />
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500 inline-block'>{errors.name.message}</span>}
                    </div>

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

                    <input className='bg-red-500 hover:bg-red-600 cursor-pointer py-2 px-5 rounded text-white text-xs mx-auto block w-full' type="submit" />
                </form>
                <p className='text-xs mt-3'>Have an account? <Link className=' text-red-500 hover:text-green-800' to="/signin">Sign in now!</Link></p>

                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-sm btn-outline duration-700">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;