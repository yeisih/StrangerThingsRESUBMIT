import React,{useState} from "react";
import ReactDOM from "react-dom";




const SignUpForm=()=> {
    const[username,setUsername]=useState("");
    const [password, setPassword]=useState("");


    async function formSubmitHandler (event) {
        event.preventDefault();
        try{
            const response=await fetch(
                "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/SignUp",

    {   
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },

                body: JSON.stringify({
                    user: {
                        username: username,
                        password:password
                    }
                })
            }
        }
    }

    const data= await response.json();



    localStorage.setItem("token",data.data.token);
} catch { (error){

}
}
 function updateUsername(event){
    setUsername(event.target.value)

 }
 function updatePassword(event){
    setPassword(event.target.value)
 }




 return (
    <div>
        <form  onSubmit={formSubmitHandler}>
            <label>Enter New Username Here!</label>
            <input type="text" value={username} onChange={updateUsername}></input>

            <br/>
            <label>Enter New Password here</label>
            <input type="text" value={password} onChange={updatePassword}></input>
            <br/>
            <button type="Enter"> Register For New Account</button>
        </form>
    </div>
 )
 ReactDOM.render(<SignUpForm/>,document.getElementById("app"));