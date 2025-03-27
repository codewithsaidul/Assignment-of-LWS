import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import fetchRelatedBlogs from './relatedBlogsAPI'


const initialState = {
    relatedBlogs: [],
    isLoading: false,
    isError: false,
    error: ''
}


export const fetchRelatedBlogsAsync = createAsyncThunk("relatedBlogs/fetchRelatedBlogs", async ({ currentId, tags }) => {
    const relatedBlogs = await fetchRelatedBlogs({ currentId, tags })
    return relatedBlogs
})


const relatedBlogsSlice = createSlice({
    name: "relatedBlogs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchRelatedBlogsAsync.pending, (state) => {
            state.isError = false,
            state.isLoading = true
        })
        .addCase(fetchRelatedBlogsAsync.fulfilled, (state, action) => {
            state.isError = false,
            state.isLoading = false,
            state.relatedBlogs = action.payload
        })
        .addCase(fetchRelatedBlogsAsync.rejected, (state, action) => {
            state.isError = true,
            state.isLoading = false,
            state.relatedBlogs = [],
            state.error = action.error?.message
        })
    }
})


export default relatedBlogsSlice.reducer