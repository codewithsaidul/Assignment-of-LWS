import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/Blogs/blogsSlice';


export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});
