import React from "react";
import {useDispatch} from "react-redux"
import { useState } from "react";

import {getDogByName} from "../../Actions/index"
import "../SearchBar/SearchBar.css"

function SearchBar(){

const [searchWord, setSearchWord] = useState("")
const dispatch = useDispatch()

function handleInputChange(e){
    e.preventDefault()
    setSearchWord(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(getDogByName(searchWord))
}

    return(
        <div className="searchbar">
            <input className="input" type="text" placeholder="Search by name..." onChange={e => handleInputChange(e)}></input>
            <button className="search-button" type="submit" onClick={e => handleSubmit(e)}>Search</button>
        </div>
    )
}

export default SearchBar;