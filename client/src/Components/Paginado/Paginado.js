import React, {Fragment} from "react";

import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "../Card/Card";
import Loading from "../Loading/Loading";

import "../Paginado/Paginado.css"

function Paginado(){

const dispatch = useDispatch()
const allDoggos = useSelector(state => state.dogs)

const [currentPage, setCurrentPage] = useState(1)  
const [dogsPerPage, setdogsPerPage] = useState(8)


const indexOfLastDog = currentPage * dogsPerPage;
const indexOfFirstDog = indexOfLastDog - dogsPerPage; 
const currentDoggo = allDoggos.slice(indexOfFirstDog, indexOfLastDog)


const pageNumber = [];

    for(var i = 1; i <= Math.ceil(allDoggos.length / dogsPerPage); i++){
        pageNumber.push(i)
    }

const pages = function(pageNumber) {
    setCurrentPage(pageNumber)
}

useEffect(() => {
    setCurrentPage(1)
},[allDoggos])



    return(
        <div>

            <div className="paginado-main">
            
            <nav>
            <ul>
                {pageNumber && pageNumber.map(number => {return(
                    <li className="paginado_list" key={number}>
                        <button className="paginado-button" onClick={() => pages(number)}>{number}</button>
                    </li>
                )})}
            </ul>
            </nav>
            </div>


            {allDoggos.length === 0 && allDoggos ? (<Loading />) :

            <div className="container">
            {Array.isArray(currentDoggo) ? currentDoggo?.map((e) => {
            return (
                <div className="card">
            <Fragment>
                <Link to={`/dogs/${e.id}`} style={{ textDecoration: 'none' }} > 
                    <Card 
                    key={e.id} 
                    id={e.id}
                    name={e.name}
                    weight={e.weight}
                    temperament={e.temperament}
                    image={e.image}
                    />
                </Link>
            </Fragment>
            </div>
            )}) : (<div className="name-not-found"><h1>Dog not found, please try another search</h1></div>)
        }
            </div>
        }
        </div>
    )
}

export default Paginado;
