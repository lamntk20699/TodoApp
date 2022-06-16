import * as types from "./actionTypes";
// import todoApi from "../../api/todoApi";

export const addTodo = (todoItem) => ({
    type: types.ADD_TODO,
    payload: todoItem
});

export const deleteTodo = (data) => ({
    type: types.DELETE_TODO,
    payload: data
});

export const editTodo = (todoItem) => ({
    type: types.EDIT_TODO,
    payload: todoItem
});

export const toggleTodoStatus = (todoItem) => ({
    type: types.TOGGLE_TODO_STATUS,
    payload: todoItem
})

export const setTodoList = (data) => ({
    type: types.SET_TODO_LIST,
    payload: data
})

// export const setTodos = () => async (dispatch) => {
//     const response = await todoApi.get(1);
//     console.log(response);
//     dispatch(fetchTodoList(response));
// }


//fetch data
export const fetchTodoList = (todoID) => ({
    type: types.FETCH_TODO_LIST,
    payload: todoID
})