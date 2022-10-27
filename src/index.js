import React from "react";
import ReactDOM from "react-dom";


import {createBrowserRouter,RouterProvider} from "react-dom";
import Home from  "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Settings from"./components/Settings";
import Error from "./components/Error";

<link id="components"></link>
const router=createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        errorElement:<Error/>,

        children:[
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
        }
        
        


        ]
    }
])

ReactDOM.render(<RouterProvider router={router}/>,document.getElementById("app"));


const strangerThings =()=>{
    const [Posts,setPosts]=useState([]);
    
};



Return(
    <div>
        <h1> strangerThings </h1>
        <div>
            {
                Posts&&Posts.length?Posts.map((Posts,idx)=> {
                    return <div key={idx}>
                        </div>
                }):<p> no posts available </p>
            }
        </div>
    </div>
)


const Home =()=> {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

     return (
        <div>
          <p>  Sign in here </p>
        </div>
     )
}

<form onSubmit >


    <label> Username </label>
    <input type="text"></input>


    <label> Password </label>
    <input type ="text"></input>
    <button type="submit">Login to account </button>
    </form>


return(
    <form>
    <label> Username</label>
    <input type="text"value={username}></input>

    <label> Password</label>
    <input type="text" value={password}></input>

    <button type="submit">Login</button>

    </form>

)
ReactDOM.render (<Home/>,document. getElementById("app"));

