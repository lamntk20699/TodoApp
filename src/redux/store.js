import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import filterReducer from "./filterSlice";

const store = configureStore({
  reducer: {
    todoList: todoReducer,
    filters: filterReducer,
  },
});

export default store;
