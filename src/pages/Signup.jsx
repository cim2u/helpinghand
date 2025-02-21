import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../style/Signup.css";
import API from "../api";

const SignUp = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Logo click handler to navigate to home
  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home page
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.password_confirmation) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await API.post("/register", user);
      alert("Signup successful! Please verify your email.");
      
      // Redirect to Shop page after successful signup
      navigate("/shop");
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box"> {/* The box for the form */}
        
        {/* Logo for Signup Page */}
        <div className="logo" onClick={handleLogoClick}>
          <span className="hh-helping">Helping</span>
          <span className="hh-hand">Hand</span>
        </div>

        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={user.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />

          {/* Password Field */}
          <div className="password-container">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={user.password} onChange={handleChange} required />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password Field */}
          <div className="password-container">
            <input type={showConfirmPassword ? "text" : "password"} name="password_confirmation" placeholder="Confirm Password" value={user.password_confirmation} onChange={handleChange} required />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" disabled={loading}>{loading ? "Signing Up..." : "Sign Up"}</button>
        </form>
        <p>Already have an account? <Link to="/login">Log In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
