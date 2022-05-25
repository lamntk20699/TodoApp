import {SEARCH_FILTER_CHANGED, STATUS_FILTER_CHANGED, PRIORITIES_FILTER_CHANGED} from "../actions/actionTypes"

const initialState= {
    searchText: "",
    status: "All",
    priorities: [],
}

const filterReducer = (state = initialState, action) => {
    // console.log({state, action});
    switch (action.type) {
        case SEARCH_FILTER_CHANGED: 
            return { 
                ...state, 
                searchText: action.payload
            };
        case STATUS_FILTER_CHANGED: 
            return { 
                ...state, 
                status: action.payload
            };
        case PRIORITIES_FILTER_CHANGED: 
            return { 
                ...state, 
                priorities: action.payload
            };
        default: return state;
    }
}

export  default filterReducer;