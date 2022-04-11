import React from "react";
import { Link } from "react-router-dom";

function LandingPage(){
    
    return (
        <div>
            <h1> Henry Dogs App</h1>
            <h3>A simple web application where you can view any dog breed and even create your own</h3>

            <Link to="/home">
                <button>Let's Go!</button>
            </Link>
        </div>
    )
}

export default LandingPage;