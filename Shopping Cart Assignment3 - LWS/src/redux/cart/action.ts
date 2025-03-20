import {
  ADDCART,
  CARTDECREMENT,
  CARTINCREMENT,
  DELETECART,
} from "./actionTypes";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
}

export const addCart = (product: Product) => {
  return {
    type: ADDCART,
    payload: product,
  };
};

export const deleteCart = (productId: number) => {
  return {
    type: DELETECART,
    payload: productId,
  };
};

export const cartItemIncrement = (productId: number) => {
  return {
    type: CARTINCREMENT,
    payload: productId,
  };
};

export const cartItemDecrement = (productId: number) => {
  return {
    type: CARTDECREMENT,
    payload: productId,
  };
};
