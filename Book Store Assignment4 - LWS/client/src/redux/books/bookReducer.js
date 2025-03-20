import { ADDED, DELETED, LOADED, SEARCHBOOKS, UPADTED } from "./actionTypes";

const initialState = {
  books: [],
  selectedBook: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;
    case ADDED:
        return {
            ...state,
            books: [...state.books, ...action.payload]
        }
    case UPADTED:
        return state.map(book => {
            book.id === action.payload.bookId ? {...book, books: action.payload} : book
        })
    case SEARCHBOOKS:
        return state.map(book => book.name === action.payload)
    case DELETED:
        return state.filter(book => book.id !== action.payload)
    default:
      return state;
  }
};


export default bookReducer
