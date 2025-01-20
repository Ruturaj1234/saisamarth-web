/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <nav className="navbar navbar-expand-lg text-light py-3 border-bottom border-3 border-warning animate-navbar">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <Link
            className="navbar-brand text-uppercase fw-bold text-warning"
            to="/"
          >
            <img src={logo} alt="Logo" className="navbar-logo img-fluid me-3" />
            Saisamarth Polytech Pvt. Ltd.
          </Link>
        </div>
        <button
          className="navbar-toggler bg-light"
          type="button"
          onClick={handleToggle}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isMenuOpen ? "show" : ""
          }`}
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation"
                to="/"
                onClick={handleMenuItemClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation"
                to="/aboutus"
                onClick={handleMenuItemClick}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation"
                to="/contactus"
                onClick={handleMenuItemClick}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation"
                to="/product"
                onClick={handleMenuItemClick}
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation"
                to="/application"
                onClick={handleMenuItemClick}
              >
                Application
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation"
                to="/clients"
                onClick={handleMenuItemClick}
              >
                Clients
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

