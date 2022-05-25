import {ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO_STATUS} from "./actionTypes";

export const addTodo = (todoItem) => ({
    type: ADD_TODO,
    payload: todoItem
});

export const deleteTodo = (todoID) => ({
    type: DELETE_TODO,
    payload: todoID
});

export const editTodo = (todoItem) => ({
    type: EDIT_TODO,
    payload: todoItem
});

export const toggleTodoStatus = (todoID) => ({
    type: TOGGLE_TODO_STATUS,
    payload: todoID
})