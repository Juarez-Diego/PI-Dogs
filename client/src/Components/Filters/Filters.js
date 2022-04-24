import React from "react";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { sortAlphabetically, sortByWeight, filterBySource, filterByTemperament } from "../../Actions";
import "../Filters/Filters.css"

function Filters(){

const allTemperaments = useSelector(state => state.temperaments)

const dispatch = useDispatch()
const [temp, setTemp] = useState("")
// const [renderPage, setRenderPage] = useState("")
// const [currentPage, setCurrentPage] = useState(1)

function sortAlpha(e){
    dispatch(sortAlphabetically(e.target.value))
}

function sortWeight(e){
    dispatch(sortByWeight(e.target.value))
}

function filterSource(e){
    dispatch(filterBySource(e.target.value))
}

function filterTemperament(e){
    dispatch(filterByTemperament(e.target.value))
}

    return(
        <div className="filters">

            <div>
            <span className="filter-titles">Filter by Source </span>
            <select className="filters-source" onChange={e => filterSource(e)}>
                <option className="filters-option"  value="All">All</option>
                <option className="filters-option"  value="API">API</option>
                <option className="filters-option"  value="Database">Database</option>
            </select>
            </div>


            <div>
            <span className="filter-titles">Alphabetical Order </span>
            <select className="filters-source" onChange={e => sortAlpha(e)}>
                <option className="filters-option"  value="Ascending">A-Z</option>
                <option className="filters-option"  value="Descending">Z-A</option>
            </select>
            </div>


            <div>
            <span className="filter-titles">Order by Weight </span>
            <select className="filters-source" onChange={e => sortWeight(e)}>
                <option className="filters-option"  value="High">High</option>
                <option className="filters-option"  value="Low">Low</option>
            </select>
            </div>

            <div>
            <span className="filter-titles">Filter by Temperament </span>
            <select className="filters-source" onChange={e => filterTemperament(e)}>
                <option className="filters-option"  value="All"> All </option>
                {allTemperaments?.map((e, index) => (<option className="filters-option"  key={index} value={e.name}>{e.name}</option>))}
            </select>
            </div>

        </div>
    )
}

export default Filters;