import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../../redux/addProduct/action";
import {
  cartItemDecrement,
  cartItemIncrement,
  deleteCart,
} from "../../redux/cart/action";
import { RootState } from "../../redux/rootReducer";

interface Product {
  id: number;
  productId: number;
  name: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
}

const Carts = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) => state.cartsProduct);
  const products = useSelector((state: RootState) => state.products);

  const handleCartItem = (Id: number, productId: number, type: string) => {
    if (type === "increment") {
      // const item = cartItem.find((item) => item.id === Id);
      const productItem = products.find((item) => item.id === productId);
      console.log(productItem);

      if (productItem.quantity === 0) {
        alert("stock out");
      } else {
        dispatch(cartItemIncrement(productId));
        dispatch(addToCart(productId));
      }
    } else if (type === "decrement") {
      const item = cartItem.find((item) => item.id === productId);

      if (item.quantity === 1) {
        dispatch(deleteCart(Id));
        dispatch(removeToCart(Id, 1));
      } else {
        dispatch(cartItemDecrement(Id));
        dispatch(removeToCart(Id, 1));
      }
    } else {
      console.warn(`Invalid cart action type: ${type}`);
    }
  };

  const handleDelete = (id: number, productId: number, quantity: number) => {
    dispatch(deleteCart(id));
    dispatch(removeToCart(productId, quantity));
  };

  return (
    <div className="space-y-6">
      {/* <!-- Cart Item --> */}
      {cartItem.length > 0 &&
        cartItem.map((product: Product) => (
          <div key={product.id} className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
              {/* <!-- cart image --> */}
              <img
                className="lws-cartImage"
                src={product.image}
                alt="product"
              />
              {/* <!-- cart item info --> */}
              <div className="space-y-2">
                <h4 className="lws-cartName">{product.name}</h4>
                <p className="lws-cartCategory">{product.category}</p>
                <p>
                  BDT <span className="lws-cartPrice">{product.price}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
              {/* <!-- amount buttons --> */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() =>
                    handleCartItem(product.id, product.productId, "increment")
                  }
                  className="lws-incrementQuantity"
                >
                  <FontAwesomeIcon icon={faPlus} className="text-lg" />
                </button>
                <span className="lws-cartQuantity">{product.quantity}</span>
                <button
                  onClick={() =>
                    handleCartItem(product.id, product.productId, "decrement")
                  }
                  className="lws-decrementQuantity"
                >
                  <FontAwesomeIcon icon={faMinus} className="text-lg" />
                </button>
              </div>
              {/* <!-- price --> */}
              <p className="text-lg font-bold">
                BDT{" "}
                <span className="lws-calculatedPrice">
                  {product.quantity * product.price}
                </span>
              </p>
            </div>
            {/* <!-- delete button --> */}
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
              <button
                onClick={() =>
                  handleDelete(product.id, product.productId, product.quantity)
                }
                className="lws-removeFromCart"
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-lg text-red-400"
                />
              </button>
            </div>
          </div>
        ))}
      {/* <!-- Cart Items Ends --> */}
    </div>
  );
};

export default Carts;
