import AddProducts from "../../component/home/AddProducts";
import Products from "../../component/home/Products";

const Home = () => {
  return (
    <main className="py-16">
      <div className="productWrapper">
        <Products />
        <AddProducts />
      </div>
    </main>
  );
};

export default Home;
