import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <h1>Home Page</h1>,
      },
    ],
  },
]);

export default Routes;