import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBook from "../redux/thunk/addBook";
import fetchBooks from "../redux/thunk/fetchBooks";
import updateBook from "../redux/thunk/updateBook";

const AddBook = () => {
  const selectedBook = useSelector((state) => state.books.selectedBook);
  const [book, setBook] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedBook) {
      setBook(selectedBook);
    }
  }, [selectedBook]);

  const handleCheckboxChange = () => {
    setBook((prevBook) => ({
      ...prevBook,
      featured: !prevBook.featured, // আগের স্টেটের বিপরীতে টগল করবে
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBook((prevBook) => ({
      ...prevBook,
      [name]:
        name === "price" || name === "rating"
          ? value === ""
            ? ""
            : Number(value) // ফাঁকা হলে "" রাখবে, নাহলে নাম্বার করবে
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedBook) {
      dispatch(updateBook(book));
      dispatch(fetchBooks());
    } else {
      dispatch(addBook(book)); // ফর্ম সাবমিট হলে কনসোলে বই দেখাও
    }

    // 📌 সাবমিট হওয়ার পর ফর্ম রিসেট
    setBook({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form onSubmit={handleSubmit} className="book-form">
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={book.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={book.author}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={book.thumbnail}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={book.price}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={book.rating}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              checked={book.featured}
              onChange={handleCheckboxChange}
              className="w-4 h-4"
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            {selectedBook ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
