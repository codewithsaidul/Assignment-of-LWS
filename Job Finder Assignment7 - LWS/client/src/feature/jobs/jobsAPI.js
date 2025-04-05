import axios from "../../utils/axios";



// ============================ Fetch All Jobs =========================
export const getAllJobs = async () => {
    const response = await axios.get("/jobs");
    return response
}


// ============================ Add New Job =========================
export const createNewJob = async (data) => {
    const response = await axios.post("/jobs", data);
    return response
}

// ============================ Edit Job Info =========================
export const updateJob = async (id, data) => {
    const response = await axios.put(`/jobs/${id}`, data);
    return response
}


// ============================ Delete Job =========================
export const removeJob = async (id) => {
    const response = await axios.delete(`/jobs/${id}`);
    return response
}