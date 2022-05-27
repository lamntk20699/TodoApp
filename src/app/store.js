import { configureStore } from "@reduxjs/toolkit";

// //redux-toolkit
// import todoReducer from "../redux/todoSlice";
// import filterReducer from "../redux/filterSlice";

// //react-redux
import todoReducer from "../react-redux/reducers/todoReducer";
import filterReducer from "../react-redux/reducers/filterReducer";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filterReducer,
  }
});

// const store = createStore(rootreducer);

// const store = configureStore({
//   reducer: {
//     todoList: todoReducer,
//     filters: filterReducer,
//   },
// });

export default store;
