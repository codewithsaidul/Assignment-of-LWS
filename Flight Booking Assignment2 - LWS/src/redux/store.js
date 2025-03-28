import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);


export default store