import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyReview = () => {
    const [user] = useAuthState(auth)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/reviews?email=${user.email}`)
                .then(res => res.json())
                .then(data => setReviews(data))
        }
    }, [user])
    return (
        <div>
            <h1 className='text-sm mt-2 font-medium'>My Review: <span className='bg-red-600 text-white rounded-full px-2.5 text-xs py-1'>{reviews.length}</span></h1>

            <div className='grid grid-cols-3 gap-5 my-10'>
                {
                    reviews.map(review =>
                        <div key={review._id} className="shadow p-3">
                            <div class="avatar placeholder flex justify-center items-center mb-2">
                                <div class="bg-neutral-focus text-neutral-content rounded-full w-10">
                                    <span class="text-xs">{user.displayName.slice(0, 2)}</span>
                                </div>
                            </div>

                            <p className='text-xs text-purple-500 text-center'>{review.content}</p>
                        </div>
                    )
                }
            </div>

            <div className='flex justify-center items-center'>
                <div class="stats stats-vertical lg:stats-horizontal shadow">

                    <div class="stat">
                        <div class="stat-title">Reviews</div>
                        <div class="stat-value">31K</div>
                        <div class="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">New Users</div>
                        <div class="stat-value">4,200</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">New Registers</div>
                        <div class="stat-value">1,200</div>
                        <div class="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyReview;