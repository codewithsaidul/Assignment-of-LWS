import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    searchQuery: '',
    allJobs: "all",
    sortOption: ''
}




const jobFilterSlice = createSlice({
    name: "jobsfilter",
    initialState,
    reducers: {
        searchJobName: (state, action) => {
            state.searchQuery = action.payload
        },
        jobType: (state, action) => {
            state.allJobs = action.payload
        },
        sortByPrice: (state, action) => {
            state.sortOption = action.payload
        }
    }
})


export default jobFilterSlice.reducer;

export const { searchJobName, jobType, sortByPrice } = jobFilterSlice.actions