import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO_STATUS, FETCH_TODO_LIST } from "../actions/actionTypes";
// import todoApi from "../../api/todoApi";
// import { fetchTodoList } from "../actions/todoActions";

const initialState = {
    dataSource: [
        // { id: 1, name: "Learn React", completed: false, priority: "High" },
        // { id: 2, name: "Learn Redux", completed: true, priority: "Medium" },
        // { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
    ]
}

const todoReducer = (state = initialState, action) => {
    console.log({ state, action });
    switch (action.type) {
        case FETCH_TODO_LIST:
            return {
                ...state,
                dataSource: action.payload
            };
        case ADD_TODO:
            return {
                ...state,
                dataSource: [
                    ...state.dataSource,
                    action.payload
                ]
            };
        case DELETE_TODO:
            return {
                ...state,
                dataSource: state.dataSource.filter((todo) => todo.completed !== true)
            };
        case EDIT_TODO:
            const newData = action.payload;
            return {
                ...state,
                dataSource: state.dataSource.map((todo) => (todo.id === newData.id ? { ...todo, name: newData.name, priority: newData.priority } : todo))
            };
        case TOGGLE_TODO_STATUS:
            return {
                ...state,
                dataSource: state.dataSource.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo))
            }
        default: return state;
    }
}

export default todoReducer;

// Thunk functions
// export async function fetchTodos(dispatch) {
//     const response = await todoApi.get(1);
//     console.log("DataSource", response);
//     dispatch(fetchTodoList(response));
// }