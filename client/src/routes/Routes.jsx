import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
       index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element:<Login></Login>
      }
      ,
      {
        path:"/registration",
        element:<Registration></Registration>
      }
    ],
  },
]);

export default Routes;