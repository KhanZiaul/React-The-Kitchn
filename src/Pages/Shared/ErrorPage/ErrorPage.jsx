import React from 'react';
import { useRouteError } from 'react-router-dom';
import sadImage from '../../../assets/Images/error.png'

const ErrorPage = () => {
    let errors = useRouteError()
    return (
        <div className='flex font-mono flex-col justify-center items-center min-h-[100vh] bg-slate-200'>
            <img className='w-20 rounded-full mb-4' src={sadImage} alt="" />
            <h2 className='text-4xl text-slate-500 '>~ {errors.statusText} ~</h2>
            <h2 className='text-4xl my-5 text-slate-500'>{errors.status}</h2>
            <p className='text-xl font-bold text-slate-600 border-2 border-slate-200 rounded-md p-5'>error : {errors.error.message}</p>

        </div>
    );
};

export default ErrorPage;