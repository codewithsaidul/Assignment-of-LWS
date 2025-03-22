const { createSlice } = require("@reduxjs/toolkit");
const fetchVideo = require("../../thunk/fetchVideo");
const fetchTags = require("../../thunk/fetchTags");

const initialState = {
  video: {},
  videos: [],
  loading: false,
  Error: "",
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {}, // You can add your reducers here if needed
  extraReducers: (builder) => {
    builder.addCase(fetchVideo.pending, (state) => {
      state.loading = true;
      (state.Error = ""), (state.video = {}), (state.videos = []);
    });
    builder.addCase(fetchVideo.fulfilled, (state, action) => {
      (state.loading = false),
        (state.Error = ""),
        (state.video = action.payload),
        (state.videos = []);
    });
    builder.addCase(fetchVideo.rejected, (state, action) => {
      (state.loading = false),
        (state.Error = action.error.message),
        (state.video = {}),
        (state.videos = []);
    });
    builder.addCase(fetchTags.pending, (state) => {
      state.loading = true;
      (state.Error = ""),(state.videos = []);
    });
    builder.addCase(fetchTags.fulfilled, (state, action) => {
    //   console.log("Fetched Tags:", action.payload);
      state.loading = false;
      state.Error = "";
      state.videos = action.payload.sort((a, b) => {
        // স্ট্রিং 'views' প্রপার্টিকে সংখ্যায় রূপান্তর
        const viewsA = parseFloat(a.views.replace(/,/g, ""));
        const viewsB = parseFloat(b.views.replace(/,/g, ""));
        return viewsB - viewsA; // অবতরণ ক্রমে সাজানো
      });
    });
    builder.addCase(fetchTags.rejected, (state, action) => {
      (state.loading = false),
        (state.Error = action.error.message),
        (state.video = {}),
        (state.videos = []);
    });
  },
});

module.exports = videoSlice.reducer;
