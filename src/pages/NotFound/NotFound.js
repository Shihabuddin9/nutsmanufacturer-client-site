import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/not-found-img/404.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './NotFound.css'
import PageTitle from '../Shared/PageTitle';

const NotFound = () => {
    return (
        <div className='pt-28 pb-14 flex justify-evenly items-center'>
            <PageTitle title="Not Found"></PageTitle>
            <div>
                <h1 className='not-found'>404</h1>
                <h2 className='text-gray-900 font-semibold text-4xl'>Oops! Page Not Found</h2>
                <p className='my-3'>We're sorry, but the page you were looking for doesn't exist.</p>
                <Link to="/"><button className='bg-orange-600 hover:bg-orange-700 duration-500 text-white px-3 py-2 text-sm'><FontAwesomeIcon icon={faHome} /> Go To Home</button></Link>
            </div>
            <div>
                <img src={notFound} style={{ width: '400px' }} alt="" />
            </div>
        </div>
    );
};

export default NotFound;