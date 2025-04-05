import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../feature/jobs/jobsSlice.js";


const store = configureStore({
    reducer: {
        jobs:jobsReducer
    }
})


export default store