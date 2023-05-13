import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Audio, ThreeCircles } from 'react-loader-spinner'


const PrivateProvider = ({ children }) => {
    const { loginUser, progress } = useContext(AuthContext)

    const location = useLocation()

    if (progress) {

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

    if (loginUser) {

        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateProvider;