const { createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch")

const fetchVideo = createAsyncThunk("vidoes/fetchVideo", async() => {
    const response = await fetch("http://localhost:9000/videos");

    const video = await response.json();

    return video
})





module.exports = fetchVideo