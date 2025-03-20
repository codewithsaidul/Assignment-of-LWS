import { ADDPRODUCT, ADDTOCART, REMOVEFROMCART } from "./actionTypes";

const initialState = [];

const nextTodoId = (product: { id: number }[]): number => {
  const maxId = product.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (
  state = initialState,
  action: {
    type: never;
    payload: {
      productId: never;
      name: never;
      category: never;
      image: never;
      price: never;
      quantity: never;
    };
  }
) => {
  switch (action.type) {
    case ADDPRODUCT:
      return [
        ...state,
        {
          id: nextTodoId(state),
          name: action.payload.name,
          category: action.payload.category,
          image: action.payload.image,
          price: action.payload.price,
          quantity: action.payload.quantity,
        },
      ];
    case ADDTOCART:
      return state.map((product) => {
        if (product?.id !== action.payload) {
          return product;
        }
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      });
    case REMOVEFROMCART:
      return state.map((product) => {
        if (product?.id !== action.payload.productId) {
          return product;
        }
        return {
          ...product,
          quantity: product.quantity + action.payload.quantity,
        };
      });
    default:
      return state;
  }
};

export default reducer;
