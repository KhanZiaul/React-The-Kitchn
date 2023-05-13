import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch('https://chef-datas-khanziaul.vercel.app/reviews')
            .then(res => res.json())
            .then(datas => setReview(datas))
    }, [])
    return (
        <div>
            <h2 className='text-center text-4xl font-bold my-16'>Customers Review</h2>
            <p className='border-b-2 border-slate-300 mb-8'></p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews?.map(customer => <Review customer={customer} key={customer.id}></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;