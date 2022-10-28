import React, {useState,useEffect} from "react";
import {useOutletContext} from "react-router-dom";

const Posts=() =>{

    const outletContext= useOutletContext();
    const [posts,setPosts]=outletContext
    return(
        <div>
            <p> All Posts available here </p>
            {
                posts.map((post,idx)=> {
                    return <div key={idx}>
                    <p> post: {post._id}</p>
                    </div>
                })
            }
        </div>
    )
} 

export default Posts;
