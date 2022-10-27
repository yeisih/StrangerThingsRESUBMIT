import React from "react";
import "react-router-dom";

const Posts=() =>{
    const outletContext= useOutletContext();

    return(
        <div>
            <p> All Posts available here </p>
            {
                outletContext[0].map((Posts,idx)=> {
                    return <div key={idx}>
                    <p> Post: {posts}</p>
                    </div>
                })
            }
        </div>
    )
} 

fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/Posts")
.then(response=> response.json())
.then(result=>{
    console.log(result);

})
.catch(console.error);
export default Posts;
