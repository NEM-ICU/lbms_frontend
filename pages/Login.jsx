import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Login.css";
// ... (previous imports and component definition)

const Login = ({ history }) => {
  // Note the 'history' prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        {
          email,
          password,
        }
      );

      const { userId, token } = response.data;

      // Save userId and token in local storage
      localStorage.setItem("userId", userId);
      localStorage.setItem("token", token);

      // Redirect to homepage after successful login
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <img
        src="https://www.zadwholesalejewelry.com/images/D/E4415.jpg"
        alt="cover_image"
      />
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="form_inputs">
        <input
          type="email"
          placeholder="Email"
          className="input_login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input_login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login_submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
