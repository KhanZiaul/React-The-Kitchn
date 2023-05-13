import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Terms from "../Pages/Terms/Terms";
import Blog from "../Pages/Blog/Blog";
import ChefInfo from "../Pages/ChefInfo/ChefInfo";
import Login from "../Login-Register/Login/Login";
import Register from "../Login-Register/Register/Register";
import PrivateProvider from "../Provider/PrivateProvider/PrivateProvider";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'about',
        element: <AboutUs></AboutUs>
      },
      {
        path: 'terms',
        element: <Terms></Terms>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: '/chef/:id',
        element: <PrivateProvider><ChefInfo></ChefInfo></PrivateProvider>,
        loader: ({ params }) => fetch(`https://chef-datas-khanziaul.vercel.app/chefs/${params.id}`)
      }
    ]
  },
]);

export default router;