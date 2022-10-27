import React from "react";

import "react-dom";

const Navbar = () => {
    return(

    <nav>
        
         <Link to="/"> Home</Link>
        <Link to="Posts">Posts</Link>
        <Link to="Profile">Profile</Link>
        <Link to= "Settings">Settings</Link>
    </nav>
    )
};

export default Navbar;
