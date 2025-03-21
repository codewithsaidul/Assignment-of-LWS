import { ADDED, DELETED, EDITED, LOADED, UPADTED } from "./actionTypes";

const initialState = {
  books: [],
  selectedBook: null
};

const nextBookId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
  return maxId + 1;
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return {
        ...state,
        books: action.payload,
      };
    case ADDED: {
      const newBook = {
        ...action.payload,
        id: nextBookId(state.books),
      };
      return {
        ...state,
        books: [...state.books, newBook],
      };
    }
    case EDITED:
      return {
        ...state,
        selectedBook: action.payload
      }
    case UPADTED:
      return {
        ...state,
        books: state.books.map(book =>
          book.id === action.payload.id ? action.payload : book
        ),
        selectedBook: null, // আপডেটের পর ফর্ম রিসেট
      };
    case DELETED:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      }
    default:
      return state;
  }
};

export default bookReducer;
