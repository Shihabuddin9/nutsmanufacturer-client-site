import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import auth from '../../firebase.init';

const HomeReview = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const [user] = useAuthState(auth)
    const [allReviews, setAllReviews] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`https://hidden-brook-45557.herokuapp.com/allReviews`)
                .then(res => res.json())
                .then(data => setAllReviews(data))
        }
    }, [user])
    return (
        <div className='pt-5 bg-gray-100'>
            <h1 className='md:text-2xl mt-2 font-medium text-center mb-8'>Our Costomer Reviews: <span className='bg-red-600 text-white rounded-full px-2.5 text-sm py-1'>{allReviews.length}</span></h1>
            <Carousel responsive={responsive} className="">
                {
                    allReviews.map(review =>
                        <div key={review._id} className="shadow p-3">
                            <h4 class="text-lg text-center font-medium text-cyan-700 pb-2">{review.name}</h4>

                            <p className='text-xs text-center text-gray-500'>{review.content}</p>
                        </div>
                    )
                }
            </Carousel>
        </div>
    )
}

export default HomeReview;