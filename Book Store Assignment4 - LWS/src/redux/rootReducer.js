import { combineReducers } from "redux";
import bookReducer from "./books/bookReducer";
import fillterReducer from "./filter/filterReducer";



const rootReducer = combineReducers({
    books: bookReducer,
    fillter: fillterReducer
})


export default rootReducer