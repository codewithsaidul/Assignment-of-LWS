import { ADDED, DELETED, LOADED, UPADTED } from "./actionTypes";

const initialState = {
  books: [],
  selectedBook: {
    name: "saidul",
    age: 23,
    phone: "01763079580",
    occupation: "bekar",
  },
};

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
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
        id: nextTodoId(state.books),
      };
      return {
        ...state,
        books: [...state.books, newBook],
      };
    }
    case UPADTED:
      return state.map((book) => {
        book.id === action.payload.bookId
          ? { ...book, selectedBook: action.payload }
          : book;
      });
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
