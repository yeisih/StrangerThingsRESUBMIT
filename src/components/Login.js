import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const handleSubmit=() =>{
  return (
    <form onSubmit={handleSubmit}>
      <label> Username </label>
      <input type="text"></input>

      <label> Password </label>
      <input type="text"></input>
      <button type="submit">Login to account </button>

    </form>
)};
};
export default Login;
