import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getAllDogs, getTemperaments} from "../../Actions";

import SearchBar from "../SearchBar/SearchBar.js"
import Filters from "../Filters/Filters.js"
import Paginado from "../Paginado/Paginado";

import "../Home/Home.css"

function Home(){

    return(
        <div div className="background-image">
      
            <SearchBar />
            <Filters />

            <Paginado />
        </div>
    )
}

export default Home;