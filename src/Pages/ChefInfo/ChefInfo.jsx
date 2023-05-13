import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import { AiOutlineLike } from "react-icons/ai";

const ChefInfo = () => {
    const chefInfo = useLoaderData()
    const { name, years_of_experience, number_of_recipes, likes, image_url, description, recipes } = chefInfo
    return (
        <div className='my-8'>
            <div className='flex flex-col lg:flex-row p-10 rounded-lg gap-20  border-2'>
                <div className=''>
                    <h2 className='text-3xl lg:text-4xl font-semibold mb-5'>{name}</h2>
                    <p className='text-xl text-justify font-semibold mb-5'>{description}</p>
                    <div >
                        <p className='text-xl text-justify mb-4 font-semibold'>Experience : {years_of_experience} Years</p>
                        <p className='text-xl text-justify mb-5 font-semibold'>Recipes : {number_of_recipes}</p>
                        <div className='inline-block'>
                            <div className='flex gap-2 items-center text-xl font-semibold text-justify mb-2 cursor-pointer bg-slate-600 text-white px-4 py-3 rounded-xl hover:bg-slate-800'>
                                <AiOutlineLike />
                                <p>Likes : {likes}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <img className='rounded-md' src={image_url} alt="" />
                </div>
            </div>
            <h2 className='text-center text-4xl font-bold my-8'>Recipes</h2>
            <p className='border-b-2 border-slate-300 my-8'></p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    recipes.map((recipe, index) => <Recipes recipe={recipe} key={index}> </Recipes>)
                }
            </div>
        </div>
    );
};

export default ChefInfo;