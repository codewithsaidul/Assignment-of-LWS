const Products = () => {
  return (
    <div>
      {/* // <!-- products container --> */}
      <div className="productContainer" id="lws-productContainer">
        {/* <!-- product item --> */}
        <div className="lws-productCard">
          <img
            className="lws-productImage"
            src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product"
          />
          <div className="p-4 space-y-2">
            <h4 className="lws-productName">Spring and summershoes</h4>
            <p className="lws-productCategory">Mens shoes</p>
            <div className="flex items-center justify-between pb-2">
              <p className="productPrice">
                BDT <span className="lws-price">400</span>
              </p>
              <p className="productQuantity">
                QTY <span className="lws-quantity">10</span>
              </p>
            </div>
            <button className="lws-btnAddToCart">Add To Cart</button>
          </div>
        </div>
        {/* <!-- product item ends --> */}

        {/* <!-- product item --> */}
        <div className="lws-productCard">
          <img
            className="lws-productImage"
            src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product"
          />
          <div className="p-4 space-y-2">
            <h4 className="lws-productName">Women Winter Clothes</h4>
            <p className="lws-productCategory">Tops</p>
            <div className="flex items-center justify-between pb-2">
              <p className="productPrice">
                BDT <span className="lws-price">100</span>
              </p>
              <p className="productQuantity">
                QTY <span className="lws-quantity">30</span>
              </p>
            </div>
            <button className="lws-btnAddToCart">Add To Cart</button>
          </div>
        </div>
        {/* <!-- product item ends --> */}
      </div>
      {/* <!-- products container ends --> */}
    </div>
  );
};

export default Products;
