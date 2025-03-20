import { FEATUREDBOOKS } from "./actionTypes";

const initialState = {
  status: "all",
};

const fillterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEATUREDBOOKS:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export default fillterReducer;
