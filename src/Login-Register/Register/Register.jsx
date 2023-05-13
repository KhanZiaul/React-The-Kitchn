import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const [showOrHide, setShowOrHide] = useState(true)
    const { createUser } = useContext(AuthContext)
    const [isCheck, setIsCheck] = useState(false)
    const [registerMessage, setRegisterMessage] = useState('')

    function formSubmit(e) {
        e.preventDefault()
        const Name = e.target.name.value;
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        if (Password.length < 6) {
            setRegisterMessage('Password should at least 6 Characters')
            return
        }
        createUser(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                userNameUpdate(userCredential.user, Name)
                setRegisterMessage('')
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setRegisterMessage(errorMessage)
            });

        e.target.reset()
    }

    function hideOrShowHandler() {

        setShowOrHide(!showOrHide)
    }

    function userNameUpdate(user, name) {
        updateProfile(user, {
            displayName: name
        }).then(() => {

        }).catch((error) => {

        });
    }

    function checkboxHandler(event) {

        setIsCheck(event.target.checked)
    }

    return (


        <div>
            <h1 className="text-4xl font-semibold text-center my-8">REGISTER</h1>
            <div className='w-full md:w-2/4 mx-auto border-2 p-10 rounded-xl'>
                <form onSubmit={formSubmit}>

                    <div className='relative'>

                        <div className="flex items-center border-b border-slate-700 py-2 mb-4">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your name" name='name' aria-label="Full name" required />
                        </div>

                        <div className="flex items-center border-b border-slate-700 py-2 mb-4">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your photoURL" name='URL' aria-label="Full name" />
                        </div>

                        <div className="flex items-center border-b border-slate-700 py-2 mb-4">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Enter your email" name='email' aria-label="Full name" required />
                        </div>

                        <div >
                            <div className="flex items-center border-b  border-slate-700 py-2">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type={showOrHide ? 'password' : 'text'} placeholder="Enter your password" aria-label="Full name" name='password' />
                            </div>

                            <div className='absolute top-48 right-4'>
                                {
                                    showOrHide ? <EyeIcon onClick={hideOrShowHandler} className="h-6 w-6 text-blue-500 cursor-pointer" /> :
                                        <EyeSlashIcon onClick={hideOrShowHandler} className="h-6 w-6 text-blue-500 cursor-pointer" />
                                }
                            </div>
                        </div>
                        <div className='my-6 flex justify-between flex-col md:flex-row items-center'>
                            <div>
                                <small>Already have an account ? <Link to='/login' className='text-blue-700 underline hover:text-blue-900'>Login</Link></small>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input onClick={checkboxHandler} type="checkbox" className="checkbox checkbox-primary" />
                            <span>Accept <Link className=' text-blue-600 underline' to='/terms'>Terms and Conditions</Link> </span>
                        </div>
                        <p className='text-center my-3 font-bold text-red-500'>{registerMessage}</p>

                        <div className="form-control mt-6">
                            <button disabled={!isCheck} className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;