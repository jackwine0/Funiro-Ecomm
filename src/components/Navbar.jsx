import React, { useState } from "react";
import { FaUser, FaHeart, FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import '../css/Navbar.css';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <a href="/" className="navbar-logo-link">
          <LazyLoadImage
            effect="blur"
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1601234567/Meubel_House_Logos-05_rfwvsf.png"
            width="50"
            alt="Logo"
          />
          <strong><span className="sr-only">Funiro</span></strong>
        </a>
      </div>

      <nav className={`navbar-nav ${showNav ? "active" : ""}`}>
        <a href="/" className="navbar-nav-link">
          Home
        </a>
        <a href="/shop" className="navbar-nav-link">
          Shop
        </a>
        <a href="/About" className="navbar-nav-link">
          About
        </a>
        <a href="/Contact" className="navbar-nav-link">
          Contact
        </a>
      </nav>

      <div className="navbar-actions">
        <FaBars className="nav-icon" onClick={() => setShowNav(!showNav)} />
        <div className={`action-links ${showNav ? "active" : ""}`}>
          <FaTimes className="close-icon" onClick={() => setShowNav(!showNav)} />
          <a href="#" className="navbar-action-link">
            <FaUser /><span className="link-text">User</span>
          </a>
          <a href="#" className="navbar-action-link">
            <FaHeart /><span className="link-text">Wishlist</span>
          </a>
          <a href="#" className="navbar-action-link">
            <FaSearch /><span className="link-text">Search</span>
          </a>
          <a href="/cart" className="navbar-action-link">
            <FaShoppingCart /><span className="link-text">Cart</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;