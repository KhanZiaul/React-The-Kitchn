import React from 'react';
import { FaFacebook, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='my-12 bg-sky-900 text-white p-6 lg:p-10'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                <div className='flex gap-7 mb-4 '>
                    < FaFacebook className='cursor-pointer' />
                    < FaInstagram className='cursor-pointer' />
                    < FaGithub className='cursor-pointer' />
                    < FaTwitterSquare className='cursor-pointer' />
                </div>

                <div className='border-l w-56 border-r mb-5'>
                    <h2 className='text-2xl mx-auto my-4 w-36 text-center'>Quick Links</h2>
                    <div className='text-center font-bold'>
                        <Link className='mb-4 block' to='/'>Home</Link>
                        <Link className='mb-4 block' to='/blog'>Blog</Link>
                        <Link className='mb-4 block' to='/about'>About Us</Link>
                        <Link className='mb-4 block' to='/terms'>Terms and Conditions</Link>
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl'>Contact With Us</h2>
                    <p className='my-4 font-semibold'>Phone : 0152 1213 609</p>
                    <p className='my-4 font-semibold'>Email : thekitchn@gmail.com</p>
                    <p className='my-4 font-semibold'>Fax : 1-234-567-8900</p>
                </div>

            </div>
            <p className='border-b-2 border-slate-300 my-8'></p>
            <p className='text-2xl text-center'>&copy; Copyright issue 2023</p>
        </div>
    );
};

export default Footer;