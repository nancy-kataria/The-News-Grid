import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    color: "black",
  };

  return (
    <nav id="main-nav">
      <div className="container">
        <Link to="/" style={navStyle}>
          <img src={logo} alt="NewsGrid" className="logo" />
        </Link>
        <div className="social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </div>
        <ul>
          <Link to="/" style={navStyle}>
            <li className="current">HOME</li>
          </Link>
          <Link to="/about" style={navStyle}>
            <li>ABOUT</li>
          </Link>
        </ul>
      </div>
      <div className="category-container">
        <ul>
          <Link to="/worldNews">
            <li>World</li>
          </Link>
          <Link to="/businessNews">
            <li>Business</li>
          </Link>
          <Link to="/sportsNews">
            <li>Sports</li>
          </Link>
          <Link to="/entertainmentNews">
            <li>Entertainment</li>
          </Link>
          <Link to="/technologyNews">
            <li>Technology</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
