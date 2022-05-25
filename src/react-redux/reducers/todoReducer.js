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
                dataSource: dataSource.filter((todo) => todo.id !== action.payload)
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
            return { 
                ...state, 
                dataSource: [ 
                    ...state.dataSource, 
                    currentTodo
                ]
            };
        default: return state;
    }
}

export default todoReducer;