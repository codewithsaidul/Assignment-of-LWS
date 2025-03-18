import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              <FontAwesomeIcon
                icon={faBagShopping}
                className="text-lg fa-sharp fa-solid fa-bag-shopping"
              />
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
