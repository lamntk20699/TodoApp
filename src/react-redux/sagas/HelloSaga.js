import todoApi from "../../api/todoApi";
import { put, call, fork, all, takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from "../actions/actionTypes";
// import axios from "axios";

export function* HelloSaga() {
    yield console.log("Hello Saga!!!");
}

//Async functions
async function fetchData(todoID) {
    const response = await todoApi.get(todoID);
    return response;
}

async function postData(data) {
    const response = await todoApi.postTodo(1, data);
    return response;
}

async function deleteData(todoID) {
    const response = await todoApi.deleteTodo(1, todoID);
    console.log(response);
    return response;
}

async function editData(todoID, data) {
    const response = await todoApi.editTodo(1, todoID, data);
    return response;
}

//workers
export function* fetchTodoList(action) {
    const response = yield call(fetchData, action.payload);
    console.log("fetchTodoList: ", response);
    yield put({ type: types.SET_TODO_LIST, payload: response });
}

export function* addTodo(action) {
    if (action.payload.name === 'fake') {
        action.payload.name = 'truth';
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
    console.log(Array.isArray(removeList));
    for (const item of removeList) {
        yield call(deleteData, item);
    }
}

export function* updateTodo(action) {
    yield console.log("updateTodo");
    const response = yield call(editData, action.payload.id, action.payload);
    console.log("updateTodo response:", response);
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

export default function* rootSaga() {
    yield all([
        HelloSaga(),
        watchFetchTodoList(),
        watchAddTodo(),
        watchDeleteTodo(),
        watchUpdateTodo(),
    ]);
}