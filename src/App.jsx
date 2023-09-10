import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./App.css";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import AddBook from "../pages/AddBook";
import BookPreview from "../components/BookPreview";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/preview" element={<BookPreview />} />
      </Routes>
    </>
  );
};

export default App;
