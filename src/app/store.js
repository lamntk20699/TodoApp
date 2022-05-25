// import { configureStore } from "@reduxjs/toolkit";

// //redux-toolkit
// import todoReducer from "../redux/todoSlice";
// import filterReducer from "../redux/filterSlice";

// //react-redux
import {createStore, combineReducers} from "redux"
import todoReducer from "../react-redux/reducers/todoReducer";
import filterReducer from "../react-redux/reducers/filterReducer";

const rootreducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer
});

const store = createStore(rootreducer);

// const store = configureStore({
//   reducer: {
//     todoList: todoReducer,
//     filters: filterReducer,
//   },
// });

export default store;
