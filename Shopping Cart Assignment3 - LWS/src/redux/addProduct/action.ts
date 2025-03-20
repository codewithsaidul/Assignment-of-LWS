import { ADDPRODUCT, ADDTOCART, REMOVEFROMCART } from "./actionTypes";

interface Product {
  name: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
}

export const addProduct = (product: Product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};

export const addToCart = (productId: number) => {
  return {
    type: ADDTOCART,
    payload: productId,
  };
};

export const removeToCart = (productId: number, quantity: number) => {
  return {
    type: REMOVEFROMCART,
    payload: {
      productId,
      quantity,
    },
  };
};
