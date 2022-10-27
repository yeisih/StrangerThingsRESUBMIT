import React from "react";
import Navbar from "./Navbar";

import "react-dom";
import { response } from "express";

const Home=() => {
    const [Posts,setPosts]=useState([""])

useEffect(()=>{
    async function fetchstrangerThingsData(){

        try{
            const response=await fetch ("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/Posts",{
                method:"Post",
                headers:{
                    "content-type":"application/json"
                }, 
                body:JSON.stringify({"dsknlsan"),
                user:{
                    username:"",
                    password:"",
                }
                    .then(response=> response.json())
                    .then(result => {
                        console.log(result);
                    }


                
                });



            const strangerThingsData= await response.json();


            setPosts(strangerThingsData.data.Posts)
        } catch(error) {
            console.log(error);
        }
        }
        fetchstrangerThingsData()
    },[])




return (
    <div>
        <h1> Welcome to Home!</h1>
        <Navbar/>
        <p> HOME </p>
        <Outlet context={[Posts,setPosts]}/>

    </div>
)
}
export default Home;
