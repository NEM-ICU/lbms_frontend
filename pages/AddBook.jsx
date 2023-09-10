import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddBook.css"; // Import the newly created CSS file

const AddBook = () => {
  const [book, setBook] = useState({
    name: "",
    isbn: "",
    cover: "",
    category: "",
    author: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/books/create_new_book", book);
      setBook({ name: "", isbn: "", cover: "", category: "", author: "" });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-book-container">
      <h1>Add New Book</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Name"
        name="name"
        className="add-book-input"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="ISBN"
        name="isbn"
        className="add-book-input"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Cover"
        name="cover"
        className="add-book-input"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Category"
        name="category"
        className="add-book-input"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Author"
        name="author"
        className="add-book-input"
      />
      <button onClick={handleSubmit} className="add-book-submit">
        Add
      </button>
    </div>
  );
};

export default AddBook;
