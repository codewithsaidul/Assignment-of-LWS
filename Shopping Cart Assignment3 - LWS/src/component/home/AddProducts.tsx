import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/addProduct/action";

const AddProducts = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const name = form.name.value;
    const category = form.category.value;
    const image = form.image.value;
    const price = form.price.value;
    const quantity = form.quantity.value;

    const products = { name, category, image, price, quantity };

    dispatch(addProduct(products));
  };

  return (
    <div>
      {/* <!-- Product Input Form --> */}
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
        >
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              name="name"
              required
            />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              name="category"
              required
            />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              name="image"
              required
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                name="price"
                required
              />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                name="quantity"
                required
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
      {/* <!-- Product Input Form Ends --> */}
    </div>
  );
};

export default AddProducts;
