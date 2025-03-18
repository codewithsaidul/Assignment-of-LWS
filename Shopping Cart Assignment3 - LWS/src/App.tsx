import { useState } from "react";
import Header from "./component/header/Header";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";

function App() {
  const [page, setPage] = useState(window.location.pathname);
  return (
    <div>
      <Header setPage={setPage} />

      <div>
        {page === "/" && <Home />}
        {page === "/cart" && <Cart />}
      </div>
    </div>
  );
}

export default App;
