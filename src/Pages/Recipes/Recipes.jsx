import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({ recipe }) => {
    const { recipe_name, ingredients, cooking_method, rating } = recipe;

    const [favour, setFavour] = useState(true)

    function favoriteButtonHandler() {
        setFavour(false)
        toast("Added in Favorite!")
    }

    return (
        <div className='border-2 p-8 rounded-xl'>
            <div className='h-full flex flex-col justify-between'>
                <div className='font-semibold'>
                    <h2 className='text-3xl text-center font-bold'>{recipe_name}</h2>
                    <p className='border-b-2 border-slate-300 my-8'></p>
                    <div>
                        <h2 className='text-2xl font-bold my-8'>Ingredients</h2>
                        {
                            ingredients.map((ingredient, index) => <p className='text-xl' key={index}>{index + 1} . {ingredient} </p>)
                        }
                    </div>
                    <h2 className='text-2xl font-bold my-8'>Cooking Method</h2>
                    <p className='text-justify'>{cooking_method}</p>
                </div>

                <div className='flex flex-col lg:flex-row justify-between my-7'>
                    <div className='flex gap-4 my-4 font-semibold'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />
                        <p>{rating}</p>
                    </div>

                    <button onClick={favoriteButtonHandler} disabled={!favour} className="btn gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        Favorite
                    </button>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default Recipes;