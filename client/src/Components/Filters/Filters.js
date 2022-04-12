import React from "react";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { sortAlphabetically, sortByWeight, filterBySource, filterByTemperament } from "../../Actions";

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
        <div>

            <div>
            <span>Filter by Source</span>
            <select onChange={e => filterSource(e)}>
                <option value="All">All</option>
                <option value="API">API</option>
                <option value="Database">Database</option>
            </select>
            </div>


            <div>
            <span>Alphabetical Order</span>
            <select onChange={e => sortAlpha(e)}>
                <option value="Ascending">A-Z</option>
                <option value="Descending">Z-A</option>
            </select>
            </div>


            <div>
            <span>Order by Weight</span>
            <select onChange={e => sortWeight(e)}>
                <option value="High">High</option>
                <option value="Low">Low</option>
            </select>
            </div>

            <div>
            <span>Filter by Temperament</span>
            <select onChange={e => filterTemperament(e)}>
                <option value="All"> All </option>
                {allTemperaments?.map((e, index) => (<option key={index} value={e.name}>{e.name}</option>))}
            </select>
            </div>

        </div>
    )
}

export default Filters;