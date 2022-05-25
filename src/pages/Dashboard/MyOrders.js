import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`https://hidden-brook-45557.herokuapp.com/booking?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyOrders(data))
        }
    }, [user])

    return (
        <div>
            <PageTitle title="My Orders"></PageTitle>
            <h1 className='text-sm my-2 font-medium'>My Orders: <span className='bg-red-600 text-white rounded-full px-2.5 py-1 text-xs'>{myOrders.length}</span></h1>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>name</th>
                            <th>email</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map(myOrder =>
                                <tr>
                                    <th>1</th>
                                    <td>{user.displayName}</td>
                                    <td>{myOrder.email}</td>
                                    <td>Blue</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;