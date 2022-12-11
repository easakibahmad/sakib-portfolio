import React from "react";
import { useLoaderData } from "react-router-dom";
import BookDetail from "../../components/bookDetail/BookDetail";

const Book = () => {
  const bookData = useLoaderData();
  return (
    <div>
      {bookData.map((item) => (
        <BookDetail key={item.id} item={item}></BookDetail>
      ))}
    </div>
  );
};

export default Book;
