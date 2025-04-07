import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../feature/filter/jobsFilter.js";
import jobsReducer from "../feature/jobs/jobsSlice.js";


const store = configureStore({
    reducer: {
        jobs:jobsReducer,
        jobsFilter: filterReducer
    }
})


export default store