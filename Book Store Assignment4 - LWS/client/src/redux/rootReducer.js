import { combineReducers } from "redux";
import bookReducer from "./books/bookReducer";
import fillterReducer from "./filter/filterReducer";
import searchReducer from "./searchBooks/searchReducer";



const rootReducer = combineReducers({
    books: bookReducer,
    fillter: fillterReducer,
    searchBooks: searchReducer
})


export default rootReducer