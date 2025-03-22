const { createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch")

const fetchTags = createAsyncThunk("vidoes/fetchTags", async(_, {getState}) => {


    const tags = getState().video.video.tags;
    const query = tags.map(tag => `tags_like=${tag}`).join("&")
    const response = await fetch(`http://localhost:9000/videos?${query}`)
    const videos = response.json()


    return videos
})





module.exports = fetchTags