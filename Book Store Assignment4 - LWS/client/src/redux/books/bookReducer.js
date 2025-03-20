import { ADDED, DELETED, LOADED, SEARCHBOOKS, UPADTED } from "./actionTypes";

const initialState = {
    books: [],
    selectedBook: {
        name: "saidul",
        age: 23,
        phone: "01763079580",
        occupation: "bekar"
    }
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return {
        ...state,
        books: action.payload
      };
    case ADDED:
        return {
            ...state,
            books: [...state.books, ...action.payload]
        }
    case UPADTED:
        return state.map(book => {
            book.id === action.payload.bookId ? {...book, selectedBook: action.payload} : book
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
