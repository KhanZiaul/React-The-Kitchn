import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,

  },
]);

export default router;