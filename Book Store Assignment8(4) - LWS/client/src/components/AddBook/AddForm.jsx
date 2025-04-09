import React, { useState } from "react";
import { useAddBookMutation } from "../../features/api/apiSlice";
import Error from "../../ui/Error";
import Success from "../../ui/Success";

const AddForm = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);
  const [AddBook, { isLoading, isError, isSuccess }] = useAddBookMutation();

  const resetForm = () => {
    setName("");
    setAuthor("");
    setThumbnail("");
    setPrice("");
    setRating("");
    setFeatured(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    AddBook({
      name,
      author,
      thumbnail,
      price,
      rating,
      featured,
    });
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="space-y-2">
        <label>Book Name</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-bookName"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label>Author</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label>Image Url</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label>Price</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label>Rating</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-rating"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="lws-featured"
          type="checkbox"
          name="featured"
          className="w-4 h-4"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)}
        />
        <label className="ml-2 text-sm"> This is a featured book </label>
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className="submit disabled:text-blue-300"
        id="lws-submit"
      >
        {isLoading ? "Processing..." : "Add Book"}
      </button>

      {isSuccess && (
        <div className="py-5">
          <Success message="Book Added Successfully" />
        </div>
      )}
      {isError && (
        <div className="py-5">
          <Error message="Something Went Wrong" />
        </div>
      )}
    </form>
  );
};

export default AddForm;
