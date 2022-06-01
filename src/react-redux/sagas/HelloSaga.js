import todoApi from "../../api/todoApi";
import { put, call, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { ADD_TODO, DELETE_TODO, FETCH_TODO_LIST, SET_TODO_LIST } from "../actions/actionTypes";
// import axios from "axios";

function* HelloSaga() {
    yield console.log("Hello Saga!!!");
}

// async function fetchData(todoID) {
//     const response = await todoApi.get(todoID);
//     return response;
// }

async function postData(data) {
    const response = await todoApi.postTodo(1, data);
    return response;
}

async function deleteData(params) {
    const response = await todoApi.deleteTodo(1, params);
    return response;
}

//workers
function* fetchTodoList(action) {
    // const response = yield call(fetchData, action.payload);
    const response = yield call(todoApi.get, action.payload);
    console.log("fetchTodoList: ", response);
    yield put({ type: SET_TODO_LIST, payload: response });
}

function* addTodo(action) {
    if (action.payload.name === 'fake') {
        action.payload.name = 'truth2';
    }
    console.log(action);
    console.log("addTodo Todo: ", action.payload);
    // const response = todoApi.putTodo(1, action.payload.id, action.payload);
    const response = yield call(postData, action.payload);
    yield console.log("addTodo response:", response);
    // yield call(todoApi.putTodo, 1, action.payload);
}

function* deleteTodo(action) {
    yield console.log("deleteTodo");
    console.log(action.payload);
    const params = { id: ['26', '27'] }
    const response = yield call(deleteData, params);
    // action.payload.forEach((item) => {
    //     let response = yield call(deleteData, item);
    // })
    console.log(response);
}

//watchers
function* watchFetchTodoList() {
    yield takeLatest(FETCH_TODO_LIST, fetchTodoList);
}

function* watchAddTodo() {
    yield takeEvery(ADD_TODO, addTodo);
}

function* watchDeleteTodo() {
    yield takeEvery(DELETE_TODO, deleteTodo)
}

export default function* rootSaga() {
    yield all([
        HelloSaga(),
        watchFetchTodoList(),
        watchAddTodo(),
        watchDeleteTodo(),
    ]);
}