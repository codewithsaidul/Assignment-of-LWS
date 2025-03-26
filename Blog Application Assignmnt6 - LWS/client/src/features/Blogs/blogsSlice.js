import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import fetchBlogs from './blogAPI'


const initialState = {
    blogs: [],
    isLoading: false,
    isError: false,
    error: ''
}


export const fetchBlogsAsync = createAsyncThunk("blogs/fetchBlogs", async () => {
    const blogs = await fetchBlogs()
    return blogs
})


const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBlogsAsync.pending, (state) => {
            state.isError = false,
            state.isLoading = true
        })
        .addCase(fetchBlogsAsync.fulfilled, (state, action) => {
            state.isError = false,
            state.isLoading = false,
            state.blogs = action.payload
        })
        .addCase(fetchBlogsAsync.rejected, (state, action) => {
            state.isError = true,
            state.isLoading = false,
            state.blogs = [],
            state.error = action.error?.message
        })
    }
})


export default blogsSlice.reducer