import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  console.log(book);

  return (
    <>
      <h1>Add New Book</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="name"
        name="name"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="isbn"
        name="isbn"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="cover"
        name="cover"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="category"
        name="category"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="author"
        name="author"
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
};

export default AddBook;
