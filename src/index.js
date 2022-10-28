import React from "react";
import ReactDOM from "react-dom";


import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from  "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Settings from"./components/Settings";
import Error from "./components/Error";
import Login from "./components/Login";
import Default from "./components/Default";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        errorElement:<Error/>,

        children:[
            {
                index:true,
                element:<Default/>
            },

        {       
            path: "/posts",
            element:<Posts/>
        },
        {
            path: "/profile",
            element:<Profile/>
        },
        {
            path:"/navbar",
            element:<Navbar/>
        },
        {
            path: "/settings",
            element:<Settings/>
        },
        {
            path:"/login",
            element:<Login/>
        }
        
        


        ]
    }
])

ReactDOM.render(<RouterProvider router={router}/>,document.getElementById("app"));






