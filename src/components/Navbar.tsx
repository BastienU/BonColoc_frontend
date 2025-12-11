import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <Link to="/">
            <img src="/logo.jpeg" alt="logo" />
        </Link>
        </div>
      </div>

      <div className="nav-buttons">
        <Link to="/register" className="btn">Inscription</Link>
        <Link to="/login" className="btn secondary">Connexion</Link>
      </div>
    </nav>
  );
};

export default Navbar;