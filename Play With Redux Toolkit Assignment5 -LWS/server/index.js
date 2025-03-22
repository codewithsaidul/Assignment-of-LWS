const store = require("./rtk/store");
const fetchTags = require("./rtk/thunk/fetchTags");
const fetchVideo = require("./rtk/thunk/fetchVideo");





store.dispatch(fetchVideo()).then(() => store.dispatch(fetchTags()))