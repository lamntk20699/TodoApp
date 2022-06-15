import * as types from "../actions/actionTypes";
// import todoApi from "../../api/todoApi";
// import { fetchTodoList } from "../actions/todoActions";
import { Map, List, fromJS } from "immutable";

const initialState = fromJS({
    todoList: [
        { id: 1, name: "Learn React", completed: false, priority: "High" },
        // { id: 2, name: "Learn Redux", completed: true, priority: "Medium" },
        // { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
    ]
})

let newList;

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TODO_LIST:
            // return {
            //     ...state,
            //     todoList: action.payload
            // };

            return state.set('todoList', fromJS(action.payload));
        case types.ADD_TODO:
            // return {
            //     ...state,
            //     todoList: [
            //         ...state.todoList,
            //         action.payload
            //     ]
            // };

            // updateData = dataSource.get('todoList').push(fromJS(action.payload));
            newList = state.get('todoList').push(action.payload);
            return state.set('todoList', newList);
        case types.DELETE_TODO:
            // return {
            //     ...state,
            //     todoList: state.todoList.filter((todo) => !action.payload.includes(todo.id))
            // };
            newList = state.get('todoList').filter(item => !action.payload.includes(item.get('id')));
            return state.set('todoList', newList);
        case types.EDIT_TODO:
            const newData = action.payload;
            // return {
            //     ...state,
            //     todoList: state.todoList.map((todo) => (todo.id === newData.id ? { ...todo, name: newData.name, priority: newData.priority } : todo))
            // };
            newList = state.get('todoList').map((todo) => (todo.get('id') === newData.id ? todo.set('name', newData.name).set('priority', newData.priority) : todo));
            return state.set('todoList', newList);
        case types.TOGGLE_TODO_STATUS:
            // return {
            //     ...state,
            //     todoList: state.todoList.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo))
            // }
            newList = state.get('todoList').map((todo) => (todo.get('id') === action.payload ? todo.set('completed', !todo.get('completed')) : todo));
            return state.set('todoList', newList);
        default: return state;
    }
}

export default todoReducer;

// Thunk functions
// export async function fetchTodos(dispatch) {
//     const response = await todoApi.get(1);
//     console.log("todoList", response);
//     dispatch(fetchTodoList(response));
// }