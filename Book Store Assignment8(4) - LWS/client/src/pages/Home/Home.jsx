import React from "react";
import BookCards from "../../components/Home/BookCards";

const Home = () => {
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        {/* ======================== Home page header =================== */}
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button className="lws-filter-btn active-filter">All</button>
            <button className="lws-filter-btn">Featured</button>
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
