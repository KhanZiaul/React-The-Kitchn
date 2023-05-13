import React from 'react';
import image1 from '../../assets/Images/bg-1.jpg'
import image2 from '../../assets/Images/bg-2.jpg'
import image3 from '../../assets/Images/bg-3.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className="carousel w-full h-[200px] lg:h-[450px] my-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img className='w-full' src={image1} />
                <p className='text-white absolute lg:text-4xl inset-center hidden md:block'>Life is too short for bad food - Experience the difference with us!</p>
                <p className='text-white absolute lg:text-4xl inset-center md:hidden'>Life is too short for bad food</p>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full" />
                <p className='text-white absolute lg:text-4xl inset-center hidden md:block'>Good food, good mood - Order from us and start your day off right!</p>
                <p className='text-white absolute lg:text-4xl inset-center md:hidden'>Good food, good mood</p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full" />
                <p className='text-white absolute lg:text-4xl inset-center hidden md:block'>No time to cook? No problem - Let us do the work for you!</p>
                <p className='text-white absolute lg:text-4xl inset-center md:hidden'>Let us bring the flavor to you</p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;