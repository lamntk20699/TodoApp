import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO_STATUS, FETCH_TODO_LIST, SET_TODO_LIST } from "./actionTypes";
// import todoApi from "../../api/todoApi";

export const addTodo = (todoItem) => ({
    type: ADD_TODO,
    payload: todoItem
});

export const deleteTodo = (data) => ({
    type: DELETE_TODO,
    payload: data
});

export const editTodo = (todoItem) => ({
    type: EDIT_TODO,
    payload: todoItem
});

export const toggleTodoStatus = (todoID) => ({
    type: TOGGLE_TODO_STATUS,
    payload: todoID
})

export const setTodoList = (data) => ({
    type: SET_TODO_LIST,
    payload: data
})

// export const setTodos = () => async (dispatch) => {
//     const response = await todoApi.get(1);
//     console.log(response);
//     dispatch(fetchTodoList(response));
// }


//fetch data
export const fetchTodoList = (todoID) => ({
    type: FETCH_TODO_LIST,
    payload: todoID
})