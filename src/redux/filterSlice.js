import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    searchText: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilterChanged: (state, action) => {
      state.searchText = action.payload;
    },
    statusFilterChanged: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChanged: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

//actions
export const {
  searchFilterChanged,
  statusFilterChanged,
  prioritiesFilterChanged,
} = filterSlice.actions;

// //selectors
// export const searchTextSelector = (state) => state.filters.search;

//reducers
export default filterSlice.reducer;
