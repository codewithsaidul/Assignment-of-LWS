import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNewJob, getAllJobs, removeJob, updateJob } from "./jobsAPI";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// =============== Fetch All Jobs ====================
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const jobs = await getAllJobs();
  return jobs;
});

// =============== Fetch All Jobs ====================
export const addJob = createAsyncThunk("jobs/addJob", async (data) => {
  const job = await createNewJob(data);
  return job;
});

// =============== Fetch All Jobs ====================
export const editJob = createAsyncThunk(
  "jobs/editJob",
  async ({ id, data }) => {
    const job = await updateJob(id, data);
    return job;
  }
);

// =============== Fetch All Jobs ====================
export const deleteJob = createAsyncThunk("jobs/deleteJob", async (id) => {
  const job = await removeJob(id);
  return job;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.jobs = {};
        state.error = action.error?.message;
      })
      .addCase(addJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs.push(action.payload);
      })
      .addCase(addJob.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
      .addCase(editJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        const indexToUpdate = state.jobs.findIndex(job => job.id === action.payload.id)
        state.jobs[indexToUpdate] = action.payload
      })
      .addCase(editJob.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
      .addCase(deleteJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs = state.jobs.filter(job => job.id !== action?.meta?.arg)
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
  },
});

export default jobsSlice.reducer;
