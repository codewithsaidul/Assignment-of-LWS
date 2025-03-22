const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const videoSlice = require("./feature/vidoes/videoSlice");


const logger = createLogger()

const store = configureStore({
    reducer: {
        video: videoSlice
    },
    middleware: (getMiddleware) => getMiddleware().concat(logger)
})

store.subscribe(() => {
    // console.log(store.getState().video.videos)
})


module.exports = store


