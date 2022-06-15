// //redux-toolkit
// import todoReducer from "../redux/todoSlice";
// import filterReducer from "../redux/filterSlice";\
// import { configureStore } from "@reduxjs/toolkit";

// //react-redux
import todoReducer from "../react-redux/reducers/todoReducer";
import filterReducer from "../react-redux/reducers/filterReducer";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

// import thunk from 'redux-thunk';

//Sagas
import createSagaMiddleware from "redux-saga";

import rootSaga from "../react-redux/sagas/HelloSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

// const myMiddleware = storeApi => next => action => {
//   if (action.type === "todos/ADD_TODO" && action.payload.name === "fake") {
//     action.payload.name = "truth";
//   }
//   return next(action);
// }

// //redux-thunk
// // The outer function receives a "store API" object with { dispatch, getState }
// // The middle function receives the next middleware in the chain(or the actual store.dispatch method)
// // The inner function will be called with each action as it's passed through the middleware chain
// const thunkMiddleware = ({ dispatch, getState }) => next => action => {
//   // If the "action" is actually a function instead...
//   if (typeof action === 'function') {
//     // then call the function and pass `dispatch` and `getState` as arguments
//     return action(dispatch, getState);
//   }
//   // Otherwise, it's a normal action - send it onwards
//   return next(action);
// }

// const asyncMiddleware = ({ dispatch, getState }) => next => action => {
//   if (typeof action === 'function') {
//     return action(next);
//     // is the same as return action(dispatch); --> read thunkMiddleware: https://redux.js.org/usage/writing-logic-thunks#how-does-the-middleware-work
//   }
//   return next(action);
// }

const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(
  rootReducer,
  composedEnhancer,
);

sagaMiddleware.run(rootSaga);

// const store = configureStore({
//   reducer: {
//     todos: todoReducer,
//     filters: filterReducer,
//   }
// });

// const store = createStore(rootreducer);

// const store = configureStore({
//   reducer: {
//     todoList: todoReducer,
//     filters: filterReducer,
//   },
// });

export default store;
