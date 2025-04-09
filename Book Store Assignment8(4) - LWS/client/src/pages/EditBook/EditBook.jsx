import React from "react";
import EditForm from "../../components/EditBook/EditForm";

const EditBook = () => {
  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>



          <EditForm />
        </div>
      </div>
    </main>
  );
};

export default EditBook;
