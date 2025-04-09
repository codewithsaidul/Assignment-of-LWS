import React from "react";
import { useParams } from "react-router-dom";
import EditForm from "../../components/EditBook/EditForm";
import { useGetBookQuery } from "../../features/api/apiSlice";

const EditBook = () => {

  const { bookId } = useParams()
  const { data: book, isLoading, isError } = useGetBookQuery(bookId);

 
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
  
    if (!isLoading && !isError && !book?.id) {
      content = (
        <div>
          <p className="text-xl">Book not fount!</p>
        </div>
      );
    }
  
  
    if (!isLoading && !isError && book?.id) {
      content = <EditForm book={book} />
    }

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>



          {content}
        </div>
      </div>
    </main>
  );
};

export default EditBook;
