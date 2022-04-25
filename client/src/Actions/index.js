import axios from "axios";

export function getAllDogs(){
    return async function(dispatch){
        const getDogs = await axios.get("http://localhost:3001/dogs")
        return dispatch({
            type: "GET_DOGS",
            payload: getDogs.data
        })
    }
}

export function getTemperaments(){
    return async function(dispatch){
        const getTemps = await axios.get("http://localhost:3001/temperaments")
        return dispatch({
            type: "GET_TEMPERAMENTS",
            payload: getTemps.data
        })
    }
}

export function getDogByName(name){
    return async function(dispatch){
        const getName = await axios.get(`http://localhost:3001/dogs?name=${name}`)
        return dispatch({
            type: "GET_BY_NAME",
            payload: getName.data
        })
    }
}

export function getDogById(id){
    return async function(dispatch){
        const getId = await axios.get(`http://localhost:3001/dogs/${id}`)
        return dispatch({
            type: "GET_BY_ID",
            payload: getId.data
        })
    }
}

export function createDog(payload){
    return async function(disptach){
        await axios.post("http://localhost:3001/dog", payload) // Check if the constant is necessary, also the type
        return{
            type: "CREATE_DOG",
            payload
        }
    }
}

export function sortAlphabetically(payload){
    return {
        type: "SORT_ALPHABETICALLY",
        payload
    }
}

export function sortByWeight(payload){
    return {
        type: "SORT_BY_WEIGHT",
        payload
    }
}

export function filterByTemperament(payload){
    return {
        type: "FILTER_BY_TEMPERAMENT",
        payload
    }
}

export function filterBySource(payload){
    return {
        type: "FILTER_BY_SOURCE",
        payload
    }
}

export function resetDetail(){
    return{
        type: "RESET_DETAIL"
    }
}





