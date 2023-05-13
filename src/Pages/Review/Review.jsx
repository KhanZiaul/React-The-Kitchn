import React from 'react';
import { Rating } from '@smastrom/react-rating'

const Review = ({ customer }) => {
    const { name, rating, review, image } = customer;
    return (
        <div>
            <div className='border-2 rounded-md p-5 cursor-pointer'>
                <div >
                    <img className='w-60 h-60 rounded-full mx-auto' src={image} alt="" />
                </div>
                <h2 className='text-3xl font-semibold text-center my-4'>{name}</h2>
                <p className='font-semibold'><span className='font-bold'>Review</span> : {review}</p>
                <div className='flex gap-4 my-4'>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;