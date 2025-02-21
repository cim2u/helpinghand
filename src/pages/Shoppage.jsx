import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../style/Shoppage.css"; // Ensure this file exists

function Shoppage() {
  return (
    <div className="box">
      {/* Image */}
      <div className="image1"></div>

      {/* Navigation Bar */}
      <nav className="topbar">
        <div className="nav-links">
          <Link to="/about">
            <button className="nav-btn">About</button>
          </Link>
          <Link to="/shop">
            <button className="nav-btn">Shop</button>
          </Link>
          <Link to="/help">
            <button className="nav-btn">Help</button>
          </Link>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-box">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>

      {/* Hand and Helping Text */}
      <div className="hand">Hand</div>
      <div className="helping">Helping</div>

      {/* Box Help Section */}
      <div className="box-help"></div>

      {/* Grid Layout */}
      <div className="grid-container">
        <div className="grid-item">Item</div>
        <div className="grid-item">Item</div>
        <div className="grid-item">Item</div>
      </div>

      {/* Logout Button */}
      <div className="container">
        <Link to="/logout">
          <button className="logout-btn">LOG OUT</button>
        </Link>
      </div>

      {/* Most Purchased & Most Donated Section */}
      <div className="stats-container">
        <div className="column">
          <h3>Most Purchased</h3>
          <div className="content-box"></div>
        </div>
        <div className="column">
          <h3>Most Donated</h3>
          <div className="content-box"></div>
        </div>
      </div>
    </div>
  );
}

export default Shoppage;
