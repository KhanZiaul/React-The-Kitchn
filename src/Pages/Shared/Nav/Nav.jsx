import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import './Nav.css'
import logo from '../../../assets/Images/png-transparent-cooking-chef-s-hat-restaurant-chef-professional-cooking-knife-kitchen-utensils-icon-logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';

const Nav = () => {
    const [close, setClose] = useState(false)
    const { loginUser, logOut } = useContext(AuthContext)

    function barHandler() {
        setClose(!close)
    }

    function closeHander() {
        setClose(!close)
    }

    function logOutHandler() {
        logOut().then(() => {

        }).catch((error) => {

        });
    }

    return (
        <div className="flex flex-col lg:items-center p-2 lg:p-4 lg:flex-row lg:justify-between bg-sky-700 px-3 gap-5 relative">
            <div>
                <div className='flex items-center gap-3'>
                    <img className='w-9 h-9 rounded-full' src={logo} alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-2xl text-white">The Kitchn</Link>
                </div>
            </div>
            <div className='flex'>
                <div className='block lg:hidden'>
                    {
                        close ? <FaBars className='text-white' onClick={barHandler} /> : <FaTimes onClick={closeHander} className='text-white' />
                    }
                </div>

                <div className={`flex flex-col lg:flex-row lg:gap-8 gap-4 duration-200 items-center text-white absolute lg:static ${close ? 'top-24 bg-sky-600 md:bg-sky-700 p-6 text-white right-0' : '-top-80'}`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        About Us
                    </NavLink>
                    {
                        loginUser ?
                            <div className='flex flex-col md:flex-row items-center gap-5'>
                                <div>
                                    {
                                        loginUser?.photoURL ? <img title={loginUser.displayName} src={loginUser.photoURL} className='w-10 h-10 rounded-full cursor-pointer' alt="" />
                                            :
                                            <div >
                                                <FaUser title={loginUser.displayName} className=' bg-slate-400 w-10 h-10 rounded-full cursor-pointer p-2' />
                                            </div>
                                    }
                                </div>
                                <button onClick={logOutHandler} className='text-justify mb-2 cursor-pointer bg-slate-600 text-white px-6 py-2 rounded-xl hover:bg-slate-800'>Log out</button>
                            </div>
                            :
                            <Link to='/login' className='text-justify mb-2 cursor-pointer bg-slate-600 text-white px-6 py-2 rounded-xl hover:bg-slate-800'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Nav;