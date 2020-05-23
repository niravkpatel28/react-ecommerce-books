//render the book card with its image author name and price
// also add a button of counter to add or subtract imagee

import React from "react";
import "./bookCard.style.css";
const BookCard = ({ book, onClick }) => {
  // console.log("sent book ", book);
  return (
    <div
      className="bookCard"
      onClickCapture={() => {
        onClick(book.isbn);
      }}
    >
      <h4> {book.title} </h4>

      <img className="bookImage" src={book.thumbnailUrl} alt="thumbnail" />
      <div className="authors">
        {" "}
        {book.authors.map((author) => (
          <p key={author}>{author} </p>
        ))}{" "}
      </div>
    </div>
  );
};

export default BookCard;
