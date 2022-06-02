import * as types from "../actions/actionTypes"

const initialState= {
    searchText: "",
    status: "All",
    priorities: [],
}

const filterReducer = (state = initialState, action) => {
    // console.log({state, action});
    switch (action.type) {
        case types.SEARCH_FILTER_CHANGED: 
            return { 
                ...state, 
                searchText: action.payload
            };
        case types.STATUS_FILTER_CHANGED: 
            return { 
                ...state, 
                status: action.payload
            };
        case types.PRIORITIES_FILTER_CHANGED: 
            return { 
                ...state, 
                priorities: action.payload
            };
        default: return state;
    }
}

export  default filterReducer;