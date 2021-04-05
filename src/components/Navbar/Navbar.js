import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header id="header">
      <nav>
        <div className="navbar">
          <img src="images/shotopof.png" alt="logo shotopof" className="logo" />
          <Link to="/" className="menu_link">
            Accueil
          </Link>
          <Link to="/presentation" className="menu_link">
            Présentation
          </Link>
          <Link to="/documentation" className="menu_link">
            Documentation
          </Link>
          <Link to="/members" className="menu_link">
            Membres
          </Link>
        </div>
      </nav>
    </header>
  );
};
