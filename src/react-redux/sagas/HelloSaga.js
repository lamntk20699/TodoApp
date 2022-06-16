import todoApi from "../../api/todoApi";
import { put, call, fork, all, takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from "../actions/actionTypes";
// import axios from "axios";

export function* HelloSaga() {
    yield console.log("Hello Saga!!!");
}

//Async functions
async function fetchData(todoID) {
    try {
        const response = await todoApi.get(todoID);
        return response;
    } catch (err) {
        console.log(err);
        return "Fetch Data Failed!";
    }
}

async function postData(data) {
    try {
        const response = await todoApi.postTodo(1, data);
        return response;
    } catch (err) {
        console.log(err);
        return "Post Data Failed!"
    }
}

async function deleteData(todoID) {
    try {
        const response = await todoApi.deleteTodo(1, todoID);
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
        return "Delete Data Failed!"
    }
}

async function editData(todoID, data) {
    try {
        const response = await todoApi.editTodo(1, todoID, data);
        return response;
    } catch(err) {
        console.log(err);
        alert("Update Data Failed!");
        return "Update Failed!";
    }   
}

//workers
export function* fetchTodoList(action) {
    const response = yield call(fetchData, action.payload);
    console.log("fetchTodoList: ", response);
    yield put({ type: types.SET_TODO_LIST, payload: response });
}

export function* addTodo(action) {
    if (action.payload.name.toLowerCase().includes('fake')) {
        action.payload.name = 'It\'s Truth not Fake';
    }
    // console.log(action);
    // console.log("addTodo Todo: ", action.payload);
    const response = yield call(postData, action.payload);
    console.log("addTodo response:", response);
    yield call(fetchTodoList, { payload: 1 });
}

export function* removeTodo(action) {
    yield console.log("deleteTodo");
    console.log(action.payload);
    const removeList = action.payload;
    let checkDelete;
    for (const item of removeList) {
        checkDelete = yield call(deleteData, item);
        if (checkDelete === "Update Failed!") break;
    }
}

export function* updateTodo(action) {
    yield console.log("updateTodo");
    const response = yield call(editData, action.payload.id, action.payload);
    console.log("updateTodo response:", response);
}

export function* toggleTodoStatus(action) {
    const response = yield call(editData, action.payload.id, action.payload);
    console.log("toggleTodo: ", response);
}

//watchers
function* watchFetchTodoList() {
    yield takeLatest(types.FETCH_TODO_LIST, fetchTodoList);
}

function* watchAddTodo() {
    yield takeEvery(types.ADD_TODO, addTodo);
}

function* watchDeleteTodo() {
    yield takeEvery(types.DELETE_TODO, removeTodo);
}

function* watchUpdateTodo() {
    yield takeEvery(types.EDIT_TODO, updateTodo);
}

function* watchToggleTodoStatus() {
    yield takeEvery(types.TOGGLE_TODO_STATUS, updateTodo)
}

export default function* rootSaga() {
    yield all([
        HelloSaga(),
        watchFetchTodoList(),
        watchAddTodo(),
        watchDeleteTodo(),
        watchUpdateTodo(),
        watchToggleTodoStatus(),
    ]);
}