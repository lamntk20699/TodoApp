import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn React", completed: true, priority: "High" },
    { id: 2, name: "Learn Redux", completed: true, priority: "Medium" },
    { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state = state.filter((item) => item.id !== action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currenTodoIndex = state.findIndex(
        (todo) => todo.id === action.payload
      );
      state[currenTodoIndex].completed = !state[currenTodoIndex].completed;
    },
  },
});

//actions
export const { addTodo, deleteTodo, toggleTodoStatus } = todoSlice.actions;

// //selectors
// export const todoListSelector = (state) => state.todoList;

//reducers
export default todoSlice.reducer;
