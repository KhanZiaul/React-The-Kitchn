import React from 'react';

const WhyUs = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold my-8'>Why Us ?</h2>
            <p className='border-b-2 border-slate-300 my-8'></p>
            <div className='flex flex-col lg:flex-row items-center my-20 gap-7'>
                <div>
                    <p className='text-xl text-justify font-semibold'>
                        At "The Kitchn" website , we're passionate about serving delicious food made with only the freshest, highest-quality ingredients. Whether you're in the mood for something spicy and savory or sweet and indulgent, our extensive menu has something for everyone. Our expert chefs use their years of experience and creativity to craft dishes that are bursting with flavor and texture, making every bite a culinary adventure. And with our fast, easy delivery service, getting your favorite dishes delivered right to your door has never been easier. So why wait? Order from "The Kitchn" today and experience the difference for yourself!</p>
                </div>
                <img className='w-full lg:w-3/6' src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
        </div>
    );
};

export default WhyUs;