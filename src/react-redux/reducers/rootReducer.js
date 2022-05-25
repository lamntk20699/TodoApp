import {combineReducers} from "redux";
import filterReducer from "./filterReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer
})

export default rootReducer;