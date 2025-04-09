import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCards from "../../components/Home/BookCards";
import { filterBooks } from "../../features/booksFilter/filter";

const Home = () => {
  const { status } = useSelector(state => state.booksFilter)
  const dispatch = useDispatch();

  const handleStatus = (status) => {
    dispatch(filterBooks(status))
  }
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        {/* ======================== Home page header =================== */}
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button onClick={() => handleStatus("all")} className={`lws-filter-btn ${status === "all" && "active-filter"}`}>All</button>
            <button onClick={() => handleStatus("featured")} className={`lws-filter-btn ${status === "featured" && "active-filter"}`}>Featured</button>
          </div>
        </div>


        {/* ====================== Book Container =================== */}
        <div>
            <BookCards />
        </div>
      </div>
    </main>
  );
};

export default Home;
