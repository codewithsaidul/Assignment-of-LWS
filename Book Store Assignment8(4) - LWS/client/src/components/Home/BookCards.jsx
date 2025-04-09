import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import Error from "../../ui/Error";
import BookCard from "./BookCard";

const BookCards = () => {
  const { data: books = [], isLoading, isError } = useGetBooksQuery();
  const { status, searchValue } = useSelector(state => state.booksFilter)


  // filter featured books

  const filterBooks = (books) => {
    let bookFilters = books;

    bookFilters = books.filter(book => {
     return book?.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    if (status !== "all") {
     return bookFilters = books.filter(book => book.featured)
    }

    return bookFilters
  }


  const newFilteredBooks = filterBooks(books)

  let content = null;

  if (isLoading) {
    content = (
      <div className="py-10 px-6">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && books.length === 0) {
    content = (
      <div>
        <p className="text-xl">Books not fount!</p>
      </div>
    );
  }


  if (!isLoading && !isError && books.length !== 0) {
    content = newFilteredBooks.map(book => <BookCard key={book.id} book={book} />)
  }

  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
};

export default BookCards;
