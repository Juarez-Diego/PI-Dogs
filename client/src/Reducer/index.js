
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
        
        case "SORT_ALPHABETICALLY":
            const alphabet = action.payload === "Ascending" ?
            state.dogs.sort((a, b) => {
                if(a.name > b.name) return 1;
                if(b.name > a.name) return -1
                return 0;
            }) :
            state.dogs.sort((a, b) => {
                if(a.name > b.name) return -1;
                if(b.name > a.name) return 1
                return 0;
            });
            return{
                ...state,
                dogs: [...alphabet]
            }

        case "SORT_BY_WEIGHT":
            const sortWeight = action.payload === "High" ?
            state.dogs.sort((a, b) => {
                if(a.weight < b.weight) return 1;
                if(b.weight < a.weight) return -1
                return 0;
            }) :
            state.dogs.sort((a, b) => {
                if(a.weight < b.weight) return -1;
                if(b.weight < a.weight) return 1;
                return 0;
            })
            return {
                ...state,
                dogs: [...sortWeight]
            }

        case "FILTER_BY_TEMPERAMENT":
            const getTemps = state.dogsCopy
            const filtering = action.payload === "All" ? getTemps :
            state.dogsCopy.filter(e => {
                if(e.temperament) {
                    if(e.temperament.includes(action.payload)) {
                        return e
                    }
                } else{return}
            })
            return {
                ...state,
                dogs: filtering,
                dogsCopy: getTemps
            }

        case "FILTER_BY_SOURCE":
            if (action.payload === "All") {
                return {
                  ...state,
                  dogs: state.dogsCopy
                  
                }
              } else if (action.payload === "Database") {
                return {
                  ...state,
                  dogs: state.dogsCopy.filter((e) => e.createdInDb === true)
                }
              } else {
                return {
                  ...state,
                  dogs: state.dogsCopy.filter((e) => e.createdInDb === undefined)
                }
              }

        case "RESET_DETAIL":
            return{
                ...state,
                dogDetail: []
            }

        default: return state;
    }
}


export default rootReducer;
