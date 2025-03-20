import {
  ADDCART,
  CARTDECREMENT,
  CARTINCREMENT,
  DELETECART,
} from "./actionTypes";

const initialState = [];

const nextTodoId = (product: { id: number }[]): number => {
  const maxId = product.reduce(
    (maxId: number, todo: { id: number }) => Math.max(todo.id, maxId),
    -1
  );
  return maxId + 1;
};

const cartReducer = (
  state = initialState,
  action: {
    type: never;
    payload: {
      id: never;
      name: never;
      category: never;
      image: never;
      price: never;
      quantity: never;
    };
  }
) => {
  switch (action.type) {
    case ADDCART: {
      console.log(action.payload);
      const updatedCart = state.map((product) =>
        product.productId === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      const isExistingProduct = state.some(
        (product) => product.productId === action.payload.id
      );

      return isExistingProduct
        ? updatedCart
        : [
            ...state,
            {
              id: nextTodoId(state),
              productId: action.payload.id,
              name: action.payload.name,
              category: action.payload.category,
              image: action.payload.image,
              price: action.payload.price,
              quantity: 1,
            },
          ];
    }

    case CARTINCREMENT:
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    case CARTDECREMENT:
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    case DELETECART:
      return state.filter((cart) => cart?.id !== action.payload);

    default:
      return state;
  }
};

export default cartReducer;
