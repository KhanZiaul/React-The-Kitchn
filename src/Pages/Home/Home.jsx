import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../Chefs/Chefs';
import WhyUs from '../WHyUs/WhyUs';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import { Audio, ThreeCircles } from 'react-loader-spinner'

const Home = () => {

    const [chefs, setChefs] = useState(null)
    
    useEffect(()=>{
        fetch('https://chef-datas-khanziaul.vercel.app/chefs')
        .then(res => res.json())
        .then(datas => setChefs(datas))
    },[])

    if (chefs) {
        return (
            <div>
                <div className='flex flex-col lg:flex-col-reverse '>
                    <div className='flex flex-col lg:flex-row items-center my-20 gap-7'>

                        <div>
                            <h2 className='text-5xl font-semibold mb-7'>Good food is the foundation of genuine happiness</h2>
                            <p className='text-xl text-justify font-semibold'>
                                Are you looking to up your cooking game, host a dinner party, or simply learn some new kitchen skills? Look no further than "The Kitchn", your ultimate guide to cooking and entertaining. </p>
                        </div>
                        <img className='w-full lg:w-3/6' src="https://images.unsplash.com/photo-1596189181426-7f63a1737f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    </div>
                    <div>
                        <Banner></Banner>
                    </div>
                </div>
                <div>
                    <h2 className='text-center text-4xl font-bold my-8'>Our Chefs</h2>
                    <p className='border-b-2 border-slate-300 mb-12'></p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            chefs.map(chef => <Chefs chef={chef} key={chef.id}> </Chefs>)
                        }
                    </div>
                </div>

                <WhyUs></WhyUs>
                <Reviews></Reviews>
                <Services></Services>
            </div>
        );
    }

    else {
        return (
            <div className='mx-auto w-1/6'>
                <ThreeCircles
                    height="100"
                    width="100"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                />
            </div>)
    }
};

export default Home;