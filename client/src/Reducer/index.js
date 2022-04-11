
const initialState = {
    dogs: [],
    dogsCopy: [],
    temperaments: [],
    dogDetail: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case "GET_DOGS": 
            return{
                ...state,
                dogs: action.payload,
                dogsCopy: action.payload
            }
        
        case "GET_TEMPERAMENTS":
            return{
                ...state,
                temperaments: action.payload
            }

        case "GET_BY_NAME":
            return{
                ...state,
                dogs: action.payload
            }

        case "GET_BY_ID":
            return{
                ...state,
                dogDetail: action.payload
            }

        case "CREATE_DOG":
            return{
                ...state
            }

        default: return state;
    }
}


export default rootReducer;
