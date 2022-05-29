import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
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
                            <th>Email</th>
                            <th>Quentity</th>
                            <th>Price</th>
                            <th>total price</th>
                            <th>payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((myOrder, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{myOrder.quantity} Pieces</td>
                                    <td>${myOrder.us}</td>
                                    <td>${(myOrder.us) * (myOrder.quantity)}</td>
                                    <td>
                                        {(myOrder.us && !myOrder.paid) && <Link to={`/dashboard/payment/${myOrder._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}

                                        {(myOrder.us && myOrder.paid) && <span className='text-success'>paid</span>}
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;