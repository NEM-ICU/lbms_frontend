import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Home.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/books/list");
        setBooks(res.data.books);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);
  console.log(books);
  return (
    <div className="container">
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.isbn}>
            <img
              src="https://www.picmaker.com/assets/images/bookcovermaker/template-1.png"
              alt="cover"
            />
            <h2>{book.name}</h2>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
