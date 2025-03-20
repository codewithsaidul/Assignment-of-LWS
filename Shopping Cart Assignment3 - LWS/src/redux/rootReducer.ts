import { combineReducers } from "redux";
import productReducer from "./addProduct/reducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cartsProduct: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
