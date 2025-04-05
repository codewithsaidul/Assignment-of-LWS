import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNewJob, getAllJobs, removeJob, updateJob } from "./jobsAPI";


const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: ''
}


// =============== Fetch All Jobs ====================
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
    const jobs = await getAllJobs();
    return jobs
})

// =============== Fetch All Jobs ====================
export const addJob = createAsyncThunk("jobs/addJob", async (data) => {
    const job = await createNewJob(data);
    return job
})

// =============== Fetch All Jobs ====================
export const editJob = createAsyncThunk("jobs/editJob", async ( { id, data } ) => {
    const job = await updateJob(id, data);
    return job
})

// =============== Fetch All Jobs ====================
export const deleteJob = createAsyncThunk("jobs/deleteJob", async (id) => {
    const job = await removeJob(id);
    return job
})


const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {}
})


export default jobsSlice.reducer