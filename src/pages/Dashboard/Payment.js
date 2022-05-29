import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L15KmL4xojPcI68LJH4KACGRkTHyD4owIBv5pMQJPwtVIImBmFiTGUUl8MbCZRECvug0g9mZfnvBAe7LeI99oON00dMzPikHV');


const Payment = () => {
    const { id } = useParams()
    const url = `https://hidden-brook-45557.herokuapp.com/booking/${id}`

    const { isLoading, error, data: product } = useQuery(['payment', id], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl py-5">
                <div class="card-body">
                    <h2 class="card-title">total Quentity {product?.quantity}</h2>
                    <p>pay for ${(product?.us) * (product?.quantity)}</p>

                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm product={product} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;