import { useGetBooksQuery } from "../../features/api/apiSlice";
import Error from "../../ui/Error";
import BookCard from "./BookCard";

const BookCards = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();

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
    content = books.map(book => <BookCard key={book.id} book={book} />)
  }

  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
};

export default BookCards;
