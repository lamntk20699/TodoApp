//redux-toolkit
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todoSlice";
import filterReducer from "../redux/filterSlice";

// //react-redux
// import { createStore, StoreEnhancer  } from "redux";
// import rootReducer from "../react-redux/reducers/rootReducer";

const store = configureStore({
  reducer: {
    todoList: todoReducer,
    filters: filterReducer,
  },
});

// const store = createStore(rootReducer, StoreEnhancer);

export default store;
