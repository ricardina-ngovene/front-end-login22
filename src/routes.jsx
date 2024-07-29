import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import Signup from "./pages/signup";

import { Login } from "./pages/login";

    

export const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
     element:<Login/>
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
   
  ]);
  