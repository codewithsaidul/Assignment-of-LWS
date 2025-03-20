import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/thunk/fetchBooks";
import Book from "./Book";

const BookList = () => {
  const books = useSelector(state => state.books.books)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchBooks)
  }, [dispatch])


  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button className="filter-btn active-filter" id="lws-filterAll">
            All
          </button>
          <button className="filter-btn" id="lws-filterFeatured">
            Featured
          </button>
        </div>
      </div>
      <div className="lws-bookContainer">
        {/* <!-- Card 1 --> */}
        {
          books.map(book => <Book key={book.id} book={book} />)
        }
      </div>
    </div>
  );
};

export default BookList;
