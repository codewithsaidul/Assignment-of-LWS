import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../features/Blog/blogSlice';
import blogsReducer from '../features/Blogs/blogsSlice';
import relatedBlogsReducer from '../features/RelatedBlogs/relatedBlogsSlice';
import filterBlogsReducer from '../features/filterBlogs/filterBlogsSlice';


export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedBlogs: relatedBlogsReducer,
    filterBlogs: filterBlogsReducer,
  },
});
