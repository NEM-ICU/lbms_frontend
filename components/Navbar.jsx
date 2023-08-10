import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        BookHub
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link
            to="/login"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/add"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            Add Book
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
