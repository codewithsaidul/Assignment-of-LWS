import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/addProduct/action";
import { addCart } from "../../redux/cart/action";
import { RootState } from "../../redux/rootReducer";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
}
const Products = () => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const handleAddCart = (product: Product) => {
    dispatch(addCart(product));
    dispatch(addToCart(product.id));
  };

  return (
    <div>
      {/* // <!-- products container --> */}
      <div className="productContainer" id="lws-productContainer">
        {/* <!-- product item --> */}
        {products.length > 0 &&
          products.map((product: Product) => (
            <div key={product.id} className="lws-productCard">
              <img
                className="lws-productImage"
                src={product.image}
                alt="product"
              />
              <div className="p-4 space-y-2">
                <h4 className="lws-productName">{product.name}</h4>
                <p className="lws-productCategory">{product.category}</p>
                <div className="flex items-center justify-between pb-2">
                  <p className="productPrice">
                    BDT <span className="lws-price">{product.price}</span>
                  </p>
                  <p className="productQuantity">
                    QTY <span className="lws-quantity">{product.quantity}</span>
                  </p>
                </div>
                <button
                  onClick={() => handleAddCart(product)}
                  className="lws-btnAddToCart"
                  disabled={product.quantity <= 0}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        {/* <!-- product item ends --> */}
      </div>
      {/* <!-- products container ends --> */}
    </div>
  );
};

export default Products;
