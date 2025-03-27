import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectOption: "",
  selectedCheckbox: "all",
};

const filterBlogsSlice = createSlice({
  name: "filterBlog",
  initialState,
  reducers: {
    filterBlog: (state, action) => {
      state.selectedCheckbox = action.payload;
    },
    sortBlog: (state, action) => {
      state.selectOption = action.payload;
    },
  },
});

export default filterBlogsSlice.reducer;
export const { filterBlog, sortBlog } = filterBlogsSlice.actions;
