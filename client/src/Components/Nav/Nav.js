import React from "react";
import {Link} from "react-router-dom"

import "../Nav/Nav.css";

function Nav(){

    return(
        <div className="nav-background">
            <nav className="nav">
                <Link to="/home" className="navLink">Home</Link>
                <Link to="/dog" className="navLink">Create Dog</Link>
            </nav>
        </div>
    )
}

export default Nav;