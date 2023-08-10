import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./App.css";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import AddBook from "../pages/AddBook";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </>
  );
};

export default App;
