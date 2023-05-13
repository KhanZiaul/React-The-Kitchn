import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { AiOutlineLike } from "react-icons/ai";
import { FaArrowRight } from 'react-icons/fa';
const Chefs = ({ chef }) => {
    const { name, years_of_experience, number_of_recipes, likes, image_url, id } = chef
    return (
        <div className='border-2 rounded-md p-5 cursor-pointer'>
            <div >
                <LazyLoad height={550}>
                    <img src={image_url} />
                </LazyLoad>

            </div>
            <h2 className='text-3xl font-semibold text-center my-4'>{name}</h2>
            <div className='flex flex-col lg:flex-row justify-between items-center my-6 text-xl font-normal'>
                <p className='font-semibold'>Experience : {years_of_experience} Years</p>
                <p className='font-semibold'>Recipes : {number_of_recipes}</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-3 justify-between items-center my-4 text-xl font-normal'>
                <div className='inline-block'>
                    <div className='flex gap-2 items-center font-semibold text-justify mb-2 ursor-pointer bg-slate-500 text-white px-4 py-3 rounded-xl hover:bg-slate-700'>
                        <AiOutlineLike />
                        <p>Likes : {likes}</p>
                    </div>
                </div>
                <Link to={`chef/${id}`}> <button className='flex gap-2 items-center font-semibold text-justify mb-2 ursor-pointer bg-slate-500 text-white px-4 py-3 rounded-xl hover:bg-slate-700'> <span>View Recipes </span> <FaArrowRight /></button></Link>
            </div>
        </div>
    );
};

export default Chefs;