import React from 'react';
import quality from '../../assets/Images/quality.jpg'
import order from '../../assets/Images/order.png'
import delivery from '../../assets/Images/delivery.png'
const Services = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold my-8'>Our Services</h2>
            <p className='border-b-2 border-slate-300 mb-8'></p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div>
                    <img src={order} alt="" />
                    <h2 className='my-4 text-center text-3xl font-semibold'>Easy To Order</h2>
                    <h2 className='my-4 text-xl font-semibold'>Sit back and relax while we prepare your order. We'll let you know when it's on its way, and you can track its progress in real-time. Once it arrives, dig in and enjoy!</h2>
                </div>
                <div>
                    <img src={delivery} alt="" />
                    <h2 className='my-4 text-center text-3xl font-semibold'>Fastest Delivery </h2>
                    <h2 className='my-4 text-xl font-semibold'>With our state-of-the-art delivery system and experienced drivers, we're able to get your food to you faster than anyone else. Plus, we offer real-time tracking so you can keep an eye on your order every step of the way.</h2>
                </div>
                <div>
                    <img src={quality} alt="" />
                    <h2 className='my-4 text-center text-3xl font-semibold'>Best Quality</h2>
                    <h2 className='my-4 text-xl font-semibold'>From our meats and produce to our sauces and spices, we take great care to source the very best ingredients available. Our chefs then use their expertise to create delicious dishes that showcase the natural flavors and textures of these premium ingredients.</h2>
                </div>
            </div>
        </div>
    );
};

export default Services;