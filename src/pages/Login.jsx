import React, { useState } from "react";
import "../style/Login.css"; // Import CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons"; // Import the fa-xmark icon
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../style/Signup.css"; // Import CSS file

const Login = ({ onClose }) => {
  const navigate = useNavigate(); // Use navigate for navigation

  // State to track the active button
  const [activeButton, setActiveButton] = useState(null);

  // Handle the signup navigation
  const handleSignup = () => {
    setActiveButton("signup"); // Mark "Signup" as active
    navigate("/signup"); // Navigate to the signup page
  };

  const handleLogin = () => {
    setActiveButton("login"); // Mark "Login" as active
    // Add your login logic here
  };

  return (
    <div className="popup-overlay">
      <div className="login-form">
        <button className="close-btn" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2>Login Form</h2>
        <input type="text" placeholder="Email or Phone" />
        <input type="password" placeholder="Password" />
        <button className="forgot-password-btn">Forgot Password?</button>
        <button
          className={`login-button ${activeButton === "login" ? "active" : ""}`}
          onClick={handleLogin}
        >
          LOGIN
        </button>
        <p className="signup-text">
          Not a member?{" "}
          <button
            className={`signup-btn ${activeButton === "signup" ? "active" : ""}`}
            onClick={handleSignup}
          >
            Signup now
          </button>
        </p>
      </div>
    </div>
  );
};

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true); // Set to true to show the login form by default

  const closePopup = () => {
    setIsPopupOpen(false);
    window.location.href = "http://localhost:3000/"; // Redirect to the homepage
  };

  return (
    <div className="app">
      {isPopupOpen && <Login onClose={closePopup} />}
    </div>
  );
};

export default App;
