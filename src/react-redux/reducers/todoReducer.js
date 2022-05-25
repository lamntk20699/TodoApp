import {ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO_STATUS} from "../actions/actionTypes";

const initialState = {
    dataSource: [
      { id: 1, name: "Learn React", completed: false, priority: "High" },
      { id: 2, name: "Learn Redux", completed: true, priority: "Medium" },
      { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
    ]
  }

const todoReducer = (state = initialState, action) => {
    console.log({state, action});
    switch (action.type) {
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
            return { 
                ...state, 
                dataSource: [ 
                    ...state.dataSource, 
                    action.payload 
                ]
            };
        case TOGGLE_TODO_STATUS: 
            const currentTodo = state.dataSource.find((todo) => todo.id === action.payload);
            currentTodo.completed = !currentTodo.completed;
            return state;
        default: return state;
    }
}

export default todoReducer;