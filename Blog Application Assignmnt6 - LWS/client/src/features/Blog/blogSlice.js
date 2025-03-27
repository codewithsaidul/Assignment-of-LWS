import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import fetchBlog from './blogAPI'
import fetchUpdateBlog from './updateBlogAPI'


const initialState = {
    blog: {},
    isLoading: false,
    isError: false,
    error: ''
}


export const fetchBlogAsync = createAsyncThunk("blog/fetchBlog", async (id) => {
    const blog = await fetchBlog(id)
    return blog
})

export const fetchUpdateBlogAsync = createAsyncThunk("updateblog/fetchUpdateBlog", async (blog) => {
    const updateBlog = await fetchUpdateBlog(blog)
    return updateBlog
})


const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBlogAsync.pending, (state) => {
            state.isError = false,
            state.isLoading = true
        })
        .addCase(fetchBlogAsync.fulfilled, (state, action) => {
            state.isError = false,
            state.isLoading = false,
            state.blog = action.payload
        })
        .addCase(fetchBlogAsync.rejected, (state, action) => {
            state.isError = true,
            state.isLoading = false,
            state.blog = {},
            state.error = action.error?.message
        })
        .addCase(fetchUpdateBlogAsync.fulfilled, (state, action) => {
            state.isError =false;
            state.isLoading = false,
            state.blog = action.payload
        })
    }
})


export default blogSlice.reducer