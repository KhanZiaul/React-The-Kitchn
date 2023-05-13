
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
    return (
        <div  className='mx-4 lg:mx-6 my-6'>
          
            <Outlet></Outlet>
          
        </div>
    );
};

export default MainLayout;