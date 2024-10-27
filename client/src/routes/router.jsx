import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/login";
import Register from "../pages/register";
import Cart from "../pages/cart";



const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path: "/",
                element : <Home/>
            },
            {
                path : "/login" , 
                element : <Login/>
            },
            {
                path : "/register",
                element : <Register/>
            },
            {
                path : "/cart",
                element : <Cart/>
            }
        ]
    }
])


export default router;
