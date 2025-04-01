import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Services from './pages/Services';

import Layout from './pages/Layout';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

const Routing2 = () => {
    let myRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path: "/",
                element: <Profile/>,
            },
         
            {
                path: "/services",
                element: <Services/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
        
            },
        ],
    },
]);
  return (
    <div>
       <RouterProvider router={myRoutes}></RouterProvider>
    </div>
  );
};

export default Routing2;
