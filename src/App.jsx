import { Route, Routes, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/Login.jsx"; 
import Signup from "./pages/Signup.jsx"; 
import Shoppage from "./pages/Shoppage.jsx"; 
import About from "./pages/About.jsx"; 
import Help from "./pages/Help.jsx"; 
import Subscribe from "./pages/Subscribe.jsx"; 
import "./App.css"; 

export default function App() {
    const location = useLocation();
    
    // Track the active path for navigation highlighting
    const activePath = location.pathname;

    // Track which button is clicked (either 'login' or 'subscribe')
    const [activeButton, setActiveButton] = useState("");

    // Determine if the authentication buttons should be hidden
    const hideAuthButtons = activePath === "/shop" || activePath === "/help";

    // Handle button click to set the active button
    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    useEffect(() => {
        // Reset the active button when navigating away from authentication-related routes
        if (activePath !== "/signup" && activePath !== "/login" && activePath !== "/subscribe") {
            setActiveButton("");
        }
    }, [activePath]);

    return (
        <div className="app-container">
            <header className="header">
                <div className="logo">
                    <Link to="/" className="hh-logo">
                        <span className="hh-helping">Helping</span>
                        <span className="hh-hand">Hand</span>
                    </Link>
                </div>

                <p className="hh-tagline">CDO’s Marketplace for Student Talent and Creativity!</p>

                <nav className="navbar">
                    <Link to="/about" className={`hh-nav-link ${activePath === "/about" ? "active" : ""}`}>About</Link>
                    <Link to="/shop" className={`hh-nav-link ${activePath === "/shop" ? "active" : ""}`}>Shop</Link>
                    <Link to="/help" className={`hh-nav-link ${activePath === "/help" ? "active" : ""}`}>Help</Link>
                </nav>

                {!hideAuthButtons && (
                    <div className="auth-buttons">
                        <div className="login-container">
                            <Link to="/login">
                                <button
                                    className={`hh-auth-button ${activeButton === "login" ? "active-button" : ""}`}
                                    onClick={() => handleButtonClick("login")}
                                >
                                    Signup/Login
                                </button>
                            </Link>
                        </div>
                        <div className="subscribe-container">
                            <Link to="/subscribe">
                                <button
                                    className={`hh-auth-button ${activeButton === "subscribe" ? "active-button" : ""}`}
                                    onClick={() => handleButtonClick("subscribe")}
                                >
                                    Subscribe
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            <main className="content">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/shop" element={<Shoppage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/subscribe" element={<Subscribe />} />
                </Routes>
            </main>

            <footer className="footer">&copy; 2025 HelpingHand</footer>
        </div>
    );
}
