import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getAllDogs, getTemperaments} from "../../Actions";

import SearchBar from "../SearchBar/SearchBar.js"
import Filters from "../Filters/Filters.js"
import Paginado from "../Paginado/Paginado";

function Home(){

const dispatch = useDispatch()

useEffect(() => {
    dispatch(getAllDogs())
}, [])

useEffect(() => {                 // Intenta mover esto a App.js para que deje de cargar
    dispatch(getTemperaments())
}, [])

    return(
        <div>
            <h1>Componente Home</h1>
            <SearchBar />
            <Filters />

            <Paginado />
        </div>
    )
}

export default Home;