import React from "react";
import { Link } from "react-router-dom";

import "../LandingPage/LandingPage.css"

function LandingPage(){
    
    return (
        <div className='landing-background'>

            <div className='landing-content'>
            <h1 className="landing-title"> Henry Dogs App</h1>
            <h3 className="landing-description">A simple web application where you can view any dog breed and even create your own</h3>

            <Link to="/home">
                <button className='landing-button'>Let's Go!</button>
            </Link>
            </div>

        </div>
    )
}

export default LandingPage;