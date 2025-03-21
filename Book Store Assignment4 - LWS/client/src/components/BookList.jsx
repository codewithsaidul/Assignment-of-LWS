import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featuredBooks } from "../redux/filter/action";
import fetchBooks from "../redux/thunk/fetchBooks";
import Book from "./Book";

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const fillter = useSelector((state) => state.fillter);
  const query = useSelector((state) => state.searchBooks.query);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleFeaturedStatus = (status) => {
    dispatch(featuredBooks(status));
  };

  const fillterFeaturd = (book) => {
    const { status } = fillter;

    switch (status) {
      case "all":
        return book;
      case "featured":
        return book.featured;
      default:
        return true;
    }
  };

  const filterBySearch = (book) => book.name.toLowerCase().includes(query.toLowerCase());


  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleFeaturedStatus("all")}
            className={`filter-btn ${
              fillter.status === "all" && "active-filter"
            }`}
            id="lws-filterAll"
          >
            All
          </button>
          <button
            onClick={() => handleFeaturedStatus("featured")}
            className={`filter-btn ${
              fillter.status === "featured" && "active-filter"
            }`}
            id="lws-filterFeatured"
          >
            Featured
          </button>
        </div>
      </div>
      <div className="lws-bookContainer">
        {/* <!-- Card 1 --> */}
        {books
          .filter(filterBySearch)
          .filter(fillterFeaturd)
          .map((book) => (
            <Book key={book.id} book={book} />
          ))}
      </div>
    </div>
  );
};

export default BookList;
