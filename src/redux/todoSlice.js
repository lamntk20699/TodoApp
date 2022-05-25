import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoList",
  initialState: {
    dataSource: [
      { id: 1, name: "Learn React", completed: false, priority: "High" },
      { id: 2, name: "Learn Redux", completed: true, priority: "Medium" },
      { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
    ]
  },
  reducers: {
    addTodo: (state, action) => {
      state.dataSource.push(action.payload);
    },
    deleteTodo: (state) => {
      state.dataSource = state.dataSource.filter((todo) => todo.completed !== true);
    },
    editTodo: (state, action) => {
      state.dataSource.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.name;
        }
      })
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.dataSource.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
});

//actions
export const { addTodo, deleteTodo, editTodo, toggleTodoStatus } = todoSlice.actions;

// //selectors
// export const todoListSelector = (state) => state.todoList;

//reducers
export default todoSlice.reducer;
