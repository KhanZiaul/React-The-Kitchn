import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import Login from "../Login-Register/Login/Login";
import Register from "../Login-Register/Register/Register";

import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [

      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
     
    ]
  },
]);

export default router;