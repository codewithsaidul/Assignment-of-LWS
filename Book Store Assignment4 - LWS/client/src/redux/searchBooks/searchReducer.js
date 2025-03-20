import { SEARCHBOOKS } from "./actionTypes";

const initialState = {
  query: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHBOOKS:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
