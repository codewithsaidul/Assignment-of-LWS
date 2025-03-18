import { useEffect } from "react";

const Header = ({ setPage }: { setPage: (value: string) => void }) => {
  useEffect(() => {
    // Listen to browser navigation (Back/Forward)
    window.onpopstate = () => {
      setPage(window.location.pathname);
    };
  }, [setPage]);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path); // Change URL without reload
    setPage(path);
  };

  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="index.html">
            <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
          </a>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/")}
              className="navHome"
              id="lws-home"
            >
              {" "}
              Home{" "}
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="navCart"
              id="lws-cart"
            >
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">0</span>
            </button>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar ends --> */}
    </div>
  );
};

export default Header;
