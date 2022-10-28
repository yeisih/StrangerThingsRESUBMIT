import React,{useState,useEffect} from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Home=() => {
    const [Posts,setPosts]=useState([])

useEffect(()=>{
    async function fetchstrangerThingsData(){

        try{
            const response=await fetch ("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts")
        const data= await response.json()
        console.log(data)
        setPosts(data.data.posts)
        

        } catch(error){console.error(error)}
    }
        fetchstrangerThingsData()
    },[])




return (
    <div>
        <Navbar/>
        <Outlet context={[Posts,setPosts]}/>

    </div>
)
}
export default Home;
