import React from "react";

import SearchBar from "../SearchBar/SearchBar.js"
import Filters from "../Filters/Filters.js"

function Home(){

    return(
        <div>
            <h1>Componente Home</h1>
            <SearchBar />
            <Filters />
        </div>
    )
}

export default Home;