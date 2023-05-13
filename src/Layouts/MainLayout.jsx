import React from 'react';
import Nav from '../Pages/Shared/Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div  className='mx-4 lg:mx-6 my-6'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;