import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes: ["Books", "Book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: ["Books"],
    }),
    getBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => [
        {
          type: "Book",
          id: arg,
        },
      ],
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Books",
        { type: "Book", id: arg.id },
      ],
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        "Books",
        { type: "Book", id: arg },
      ],
    }),
  }),
});

export const { useGetBooksQuery, useGetBookQuery, useAddBookMutation, useEditBookMutation, useDeleteVideoMutation } = apiSlice;
