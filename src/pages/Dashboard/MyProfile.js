import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <PageTitle title="My Profile"></PageTitle>
            <h1>My Profile</h1>
            <div className='flex justify-center items-center pt-32'>
                <div>
                    <h3 className='text-center text-2xl'>Name: {user.displayName}</h3>
                    <p className='text-xl'>Email: {user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;